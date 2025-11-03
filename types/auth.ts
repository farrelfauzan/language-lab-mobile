export interface UserLoginDto {
  emailOrUsername: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  username: string | null;
  languages: any[];
  profile: {
    code: string;
    name: string;
    picture: string;
  };
  role: {
    id: number;
    name: string;
    alias: string | null;
  };
}

export interface UserLoginResponse {
  token: string;
  expires_at: string;
  user: User;
}
