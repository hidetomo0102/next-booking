export interface UserData {
  name: string;
  email: string;
  password: string;
  avatar?: string | ArrayBuffer | null;
  role?: string;
}
