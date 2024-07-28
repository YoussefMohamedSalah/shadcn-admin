import { ConditionKeys, EmployeeDocKeys, InstallmentKeys, ItemKeys, JobOfferDocKeys, MarketingDocKeys, MaterialDocKeys, PcDocKeys, PoDocKeys, ServiceDocKeys, SiteDocKeys, SubcontractorDocKeys } from "@constants/modalKeys";
import { ROUTES } from "@constants/routes";
import * as Yup from "yup";

const useFormValidations = (slug: string, action: string) => {
  // const phoneRegExp =
  //   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  const loginValidation = () =>
    Yup.object().shape({
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(40, "Password must not exceed 40 characters"),
    });

  const registerValidation = () =>
    Yup.object().shape({
      company_name: Yup.string()
        .required("Company name is required"),
      name: Yup.string()
        .required("Name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(40, "Password must not exceed 40 characters"),
      password_2: Yup.string()
        .required("Password confirmation is required")
        .oneOf([Yup.ref('password')], "Passwords must match")
    });


  // DOCUMENTS VALIDATIONS
  const pcCreateValidation = () =>
    Yup.object().shape({
      [PcDocKeys.SUBJECT]: Yup.string()
        .required('Subject is required'),

      [PcDocKeys.PROJECT]: Yup.string()
        .required('Project is required'),

      [PcDocKeys.DATE]: Yup.date()
        .required('Date is required'),

      [PcDocKeys.DESCRIPTION]: Yup.string(),

      [PcDocKeys.FILES]: Yup.mixed().test('fileSize', 'File size is too large', (value) => {
        if (!value) return true; // File attachment is optional
        if (value instanceof FileList) {
          let valid = true;
          Array.from(value).forEach((file) => {
            if (file.size > 10485760) { // 10MB
              valid = false;
            }
          });
          return valid;
        }
        return false;
      }).test('fileFormat', 'Unsupported Format', (value) => {
        if (!value) return true; // File attachment is optional
        if (value instanceof FileList) {
          let valid = true;
          Array.from(value).forEach((file) => {
            if (!['image/jpeg', 'image/png', 'application/pdf'].includes(file.type)) {
              valid = false;
            }
          });
          return valid;
        }
        return false;
      }),
      [PcDocKeys.ITEMS]: Yup.array().of(itemValidation),
    }
    );

  const poCreateValidation = () =>
    Yup.object().shape({
      [PoDocKeys.SUBJECT]: Yup.string()
        .required('Subject is required'),

      [PoDocKeys.DATE]: Yup.date()
        .required('Date is required'),

      [PoDocKeys.PROJECT]: Yup.string()
        .required('Project is required'),

      [PoDocKeys.SUPPLIER]: Yup.string()
        .required('Supplier is required'),

      [PoDocKeys.AVAILABILITY]: Yup.string()
        .required('Material Availability is required'),

      [PoDocKeys.TRANSPORTATION]: Yup.string()
        .required('Transportation is required'),

      [PoDocKeys.DELIVERY_DATE]: Yup.date()
        .required('Delivery Date is required'),

      [PoDocKeys.DESCRIPTION]: Yup.string()
        .required('Description is required'),

      [PoDocKeys.FILES]: Yup.mixed()
        .test('fileSize', 'File size is too large', (value) => {
          if (!value) return true; // Attachment is optional
          if (value instanceof File) {
            return value.size <= 10485760; // 10MB
          }
          return false;
        })
        .test('fileFormat', 'Unsupported Format', (value) => {
          if (!value) return true; // Attachment is optional
          if (value instanceof File) {
            return ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
          }
          return false;
        }),
      [PoDocKeys.CONDITIONS]: Yup.array().of(conditionValidation),
      [PoDocKeys.ITEMS]: Yup.array().of(itemValidation),
      [PoDocKeys.INSTALLMENTS]: Yup.array().of(installmentValidation),
    });

  const siteCreateValidation = () =>
    Yup.object().shape({
      [SiteDocKeys.SUBJECT]: Yup.string()
        .required('Subject is required'),

      [SiteDocKeys.PROJECT]: Yup.string()
        .required('Project is required'),

      [SiteDocKeys.DATE]: Yup.date()
        .required('Date is required'),

      [SiteDocKeys.DESCRIPTION]: Yup.string(),
    });

  const materialCreateValidation = () =>
    Yup.object().shape({
      [MaterialDocKeys.SUBJECT]: Yup.string()
        .required('Subject is required'),

      [MaterialDocKeys.PROJECT]: Yup.string()
        .required('Project is required'),

      [MaterialDocKeys.DATE]: Yup.date()
        .required('Date is required'),

      [MaterialDocKeys.DESCRIPTION]: Yup.string(),

      [MaterialDocKeys.FILES]: Yup.mixed()
        .test('fileSize', 'File size is too large', (value) => {
          if (!value) return true; // Attachment is optional
          if (value instanceof File) {
            return value.size <= 10485760; // 10MB
          }
          return false;
        })
        .test('fileFormat', 'Unsupported Format', (value) => {
          if (!value) return true; // Attachment is optional
          if (value instanceof File) {
            return ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
          }
          return false;
        }),

      // [MaterialDocKeys.ITEMS]: Yup.array().of(itemValidation),
    });

  const employeeCreateValidation = () =>
    Yup.object().shape({
      [EmployeeDocKeys.SUBJECT]: Yup.string()
        .required('Subject is required'),

      [EmployeeDocKeys.DATE]: Yup.date()
        .required('Date is required'),

      [EmployeeDocKeys.DESCRIPTION]: Yup.string(),
    });

  const contractDocCreateValidation = () =>
    Yup.object().shape({
      [SubcontractorDocKeys.SUBJECT]: Yup.string()
        .required('Subject is required'),

      [SubcontractorDocKeys.DATE]: Yup.date()
        .required('Date is required'),

      [SubcontractorDocKeys.PROJECT]: Yup.string()
        .required('Project is required'),

      [SubcontractorDocKeys.SUB_CONTRACTOR]: Yup.string()
        .required('Subcontractor is required'),

      [SubcontractorDocKeys.DESCRIPTION]: Yup.string()
        .required('Description is required'),

      [SubcontractorDocKeys.FILES]: Yup.mixed()
        .test('fileSize', 'File size is too large', (value) => {
          if (!value) return true; // Attachment is optional
          if (value instanceof File) {
            return value.size <= 10485760; // 10MB
          }
          return false;
        })
        .test('fileFormat', 'Unsupported Format', (value) => {
          if (!value) return true; // Attachment is optional
          if (value instanceof File) {
            return ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
          }
          return false;
        }),
      [SubcontractorDocKeys.CONDITIONS]: Yup.array().of(conditionValidation),
      [SubcontractorDocKeys.ITEMS]: Yup.array().of(itemValidation),
      [SubcontractorDocKeys.INSTALLMENTS]: Yup.array().of(installmentValidation),
    });

  const jobOfferCreateValidation = () =>
    Yup.object().shape({
      [JobOfferDocKeys.NAME]: Yup.string()
        .required('Name is required'),

      [JobOfferDocKeys.DATE]: Yup.date()
        .required('Date is required'),

      [JobOfferDocKeys.EMAIL]: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),

      [JobOfferDocKeys.CAREER]: Yup.string()
        .required('Career is required'),

      [JobOfferDocKeys.LOCATION]: Yup.string()
        .required('Location is required'),

      [JobOfferDocKeys.CONTRACT_TYPE]: Yup.string()
        .required('Contract type is required'),

      [JobOfferDocKeys.DESCRIPTION]: Yup.string()
        .required('Description is required'),

      [JobOfferDocKeys.FILES]: Yup.mixed()
        .test('fileSize', 'File size is too large', (value) => {
          if (!value) return true; // Attachment is optional
          if (value instanceof File) {
            return value.size <= 10485760; // 10MB
          }
          return false;
        })
        .test('fileFormat', 'Unsupported Format', (value) => {
          if (!value) return true; // Attachment is optional
          if (value instanceof File) {
            return ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
          }
          return false;
        }),
      [JobOfferDocKeys.CONDITIONS]: Yup.array().of(conditionValidation),
    });

  const marketingCreateValidation = () =>
    Yup.object().shape({
      [MarketingDocKeys.SUBJECT]: Yup.string()
        .required('Subject is required'),

      [MarketingDocKeys.DATE]: Yup.date()
        .required('Date is required'),

      [MarketingDocKeys.HAND_OVER]: Yup.date()
        .required('Hand Over Date is required'),

      [MarketingDocKeys.DESCRIPTION]: Yup.string()
        .required('Description is required'),

      [MarketingDocKeys.FILES]: Yup.mixed()
        .test('fileSize', 'File size is too large', (value) => {
          if (!value) return true; // Attachment is optional
          if (value instanceof File) {
            return value.size <= 10485760; // 10MB
          }
          return false;
        })
        .test('fileFormat', 'Unsupported Format', (value) => {
          if (!value) return true; // Attachment is optional
          if (value instanceof File) {
            return ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
          }
          return false;
        }),
    });

  const serviceCreateValidation = () =>
    Yup.object().shape({
      [ServiceDocKeys.ROLE]: Yup.string()
        .required('Role is required'),

      [ServiceDocKeys.SERVICE_TYPE]: Yup.string()
        .required('Service is required'),

      [ServiceDocKeys.EMPLOYEE_REQ]: Yup.string()
        .required('Employee is required'),

      [ServiceDocKeys.DATE]: Yup.date()
        .required('Date is required'),

      [ServiceDocKeys.DESCRIPTION]: Yup.string()
        .required('Description is required'),

      [ServiceDocKeys.FILES]: Yup.mixed()
        .test('fileSize', 'File size is too large', (value) => {
          if (!value) return true; // Attachment is optional
          if (value instanceof File) {
            return value.size <= 10485760; // 10MB
          }
          return false;
        })
        .test('fileFormat', 'Unsupported Format', (value) => {
          if (!value) return true; // Attachment is optional
          if (value instanceof File) {
            return ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
          }
          return false;
        }),
    });

  // ITEMS - CONDITIONS - INSTALLMENTS
  const conditionValidation = Yup.object().shape({
    [ConditionKeys.CONTENT]: Yup.string().required('Content is required'),
  });

  const installmentValidation = Yup.object().shape({
    [InstallmentKeys.NAME]: Yup.string(),
    [InstallmentKeys.PERCENTAGE]: Yup.string().required('Percentage is required'),
    [InstallmentKeys.TOTAL]: Yup.number().required('Quantity is required'),
    [InstallmentKeys.DETAILS]: Yup.string(),
    [InstallmentKeys.DATE]: Yup.date().required('Date is required'),
  });

  const itemValidation = Yup.object().shape({
    [ItemKeys.DESCRIPTION]: Yup.string(),
    [ItemKeys.NAME]: Yup.string().required('Name is required'),
    [ItemKeys.COUNT]: Yup.number().required('Quantity is required'),
    [ItemKeys.PRICE]: Yup.number().required('Price is required'),
  });




  // const bookingConfirmationValidation = () =>
  //   Yup.object().shape({
  //     email: Yup.string()
  //       .required("Email is required")
  //       .email("Email is invalid"),
  //   });

  // const nameValidation = () =>
  //   Yup.object().shape({
  //     name: Yup.string().required("Name is required"),
  //   });

  // const accountValidation = () =>
  //   Yup.object().shape({
  //     domain: Yup.string().required("Domain is required"),
  //     siteTitle: Yup.string().required("Site Title is required"),
  //     tagline: Yup.string().required("Tagline is required"),
  //     description: Yup.string().required("Description is required"),
  //     siteAddress: Yup.string().required("Site Address is required"),
  //   });

  // const languageValidation = () =>
  //   Yup.object().shape({
  //     name: Yup.string().required("Name is required"),
  //     code: Yup.string().required("Code is required"),
  //   });

  // const featureValidation = () =>
  //   Yup.object().shape({
  //     precedence: Yup.string().required("Precedence is required"),
  //     name: Yup.string().required("Name is required"),
  //     slug: Yup.string().required("URL is required"),
  //   });

  // const socialLinkValidation = () =>
  //   Yup.object().shape({
  //     name: Yup.string().required("Name is required"),
  //     icon: Yup.string().required("Icon is required"),
  //     slug: Yup.string().required("URL is required"),
  //   });

  // const statusValidation = () =>
  //   Yup.object().shape({
  //     name: Yup.string().required("Name is required"),
  //     category: Yup.string().required("Category is required"),
  //   });

  // const groupSettingValidation = () =>
  //   Yup.object().shape({
  //     groupID: Yup.string().required("Group is required"),
  //     statusID: Yup.string().required("Status is required"),
  //   });

  // const usersValidation = () =>
  //   Yup.object().shape({
  //     phone_number: Yup.string()
  //       .matches(phoneRegExp, "Phone number is not valid")
  //       .required("Phone number is required"),
  //     given_name: Yup.string().required("First Name is required"),
  //     family_name: Yup.string().required("Last Name is required"),
  //   });

  // const tableValidation = () =>
  //   Yup.object().shape({
  //     name: Yup.string().required("Name is required"),
  //     label: Yup.string().required("Label is required"),
  //     width: Yup.string().required("Width is required"),
  //     height: Yup.string().required("Height is required"),
  //   });

  // const adminRolesValidation = () =>
  //   Yup.object().shape({
  //     name: Yup.string().required("Name is required"),
  //   });
  // const adminGroupsValidation = () =>
  //   Yup.object().shape({
  //     name: Yup.string().required("Name is required"),
  //   });

  // const planItemValidation = () =>
  //   Yup.object().shape({
  //     areaID: Yup.string().required("Area is required"),
  //     xPosition: Yup.string().required("X Coordinates is required"),
  //     yPosition: Yup.string().required("Y Coordinates is required"),
  //     name: Yup.string().required("Name is required"),
  //   });



  const getValidationSchema = () => {
    switch (slug) {
      case ROUTES.LOGIN:
        return loginValidation();
      case ROUTES.REGISTER:
        return registerValidation();

      // Documents validations
      case ROUTES.CREATE_PC_REQUEST:
        return pcCreateValidation();
      case ROUTES.CREATE_PO_REQUEST:
        return poCreateValidation();
      case ROUTES.CREATE_SITE_REQUEST:
        return siteCreateValidation();
      case ROUTES.CREATE_MATERIAL_REQUEST:
        return materialCreateValidation();
      case ROUTES.CREATE_EMPLOYEE_REQUEST:
        return employeeCreateValidation();
      case ROUTES.CREATE_CONTRACT:
        return contractDocCreateValidation();
      case ROUTES.CREATE_JOB_OFFER:
        return jobOfferCreateValidation();
      case ROUTES.CREATE_MARKETING:
        return marketingCreateValidation();
      case ROUTES.CREATE_SERVICE:
        return serviceCreateValidation();











      // case ROUTES.AREAS:
      //   return nameValidation();
      // case ROUTES.CONCEPTS:
      //   return nameValidation();
      // case ROUTES.FEATURES:
      //   return featureValidation();
      // case ROUTES.LANGUAGES:
      //   return languageValidation();
      // case ROUTES.SOCIAL_LINKS:
      //   return socialLinkValidation();
      // case ROUTES.GROUPS:
      //   return nameValidation();
      // case ROUTES.RESERVATION_STATUS:
      //   return statusValidation();
      // case ROUTES.FLAGS:
      //   return nameValidation();
      // case ROUTES.INTERESTS:
      //   return nameValidation();
      // case ROUTES.GROUP_SETTINGS:
      //   return groupSettingValidation();
      // case ROUTES.GUESTS:
      //   return usersValidation();
      // case ROUTES.TABLES:
      //   return tableValidation();
      // case ROUTES.PLAN_ITEMS:
      //   return planItemValidation();
      // case ROUTES.TIME_SLOTS:
      //   return nameValidation();
      // case ROUTES.BOOKING_CONFIRMATION:
      //   return bookingConfirmationValidation();
      // case ROUTES.ADMIN_ROLES:
      //   return adminRolesValidation();

      default:
        return Yup.object();
    }
  };

  return {
    getValidationSchema,
  };
};

export default useFormValidations;
