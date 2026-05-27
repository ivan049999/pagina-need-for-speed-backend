import { Router } from "express";
import { validate } from "../../shared/middleware/validate.js";
import {
  getMe,
  patchProfileBirthDate,
  patchProfileName,
  patchProfileRegional,
  postLogin,
  postPhoneSendCode,
  postPhoneVerifyCode,
  postRegister,
  postStartEmailVerification,
  postVerifyEmailCode,
} from "./auth.controller.js";
import {
  loginSchema,
  registerUserSchema,
  startEmailVerificationSchema,
  startPhoneVerificationSchema,
  updateProfileBirthDateSchema,
  updateProfileNameSchema,
  updateProfileRegionalSchema,
  verifyEmailCodeSchema,
  verifyPhoneCodeSchema,
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
authRouter.patch(
  "/profile/region",
  validate(updateProfileRegionalSchema),
  patchProfileRegional
);
authRouter.post(
  "/profile/phone/send-code",
  validate(startPhoneVerificationSchema),
  postPhoneSendCode
);
authRouter.post(
  "/profile/phone/verify",
  validate(verifyPhoneCodeSchema),
  postPhoneVerifyCode
);

