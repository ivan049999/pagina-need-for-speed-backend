import { Router } from "express";
import { validate } from "../../shared/middleware/validate.js";
import {
  getMe,
  patchProfileBirthDate,
  patchProfileName,
  postLogin,
  postRegister,
  postStartEmailVerification,
  postVerifyEmailCode,
} from "./auth.controller.js";
import {
  loginSchema,
  registerUserSchema,
  startEmailVerificationSchema,
  updateProfileBirthDateSchema,
  updateProfileNameSchema,
  verifyEmailCodeSchema,
} from "./auth.schema.js";

export const authRouter = Router();

authRouter.post("/verification/start", validate(startEmailVerificationSchema), postStartEmailVerification);
authRouter.post("/verification/verify", validate(verifyEmailCodeSchema), postVerifyEmailCode);
authRouter.post("/register", validate(registerUserSchema), postRegister);
authRouter.post("/login", validate(loginSchema), postLogin);
authRouter.get("/me", getMe);
authRouter.patch("/profile/name", validate(updateProfileNameSchema), patchProfileName);
authRouter.patch(
  "/profile/birth-date",
  validate(updateProfileBirthDateSchema),
  patchProfileBirthDate
);

