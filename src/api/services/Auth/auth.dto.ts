export interface LoginDto {
  email: string;
  password: string;
}

export interface RegistrationDto {
  company_name: string;
  name: string;
  email: string;
  password: string;
  password_2: string;
  role: string;
}

export interface ForgetPasswordOtpDto {
  code: string;
}

export interface ForgetPasswordDto {
  emailOrPhoneNumber: string;
}

export interface ResetPasswordEmailDto {
  accessToken: string | null;
  newPassword: string;
}

export interface ResetPasswordPhoneDto {
  otp: string;
  newPassword: string;
}

export interface VerifyOtpDto {
  code: string;
  phoneNumber: string;
  countryCode: string;
}

export interface OtpBodyDto {
  phoneNumber: string;
  countryCode: string;
}
