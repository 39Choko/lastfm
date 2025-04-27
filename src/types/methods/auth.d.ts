import { Session } from "../index";

export interface AuthResponse {
  getToken: {
    token: string;
  };
  getSession: {
    session: Session;
  };
  getMobileSession: {
    session: Session;
  };
}
