const DOCUMENT_PREFIX = "document/";

export const ENDPOINTS = {
  // !----- User Endpoints ------
  LOGIN: "auth/login",
  LOGOUT: "auth/logout",
  REGISTER: "auth/register",
  VERIFY_OTP: "auth/verify-otp",
  FORGET_PASSWORD: "auth/forget-password",
  FORGOT_PASSWORD_VERIFY_OTP: "auth/forgot-password-otp",
  RESET_PASSWORD_EMAIL: "auth/reset-password/email",

  REFRESH_TOKEN: "auth/refresh-token",
  RESET_PASSWORD: "auth/password/reset",
  CHANGE_PASSWORD: "auth/password/change",
  SEND_PASSWORD_CODE: "auth/password/code",
  CREATE_NEW_PASSWORD: "auth/password/create-password",
  USER_PERMISSION: "user/permissions/",

  // !----- Company Endpoints ------
  COMPANY: "company/",
  USER_SIGN: "user/sign/",
  SUPERUSER: "superuser/",

  CO_EMPLOYEES: "user/",
  DEPARTMENTS: "department/",

  CO_SUPERUSERS: "company/superusers",
  CO_TENDERS: "company/tender",
  CO_MARKETINGS: "company/marketing",
  CO_INVENTORIES: "company/inventory",
  CO_SERVICES: "company/service",
  CO_GROUPS: "company/group",
  CO_TASKS: "company/task",
  DAILY_REPORT: "daily_report/",
  DAILY_REPORT_INITIAL_DATA: "daily_report/initial/",
  TODO: "todo/",
  SERVICES: "services/",

  // !----- Listings Endpoints ------
  CUSTOMER: "customer",
  CUSTOMERS_OPTIONS: "customer/options",
  SUPPLIER: "supplier",
  SUPPLIERS_OPTIONS: "supplier/options",
  SUBCONTRACTOR: "subcontractor",
  SUBCONTRACTORS_OPTIONS: "subcontractor/options",
  USER: "user",
  USERS_OPTIONS: "user/options",

  PROJECTS_OPTIONS: "project/options",

  // !----- Documents Endpoints ----
  PO_DOC: `${DOCUMENT_PREFIX}po`,
  PC_DOC: `${DOCUMENT_PREFIX}pc`,
  MATERIAL_DOC: `${DOCUMENT_PREFIX}material`,
  SITE_DOC: `${DOCUMENT_PREFIX}site`,
  EMPLOYEE_DOC: `${DOCUMENT_PREFIX}employee`,
  JOB_OFFER_DOC: `${DOCUMENT_PREFIX}job_offer`,
  SUBCONTRACTOR_DOC: `${DOCUMENT_PREFIX}s_contract`,
  SUBCONTRACTOR_DOC_WORK_STATEMENT: `${DOCUMENT_PREFIX}s_contract/work_statement/`,
  WORK_STATEMENT_DOC: `${DOCUMENT_PREFIX}work_statement`,
  SERVICE_DOC: `${DOCUMENT_PREFIX}service`,
  TENDER_DOC: `${DOCUMENT_PREFIX}tender`,
  MARKETING_DOC: `${DOCUMENT_PREFIX}marketing`,






  DCC: "dcc/",
  FCC: "fcc/",
  DOCUMENT: "document/",
  FINANCIAL: "financial/",

  APPROVE: "approve/",
  REJECT: "reject/",





  TENDER_ADD: "group/marketing/add/",
  TENDER_REMOVE: "group/marketing/remove/",

  MARKETING_ADD: "group/marketing/add/",
  MARKETING_REMOVE: "group/marketing/remove/",

  INVENTORY: "inventory/",
  INVENTORY_ITEMS: "inventory/items/",
  INVENTORY_ITEM: "inventory_item/",
  PROJECT: "project/",
  PROJECT_ADD: "group/project/add/",
  PROJECT_REMOVE: "group/project/remove/",
  TASK: "task/",
  EMPLOYEE_TASKS: "employee/task/",
  PROJECT_TASKS: "project/tasks/",
  GROUP_TASKS: "group/tasks/",
  // EMPLOYEE: "user/",
  MANAGER: "employee/manager/",
  DEPARTMENT_EMPLOYEES: "employee/department/",
  EMPLOYEE_GROUPS: "employee/groups/",
  GROUP: "group/",
  GROUP_ADD: "group/add/",
  GROUP_REMOVE: "group/remove/",
  COMMENT: "comment/",
  PROJECT_EMPLOYEES: "project/employees/",
  WORKFLOW: "company/workflow/",
  CONDITIONS: "company/conditions/",
  CONTRACT_INVOICES: "s_contract/invoices/",
  DEPARTMENT: "department/",


  // !----- STEPPER Endpoints -----
  STEPPER_POSITION: "stepper/user",
  STEPPER_OTP: "stepper/otp",
  STEPPER_COMPANY: "stepper/company",

  // !----- Attendance Endpoints -----
  ATTENDANCE_STATUS: "attendance/status",
  ATTENDANCE_START: "attendance/start",
  ATTENDANCE_END: "attendance/end",

  // !----- Notifications Endpoints -----
  NOTIFICATIONS: "notifications",
  // !-----  Admin Dashboard Endpoints -----
  ADMIN_DASHBOARD: "dashboard/attendance",

  DOWNLOAD_FILE: "/download/file/",
  EMPLOYEES_CSV: "/csv/employees/",

  // NEW CHAT
  ALL_DUAL_CHATS: "chat/dual/chats/",
  ALL_GROUP_CHATS: "chat/group/chats/",
  SINGLE_CHAT: "chat/chat/",
  CREATE_CHAT: "chat/dual/create/",
  SEND_MESSAGE: "websocket/chat/send/",

  // not yet
  PERMISSION: "user/utils/permissions/",
  POSITION: "user/info/position/",
  // CHANGE_PASSWORD :"user/auth/password/change/",
  RESET_PASSWORD_CHANGE: "user/auth/password/reset/change/",
  RESET_PASSWORD_SEND: "user/auth/password/reset/send/",
  RESET_PASSWORD_VERIFY: "user/auth/password/reset/verify/",
  ACTIVATE_ACCOUNT: "user/utils/activate/{otp}/{user_id}",
  PROMOTE: "user/utils/user/promote/",
  PROMOTE_DETAILS: "user/utils/user/promote/",
  TASK_ATTACHMENT: "/management/files/task/",
  TASK_ATTACHMENT_DELETE: "/management/files/task/",
  PROJECT_ATTACHMENT: "/management/files/project/",
  PROJECT_ATTACHMENT_DELETE: "/management/files/project/",
  CATEGORY: "category/",
  EMPLOYEE_CREATE: "user/auth/register/",
  EMPLOYEE_PROJECT: "management/employee/",
  /**  Attendance */
  ATTENDANCE: "attendance/daily",
  EMPLOYEES_ATTENDANCES: "attendance/employees",
  EMPLOYEE_ATTENDANCE: "attendance/employee/",
}
