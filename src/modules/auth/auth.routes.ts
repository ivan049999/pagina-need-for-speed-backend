import { Router } from "express";
import { validate } from "../../shared/middleware/validate.js";
import {
  getMe,
  patchProfileBirthDate,
  patchProfileName,
  patchProfileRegional,
  postLogin,
  postPasswordSendCode,
  postPasswordVerifyCode,
  postPhoneSendCode,
  postPhoneVerifyCode,
  postSecondaryEmailSendCode,
  postSecondaryEmailVerifyCode,
  postTwoFactorSendCode,
  postTwoFactorVerifyCode,
  postRegister,
  postStartEmailVerification,
  postVerifyEmailCode,
  patchProfilePassword,
} from "./auth.controller.js";
import {
  loginSchema,
  registerUserSchema,
  startEmailVerificationSchema,
  startPhoneVerificationSchema,
  updateProfileBirthDateSchema,
  updateProfileNameSchema,
  updateProfilePasswordSchema,
  updateProfileRegionalSchema,
  verifyEmailCodeSchema,
  verifyPasswordChangeCodeSchema,
  startSecondaryEmailSchema,
  verifyPhoneCodeSchema,
  verifySecondaryEmailCodeSchema,
  verifyTwoFactorCodeSchema,
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
authRouter.post("/profile/password/send-code", postPasswordSendCode);
authRouter.post(
  "/profile/password/verify",
  validate(verifyPasswordChangeCodeSchema),
  postPasswordVerifyCode
);
authRouter.patch(
  "/profile/password",
  validate(updateProfilePasswordSchema),
  patchProfilePassword
);
authRouter.post("/profile/two-factor/send-code", postTwoFactorSendCode);
authRouter.post(
  "/profile/two-factor/verify",
  validate(verifyTwoFactorCodeSchema),
  postTwoFactorVerifyCode
);
authRouter.post(
  "/profile/secondary-email/send-code",
  validate(startSecondaryEmailSchema),
  postSecondaryEmailSendCode
);
authRouter.post(
  "/profile/secondary-email/verify",
  validate(verifySecondaryEmailCodeSchema),
  postSecondaryEmailVerifyCode
);

