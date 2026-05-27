import { Router } from "express";
import { validate } from "../../shared/middleware/validate.js";
import {
  getMe,
  postLogin,
  postRegister,
  postStartEmailVerification,
  postVerifyEmailCode,
} from "./auth.controller.js";
import {
  loginSchema,
  registerUserSchema,
  startEmailVerificationSchema,
  verifyEmailCodeSchema,
} from "./auth.schema.js";

export const authRouter = Router();

authRouter.post("/verification/start", validate(startEmailVerificationSchema), postStartEmailVerification);
authRouter.post("/verification/verify", validate(verifyEmailCodeSchema), postVerifyEmailCode);
authRouter.post("/register", validate(registerUserSchema), postRegister);
authRouter.post("/login", validate(loginSchema), postLogin);
authRouter.get("/me", getMe);

