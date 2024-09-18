export interface User {
  logged: boolean;
  email: string | null;
  uid: number | null | string;
}

export interface RegisterUser {
  email: string;
  password: string;
}
