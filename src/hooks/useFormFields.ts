import { ICondition } from "@/types/Forms/condition.type";
import { IFormFieldsVariables } from "@/types/Forms/formFields.type";
import { IInstallment } from "@/types/Forms/installment.type";
import { IItem } from "@/types/Forms/Item.type";
import { formatDateForInput } from "@/utils/utils";
import { ConditionKeys, EmployeeDocKeys, InstallmentKeys, ItemKeys, JobOfferDocKeys, PcDocKeys, PoDocKeys, ServiceDocKeys, SiteDocKeys } from "@constants/modalKeys";
import { ROUTES } from "@constants/routes";

const useFormFields = (params: IFormFieldsVariables) => {
  const {
    slug,
    model,
    suppliersOptions,
    customersOptions,
    subcontractorsOptions,
    projectsOptions,
    employeesOptions,
    rolesOptions,
    servicesOptions,
  } = params;
  // SOME CONSTANTS FOR ALL FORMS
  let defaultProject = "";
  let defaultCustomer = "";
  let defaultSupplier = "";
  let defaultSubcontractor = "";
  let defaultEmployee = "";
  let defaultRole = "";
  let defaultService = "";

  let formatedDate = "";
  let handOverDate = "";
  let transactionDate = "";
  let deliveryDate = "";

  if (model) {
    if (projectsOptions && model.project) {
      const project = projectsOptions.find(
        (p: any) => p.value === model.project.id
      );
      defaultProject = project ? project?.value : "";
    }
    if (suppliersOptions && model.supplier) {
      const supplier = suppliersOptions.find(
        (p: any) => p.value === model?.supplier?.id
      );
      defaultSupplier = supplier ? supplier.value : "";
    }
    if (customersOptions && model.customer) {
      const customer = customersOptions.find(
        (p: any) => p.value === model?.customer?.id
      );
      defaultCustomer = customer ? customer.value : "";
    }
    if (subcontractorsOptions && model.subcontractor) {
      const subcontractor = subcontractorsOptions.find(
        (p: any) => p.value === model?.subcontractor?.id
      );
      defaultSubcontractor = subcontractor ? subcontractor.value : "";
    }
    if (employeesOptions && model.employee) {
      const employee = employeesOptions.find(
        (p: any) => p.value === model?.employee?.id
      );
      defaultEmployee = employee ? employee.value : "";
    }
    if (rolesOptions && model.role) {
      const role = rolesOptions.find(
        (p: any) => p.value === model?.role?.id
      );
      defaultRole = role ? role.value : "";
    }
    if (servicesOptions && model.service) {
      const service = servicesOptions.find(
        (p: any) => p.value === model?.service?.id
      );
      defaultService = service ? service.value : "";
    }

    if (model.date) formatedDate = formatDateForInput(model.date);
    if (model.hand_over) handOverDate = formatDateForInput(model.hand_over);
    if (model.transaction_date) transactionDate = formatDateForInput(model.transaction_date);
    if (model.delivery_date) deliveryDate = formatDateForInput(model.delivery_date);
  }


  const loginFields = () => [
    {
      name: "email",
      label: "Email",
      type: "textField",
      autoFocus: true,
      defaultValue: "",
      width: 12,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      autoFocus: false,
      defaultValue: "",
      width: 12,
    },
  ];

  const registerFields = () => [
    {
      name: "company_name",
      label: "Company name",
      type: "textField",
      autoFocus: true,
      defaultValue: "",
      width: 12,
    },
    {
      name: "name",
      label: "Full Name",
      type: "textField",
      autoFocus: false,
      defaultValue: "",
      width: 12,
    },
    {
      name: "email",
      label: "Email",
      type: "textField",
      autoFocus: false,
      defaultValue: "",
      width: 12,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      autoFocus: false,
      defaultValue: "",
      width: 12,
    },
    {
      name: "password_2",
      label: "Password confirmation",
      type: "password",
      autoFocus: false,
      defaultValue: "",
      width: 12,
    },
  ];

  const pcDocCreateFields = () => {
    return [
      {
        name: PcDocKeys.SUBJECT,
        label: "Subject",
        type: "textField",
        autoFocus: true,
        defaultValue: model ? model[PcDocKeys.SUBJECT] : "",
        width: 4,
      },
      {
        name: PcDocKeys.PROJECT,
        label: "Project",
        type: "select",
        autoFocus: false,
        defaultValue: model ? defaultProject : ((projectsOptions && projectsOptions[0]?.value) ?? ''),
        options: projectsOptions,
        width: 4,
      },
      {
        name: PcDocKeys.DATE,
        label: "Date",
        type: "date",
        autoFocus: false,
        defaultValue: model ? formatedDate : "",
        width: 4,
      },
      {
        name: PcDocKeys.DESCRIPTION,
        label: "Description",
        type: "multiline",
        autoFocus: false,
        defaultValue: model ? model[PcDocKeys.DESCRIPTION] : "",
        width: 12,
      },
    ];
  };

  const siteDocCreateFields = () => {
    return [
      {
        name: SiteDocKeys.SUBJECT,
        label: "Subject",
        type: "textField",
        autoFocus: true,
        defaultValue: model ? model[SiteDocKeys.SUBJECT] : "",
        width: 4,
      },
      {
        name: SiteDocKeys.PROJECT,
        label: "Project",
        type: "select",
        autoFocus: false,
        defaultValue: model ? defaultProject : ((projectsOptions && projectsOptions[0]?.value) ?? ''),
        options: projectsOptions,
        width: 4,
      },
      {
        name: SiteDocKeys.DATE,
        label: "Date",
        type: "date",
        autoFocus: false,
        defaultValue: model ? formatedDate : "",
        width: 4,
      },
      {
        name: SiteDocKeys.DESCRIPTION,
        label: "Description",
        type: "multiline",
        autoFocus: false,
        defaultValue: model ? model[SiteDocKeys.DESCRIPTION] : "",
        width: 12,
      },
    ]
  };

  const employeeDocCreateFields = () => {
    return [
      {
        name: EmployeeDocKeys.SUBJECT,
        label: "Subject",
        type: "textField",
        autoFocus: true,
        defaultValue: model ? model[EmployeeDocKeys.SUBJECT] : "",
        width: 6,
      },
      {
        name: EmployeeDocKeys.DATE,
        label: "Date",
        type: "date",
        autoFocus: false,
        defaultValue: model ? formatedDate : "",
        width: 6,
      },
      {
        name: EmployeeDocKeys.DESCRIPTION,
        label: "Description",
        type: "multiline",
        autoFocus: false,
        defaultValue: model ? model[EmployeeDocKeys.DESCRIPTION] : "With reference to the above subject,",
        width: 12,
      },
    ]
  };

  const serviceDocCreateFields = () => {
    return [
      {
        name: ServiceDocKeys.ROLE,
        label: "Role",
        type: "select",
        autoFocus: true,
        defaultValue: model ? defaultRole : ((rolesOptions && rolesOptions[0]?.value) ?? ''),
        options: rolesOptions,
        width: 3,
      },
      {
        name: ServiceDocKeys.SERVICE_TYPE,
        label: "Service",
        type: "select",
        autoFocus: false,
        defaultValue: model ? defaultService : ((servicesOptions && servicesOptions[0]?.value) ?? ''),
        options: servicesOptions,
        width: 3,
      },
      {
        name: ServiceDocKeys.EMPLOYEE_REQ,
        label: "Employee",
        type: "select",
        autoFocus: false,
        defaultValue: model ? defaultEmployee : ((employeesOptions && employeesOptions[0]?.value) ?? ''),
        options: employeesOptions,
        width: 3,
      },
      {
        name: ServiceDocKeys.DATE,
        label: "Date",
        type: "date",
        autoFocus: false,
        defaultValue: model ? formatedDate : "",
        width: 3,
      },
      {
        name: ServiceDocKeys.DESCRIPTION,
        label: "Description",
        type: "multiline",
        autoFocus: false,
        defaultValue: model ? model[ServiceDocKeys.DESCRIPTION] : "",
        width: 12,
      },
    ]
  };

  const jobOfferDocCreateFields = () => {
    return [
      {
        name: JobOfferDocKeys.NAME,
        label: "Subject",
        type: "textField",
        autoFocus: true,
        defaultValue: model ? model[JobOfferDocKeys.NAME] : "",
        width: 6,
      },
      {
        name: JobOfferDocKeys.EMAIL,
        label: "Email",
        type: "textField",
        autoFocus: false,
        defaultValue: model ? model[JobOfferDocKeys.EMAIL] : "",
        width: 6,
      },
      {
        name: JobOfferDocKeys.DATE,
        label: "Date",
        type: "date",
        autoFocus: false,
        defaultValue: model ? formatedDate : "",
        width: 6,
      },
      {
        name: JobOfferDocKeys.CAREER,
        label: "Career",
        type: "textField",
        autoFocus: false,
        defaultValue: model ? model[JobOfferDocKeys.CAREER] : "",
        width: 6,
      },
      {
        name: JobOfferDocKeys.LOCATION,
        label: "Location",
        type: "textField",
        autoFocus: false,
        defaultValue: model ? model[JobOfferDocKeys.LOCATION] : "",
        width: 6,
      },
      {
        name: JobOfferDocKeys.CONTRACT_TYPE,
        label: "Contract type",
        type: "textField",
        autoFocus: false,
        defaultValue: model ? model[JobOfferDocKeys.CONTRACT_TYPE] : "",
        width: 6,
      },
      {
        name: JobOfferDocKeys.DESCRIPTION,
        label: "Description",
        type: "multiline",
        autoFocus: false,
        defaultValue: model ? model[JobOfferDocKeys.DESCRIPTION] : "On behalf of Advanced Construction Power CO. I am pleased to offer you I am pleased to offer you the position of  XXXXX  in our Construction Dept. with the following terms and conditions.",
        width: 12,
      },
    ]
  };

  const poDocCreateFields = () => {
    return [
      {
        name: PoDocKeys.SUBJECT,
        label: "Subject",
        type: "textField",
        autoFocus: true,
        defaultValue: model ? model[PoDocKeys.SUBJECT] : "",
        width: 3,
      },
      {
        name: PoDocKeys.DATE,
        label: "Date",
        type: "date",
        autoFocus: false,
        defaultValue: model ? formatedDate : "",
        width: 3,
      },
      {
        name: PoDocKeys.PROJECT,
        label: "Project",
        type: "select",
        autoFocus: false,
        defaultValue: model ? defaultProject : ((projectsOptions && projectsOptions[0]?.value) ?? ''),
        options: projectsOptions,
        width: 3,
      },
      {
        name: PoDocKeys.SUPPLIER,
        label: "Supplier",
        type: "select",
        autoFocus: false,
        defaultValue: model ? defaultSupplier : ((suppliersOptions && suppliersOptions[0]?.value) ?? ''),
        options: suppliersOptions,
        width: 3,
      },
      {
        name: PoDocKeys.AVAILABILITY,
        label: "Material availability",
        type: "textField",
        autoFocus: false,
        defaultValue: model ? model[PoDocKeys.AVAILABILITY] : "",
        width: 4,
      },
      {
        name: PoDocKeys.TRANSPORTATION,
        label: "Transportation",
        type: "textField",
        autoFocus: false,
        defaultValue: model ? model[PoDocKeys.TRANSPORTATION] : "",
        width: 4,
      },
      {
        name: PoDocKeys.DELIVERY_DATE,
        label: "Delivery data",
        type: "date",
        autoFocus: false,
        defaultValue: model ? model[PoDocKeys.DELIVERY_DATE] : "",
        width: 4,
      },
      {
        name: PoDocKeys.DESCRIPTION,
        label: "Description",
        type: "multiline",
        autoFocus: false,
        defaultValue: model ? model[PoDocKeys.DESCRIPTION] : "",
        width: 12,
      },
    ]
  };


  // Documents More
  const itemFields = () => [
    {
      name: ItemKeys.DESCRIPTION,
      label: "Description",
      type: "textField",
      autoFocus: true,
      defaultValue: model ? model[ItemKeys.DESCRIPTION] : "",
      width: 4,
    },
    {
      name: ItemKeys.NAME,
      label: "Title",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model[ItemKeys.NAME] : "",
      width: 4,
    },
    {
      name: ItemKeys.COUNT,
      label: "Count",
      type: "number",
      autoFocus: false,
      defaultValue: model ? model[ItemKeys.COUNT] : "",
      width: 2,
    },
    {
      name: ItemKeys.PRICE,
      label: "Price",
      type: "number",
      autoFocus: false,
      defaultValue: model ? model[ItemKeys.PRICE] : "",
      width: 2,
    },
  ];

  const conditionFields = () => [
    {
      name: ConditionKeys.CONTENT,
      label: "Condition",
      type: "multiline",
      autoFocus: false,
      defaultValue: model ? model[ConditionKeys.CONTENT] : "",
      width: 12,
    },
  ];

  const installmentFields = () => [
    {
      name: InstallmentKeys.NAME,
      label: "Name",
      type: "textField",
      autoFocus: true,
      defaultValue: model ? model[InstallmentKeys.NAME] : "",
      width: 4,
    },
    {
      name: InstallmentKeys.PERCENTAGE,
      label: "Percentage",
      type: "number",
      autoFocus: false,
      defaultValue: model ? model[InstallmentKeys.PERCENTAGE] : "",
      width: 4,
    },
    {
      name: InstallmentKeys.TOTAL,
      label: "Total",
      type: "number",
      autoFocus: false,
      defaultValue: model ? model[InstallmentKeys.TOTAL] : "",
      width: 4,
    },
    {
      name: InstallmentKeys.DETAILS,
      label: "Details",
      type: "number",
      autoFocus: false,
      defaultValue: model ? model[InstallmentKeys.DETAILS] : "",
      width: 4,
    },
    {
      name: InstallmentKeys.DATE,
      label: "Date",
      type: "date",
      autoFocus: false,
      defaultValue: model ? formatedDate : "",
      width: 4,
    },
  ];





















  const forgetPasswordFields = () => [
    {
      name: "email",
      label: "Email",
      type: "textField",
      autoFocus: true,
      defaultValue: "",
    },
  ];

  const resetPasswordFields = () => [
    {
      name: "email",
      label: "Email",
      type: "textField",
      autoFocus: true,
      defaultValue: "",
    },
    // {
    //   name: "code",
    //   label: strings.code,
    //   type: "textField",
    //   autoFocus: false,
    //   defaultValue: "",
    // },
    {
      name: "newPassword",
      label: "Password",
      type: "password",
      autoFocus: false,
      defaultValue: "",
    },
  ];

  const accountFields = () => [
    {
      name: "domain",
      label: "Name",
      type: "textField",
      autoFocus: true,
      defaultValue: model ? model.domain : "",
    },
    {
      name: "siteTitle",
      label: "Site Title",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.siteTitle : "",
    },
    {
      name: "tagline",
      label: "Tagline",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.tagline : "",
    },
    {
      name: "description",
      label: "Description",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.description : "",
    },
    {
      name: "siteAddress",
      label: "Site Address",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.siteAddress : "",
    },
    // {
    //   name: "defaultLanguage",
    //   label: "Default Language",
    //   type: "select",
    //   autoFocus: false,
    //   defaultValue: model
    //     ? model.defaultLanguage
    //     : languagesOptions
    //       ? languagesOptions[0].value
    //       : "-1",
    //   options: languagesOptions,
    // },
  ];

  const callCenterFields = () => [
    {
      name: "name",
      label: "Name",
      type: "textField",
      autoFocus: true,
      defaultValue: model ? model.name : "",
    },
  ];

  const adminRoleFields = () => [
    {
      name: "name",
      label: "Name",
      type: "textField",
      autoFocus: true,
      defaultValue: model ? model.name : "",
    },
    {
      name: "description",
      label: "Description",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.description : "",
    },
  ];

  const adminGroupsFields = () => [
    {
      name: "name",
      label: "Name",
      type: "textField",
      autoFocus: true,
      defaultValue: model ? model.name : "",
    },
    {
      name: "description",
      label: "Description",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.description : "",
    },
  ];

  const tableFields = () => [
    {
      name: "name",
      label: "Name",
      type: "textField",
      autoFocus: true,
      defaultValue: model ? model.name : "",
    },
    {
      name: "label",
      label: "Label",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.label : "",
    },
    {
      name: "width",
      label: "Width",
      type: "number",
      autoFocus: false,
      defaultValue: model ? model.width : "",
    },
    {
      name: "height",
      label: "Height",
      type: "number",
      autoFocus: false,
      defaultValue: model ? model.height : "",
    },
    {
      name: "capacity",
      label: "Max Covers",
      type: "number",
      autoFocus: false,
      defaultValue: model ? model.capacity : "",
    },
  ];

  const userFields = () => {
    // let defaultGroup = "";

    // if (groupsOptions) {
    //   const group = groupsOptions.find(
    //     (item: any) => item.label === "normal" || item.label === "Normal"
    //   );

    //   defaultGroup = group ? group.value : "";
    // }

    // if (model) defaultGroup = model.group;

    return [
      {
        name: "given_name",
        label: "First Name",
        type: "textField",
        autoFocus: true,
        defaultValue: model ? model.given_name : "",
      },
      {
        name: "family_name",
        label: "Last Name",
        type: "textField",
        autoFocus: false,
        defaultValue: model ? model.family_name : "",
      },
      {
        name: "nickname",
        label: "Nickname",
        type: "textField",
        autoFocus: false,
        defaultValue: model ? model.nickname : "",
      },
      {
        name: "address",
        label: "Address",
        type: "textField",
        autoFocus: false,
        defaultValue: model ? model.address : "",
      },
      {
        name: "phone_number",
        label: "Phone Number",
        type: "phoneNumber",
        autoFocus: false,
        defaultValue: model ? model.phone_number : "",
      },
      {
        name: "birthdate",
        label: "Birth date",
        type: "date",
        autoFocus: false,
        defaultValue: model ? model.birthdate : "",
      },
      {
        name: "email",
        label: "Email",
        type: "textField",
        autoFocus: false,
        defaultValue: model ? model.email : "",
      },
      // {
      //   name: "group",
      //   label: "Group",
      //   type: "select",
      //   autoFocus: false,
      //   defaultValue: defaultGroup,
      //   options: groupsOptions,
      // },
      {
        name: "website",
        label: "Website URL",
        type: "textField",
        autoFocus: false,
        defaultValue: model ? model.website : "",
      },
      {
        name: "facebook",
        label: "Facebook URL",
        type: "textField",
        autoFocus: false,
        defaultValue: model ? model.facebook : "",
      },
      {
        name: "instagram",
        label: "Instagram URL",
        type: "textField",
        autoFocus: false,
        defaultValue: model ? model.instagram : "",
      },
    ];
  };

  const areaFields = () => [
    {
      name: "name",
      label: "Name",
      type: "textField",
      autoFocus: true,
      defaultValue: model ? model.name : "",
    },
    {
      name: "isDefault",
      label: "IS Default",
      type: "checkbox",
      autoFocus: false,
      defaultValue: model ? model.isDefault : "",
    },
  ];

  const conceptFields = () => [
    {
      name: "name",
      label: "Concept Name",
      type: "textField",
      autoFocus: true,
      defaultValue: model ? model.name : "",
    },
  ];

  const featureFields = () => [
    {
      name: "precedence",
      label: "Precedence",
      type: "textField",
      autoFocus: true,
      defaultValue: model ? model.precedence : "",
    },
    {
      name: "name",
      label: "Feature Name",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.name : "",
    },
    {
      name: "icon",
      label: "Feature Icon",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.icon : "",
    },
    {
      name: "slug",
      label: "Feature Slug",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.slug : "",
    },
    // {
    //   name: "parent",
    //   label: "Parent",
    //   type: "select",
    //   autoFocus: false,
    //   defaultValue: model
    //     ? model.parent
    //       ? model.parent
    //       : featuresOptions
    //         ? featuresOptions[0].value
    //         : "-1"
    //     : featuresOptions
    //       ? featuresOptions[0].value
    //       : "-1",
    //   options: featuresOptions,
    // },
    {
      name: "private",
      label: "Private",
      type: "checkbox",
      autoFocus: false,
      defaultValue: model ? model.private : false,
    },
  ];

  const languageFields = () => [
    {
      name: "name",
      label: "Language Name",
      type: "textField",
      autoFocus: true,
      defaultValue: model ? model.name : "",
    },
    {
      name: "code",
      label: "Language Code",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.code : "",
    },
  ];

  const socialLinkFields = () => [
    {
      name: "name",
      label: "Name",
      type: "textField",
      autoFocus: true,
      defaultValue: model ? model.name : "",
    },
    {
      name: "icon",
      label: "Icon",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.code : "",
    },
    {
      name: "slug",
      label: "URL",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.code : "",
    },
  ];

  const groupFields = (numToUpgradeWatch: any, numToDowngradeWatch: any) => [
    {
      name: "name",
      label: "Name",
      type: "textField",
      autoFocus: true,
      defaultValue: model ? model.name : "",
    },
    {
      name: "description",
      label: "Description",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.description : "",
    },
    {
      name: "numToUpgrade",
      label: 'Number of "Check In" to upgrade group',
      type: "number",
      autoFocus: false,
      defaultValue: model
        ? model.numToUpgrade
          ? model.numToUpgrade.toString()
          : "0"
        : "0",
    },
    // {
    //   name: "upgradeGroup",
    //   label: "Upgrade Group",
    //   type: "select",
    //   autoFocus: false,
    //   defaultValue: model
    //     ? model.upgradeGroup
    //       ? model.upgradeGroup
    //       : groupsOptions
    //         ? groupsOptions[0].value
    //         : "-1"
    //     : "-1",
    //   options: groupsOptions,
    //   disabled: numToUpgradeWatch === "0",
    // },
    {
      name: "numToDowngrade",
      label: 'Number of "No Show" to upgrade group',
      type: "number",
      autoFocus: false,
      defaultValue: model
        ? model.numToDowngrade
          ? model.numToDowngrade.toString()
          : "0"
        : "0",
    },
    // {
    //   name: "downgradeGroup",
    //   label: "Downgrade Group",
    //   type: "select",
    //   autoFocus: false,
    //   defaultValue: model
    //     ? model.downgradeGroup
    //       ? model.downgradeGroup
    //       : groupsOptions
    //         ? groupsOptions[0].value
    //         : "-1"
    //     : "-1",
    //   options: groupsOptions,
    //   disabled: numToDowngradeWatch === "0",
    // },
    {
      name: "requireApproval",
      label: "Require Approval",
      type: "checkbox",
      autoFocus: false,
      defaultChecked: model ? model.requireApproval : false,
    },
  ];

  const notificationsFields = (channelsWatch?: any) => [
    {
      name: "name",
      label: "Name",
      type: "textField",
      autoFocus: true,
      defaultValue: model ? model.name : "",
    },
    // {
    //   name: "channel",
    //   label: "Channel",
    //   type: "select",
    //   autoFocus: false,
    //   defaultValue: model ? model.channel : NOTIFICATION_CHANNELS[0].value,
    //   options: NOTIFICATION_CHANNELS,
    // },
    {
      name: "from",
      label: "From",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.from : "",
    },
    {
      name: "message",
      label: "Message",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.message : "",
      hidden: channelsWatch === "email",
    },
    {
      name: "enabled",
      label: "Enabled",
      type: "checkbox",
      autoFocus: false,
      defaultValue: model ? (model.enabled ? model.enabled : false) : false,
    },
    {
      name: "autoSend",
      label: "Auto Send",
      type: "checkbox",
      autoFocus: false,
      defaultValue: model ? (model.autoSend ? model.autoSend : false) : false,
    },
  ];

  const statusFields = () => [
    {
      name: "name",
      label: "Name",
      type: "textField",
      autoFocus: true,
      defaultValue: model ? model.name : "",
    },
    {
      name: "category",
      label: "Category",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.category : "",
    },
  ];

  const flagFields = () => [
    {
      name: "name",
      label: "Name",
      type: "textField",
      autoFocus: true,
      defaultValue: model ? model.name : "",
    },
    {
      name: "icon",
      label: "Icon",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.icon : "",
    },
  ];

  const interestFields = () => [
    {
      name: "name",
      label: "Name",
      type: "textField",
      autoFocus: true,
      defaultValue: model ? model.name : "",
    },
  ];

  const groupSettingFields = () => [
    // {
    //   name: "groupID",
    //   label: "Group",
    //   type: "select",
    //   autoFocus: true,
    //   defaultValue: model
    //     ? model.groupID
    //       ? model.groupID
    //       : groupsOptions
    //         ? groupsOptions[0].value
    //         : "-1"
    //     : "-1",
    //   options: groupsOptions,
    // },
    // {
    //   name: "statusID",
    //   label: "Reservation Status",
    //   type: "select",
    //   autoFocus: false,
    //   defaultValue: model ? model.statusID : statusesSelected,
    //   options: statusesOptions,
    // },
    {
      name: "needsVerification",
      label: "Needs Verification",
      type: "checkbox",
      autoFocus: false,
      defaultValue: model ? model.needsVerification : false,
    },
    {
      name: "needsDeposit",
      label: "Needs Deposit",
      type: "checkbox",
      autoFocus: false,
      defaultValue: model ? model.needsDeposit : false,
    },
    {
      name: "isDefault",
      label: "Is Default",
      type: "checkbox",
      autoFocus: false,
      defaultValue: model ? model.isDefault : false,
    },
    {
      name: "amount",
      label: "Needs Deposit",
      type: "number",
      autoFocus: false,
      defaultValue: model ? model.amount : "0",
    },
  ];

  const planItemFields = () => [
    // {
    //   name: "areaID",
    //   label: "Area",
    //   type: "select",
    //   autoFocus: true,
    //   defaultValue: model ? model.areaID : areasSelected,
    //   options: areasOptions,
    // },
    {
      name: "xPosition",
      label: "X Position",
      type: "number",
      autoFocus: false,
      defaultValue: model ? model.xPosition : "0",
    },
    {
      name: "yPosition",
      label: "Y Position",
      type: "number",
      autoFocus: false,
      defaultValue: model ? model.yPosition : "0",
    },
    {
      name: "name",
      label: "Name",
      type: "textField",
      autoFocus: false,
      defaultValue: model ? model.name : "",
    },
    {
      name: "isReserved",
      label: "Is Reserved",
      type: "checkbox",
      autoFocus: false,
      defaultValue: model ? model.isReserved : false,
    },
    {
      name: "locked",
      label: "Is Locked",
      type: "checkbox",
      autoFocus: false,
      defaultValue: model ? model.locked : false,
    },
    // {
    //   name: "table",
    //   label: "Table",
    //   type: "select",
    //   autoFocus: false,
    //   defaultValue: model ? model.table : tablesSelected,
    //   options: tablesOptions,
    // },
    {
      name: "object",
      label: "Object",
      type: "select",
      autoFocus: false,
      defaultValue: model ? model.object : "-1",
      options: [],
    },
  ];

  // const timeSlotFields = () => [
  //   {
  //     name: "name",
  //     label: "Time Interval",
  //     type: "textField",
  //     autoFocus: true,
  //     defaultValue: model ? model.name : "",
  //   },
  //   {
  //     name: "friendlyName",
  //     label: "Friendly Name",
  //     type: "textField",
  //     autoFocus: false,
  //     defaultValue: model ? model.friendlyName : "",
  //   },
  // ];

  // const userCheckboxes = () => [
  //   // {
  //   //   name: "interests",
  //   //   label: "Interests",
  //   //   type: "checkboxes",
  //   //   autoFocus: false,
  //   //   defaultValue: new Set(),
  //   //   options: interestsOptions,
  //   // },
  //   // {
  //   //   name: "flags",
  //   //   label: "Flags",
  //   //   type: "checkboxes",
  //   //   autoFocus: false,
  //   //   defaultValue: new Set(),
  //   //   options: flagsOptions,
  //   // },
  // ];

  // const accountCheckboxes = () => [
  //   // {
  //   //   name: "languages",
  //   //   label: "Languages",
  //   //   type: "checkboxes",
  //   //   autoFocus: false,
  //   //   defaultValue: model ? new Set(model.languages) : new Set(),
  //   //   options: languagesOptions,
  //   // },
  //   // {
  //   //   name: "features",
  //   //   label: "Features",
  //   //   type: "checkboxes",
  //   //   autoFocus: false,
  //   //   defaultValue: model ? new Set(model.features) : new Set(),
  //   //   options: featuresOptions,
  //   // },
  // ];

  // const adminGroupsCheckboxes = () => [
  //   // {
  //   //   name: "roles",
  //   //   label: "Admin Roles",
  //   //   type: "checkboxes",
  //   //   autoFocus: false,
  //   //   defaultValue: model ? new Set(model.roles) : new Set(),
  //   //   options: adminRolesOptions,
  //   // },
  //   // {
  //   //   name: "users",
  //   //   label: "Admin Users",
  //   //   type: "checkboxes",
  //   //   autoFocus: false,
  //   //   defaultValue: model ? new Set(model.users) : new Set(),
  //   //   options: adminsOptions,
  //   // },
  // ];



  const getFormFields = () => {
    switch (slug) {
      case ROUTES.LOGIN:
        return loginFields();
      case ROUTES.REGISTER:
        return registerFields();

      case ROUTES.CREATE_PC_REQUEST:
        return pcDocCreateFields();
      case ROUTES.EDIT_PC_REQUEST:
        return pcDocCreateFields();

      case ROUTES.CREATE_SITE_REQUEST:
        return siteDocCreateFields();
      case ROUTES.EDIT_SITE_REQUEST:
        return siteDocCreateFields();

      case ROUTES.CREATE_EMPLOYEE_REQUEST:
        return employeeDocCreateFields();
      case ROUTES.EDIT_EMPLOYEE_REQUEST:
        return employeeDocCreateFields();

      case ROUTES.CREATE_SERVICE:
        return serviceDocCreateFields();
      case ROUTES.EDIT_SERVICE:
        return serviceDocCreateFields();

      case ROUTES.CREATE_JOB_OFFER:
        return jobOfferDocCreateFields();
      case ROUTES.EDIT_JOB_OFFER:
        return jobOfferDocCreateFields();

      case ROUTES.CREATE_PO_REQUEST:
        return poDocCreateFields();
      case ROUTES.EDIT_PO_REQUEST:
        return poDocCreateFields();











      case "items":
        return itemFields();
      case "conditions":
        return conditionFields();
      case "installments":
        return installmentFields();







      // case PAGES.ADMINS:
      //   return adminFields();
      // case PAGES.FORGOT_PASSWORD:
      //   return forgetPasswordFields();
      // case PAGES.RESET_PASSWORD:
      //   return resetPasswordFields();
      // case PAGES.ACCOUNTS:
      //   return accountFields();
      // case PAGES.AREAS:
      //   return areaFields();
      // case PAGES.CONCEPTS:
      //   return conceptFields();
      // case PAGES.FEATURES:
      //   return featureFields();
      // case PAGES.LANGUAGES:
      //   return languageFields();
      // case PAGES.SOCIAL_LINKS:
      //   return socialLinkFields();
      // case PAGES.GROUPS:
      //   return groupFields(numToUpgradeWatch, numToDowngradeWatch);
      // case PAGES.RESERVATION_STATUS:
      //   return statusFields();
      // case PAGES.FLAGS:
      //   return flagFields();
      // case PAGES.INTERESTS:
      //   return interestFields();
      // case PAGES.GROUP_SETTINGS:
      //   return groupSettingFields();
      // case PAGES.PLAN_ITEMS:
      //   return planItemFields();
      // case PAGES.GUESTS:
      //   return userFields();
      // case PAGES.CALL_CENTER_SETTINGS:
      //   return callCenterFields();
      // case PAGES.TABLES:
      //   return tableFields();
      // case PAGES.TIME_SLOTS:
      //   return timeSlotFields();
      // case PAGES.BOOKING_CONFIRMATION:
      //   return bookingConfirmationFields();
      // case PAGES.NOTIFICATIONS:
      //   return notificationsFields(channelsWatch);
      // case PAGES.ADMIN_ROLES:
      //   return adminRoleFields();
      // case PAGES.ADMIN_GROUPS:
      //   return adminGroupsFields();
      default:
        return [];
    }
  };

  const getCheckboxesFields = () => {
    switch (slug) {
      // case PAGES.ACCOUNTS:
      //   return accountCheckboxes();
      // case PAGES.GUESTS:
      //   return userCheckboxes();
      // case PAGES.ADMIN_GROUPS:
      //   return adminGroupsCheckboxes();
      default:
        return [];
    }
  };

  return {
    getFormFields,
    getCheckboxesFields,
  };
};

export default useFormFields;
