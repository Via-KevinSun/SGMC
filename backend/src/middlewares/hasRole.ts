import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { Role } from "../generated/prisma-client"; // Correto agora

interface Payload {
  sub: string;
  role: Role;
}

export function hasRole(...allowedRoles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization;

    if (!authToken) {
      return res.status(401).json({ error: "Token missing" });
    }

    const [, token] = authToken.split(" ");

    try {
      const { sub, role } = verify(token, process.env.JWT_SECRET!) as Payload;

      req.user_id = sub;
      req.user_role = role;

      if (!allowedRoles.includes(role)) {
        return res.status(403).json({ error: "Access denied" });
      }

      return next();
    } catch (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
  };
}
