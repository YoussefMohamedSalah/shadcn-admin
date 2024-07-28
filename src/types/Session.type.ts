export interface ISessionCompany {
  id: string;
  name: string;
  address: string;
  logo: string;
  size: string;
  employee_count: number;
  stepper_step: number;
  stepper_state: boolean;
  is_verified: boolean;
  female_count: number;
  male_count: number;
  vat: number;
  shift_start: string;
  shift_end: string;
}

export interface ISessionUser {
  id: string;
  email: string;
  name: string;
  phone_number: string;
  is_loggedIn: boolean;
  role: string;
  sign: string;
  avatar: string;
  shift_start: string;
  shift_end: string;
}

export interface ISession {
  accessToken: string | null;
  refreshToken: string | null;
  user: ISessionUser | null;
  company: ISessionCompany | null;
}
