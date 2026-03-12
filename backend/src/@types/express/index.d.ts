declare namespace Express {
  export interface Request {
    user_id: string;
    user_role: Role; // agora sim tipado como enum
  }
}
