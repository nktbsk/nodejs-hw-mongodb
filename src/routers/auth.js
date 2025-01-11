import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import * as schema from '../validation/auth.js';
import * as controllers from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = Router();

router.post(
  '/register',
  validateBody(schema.registerUserSchema),
  ctrlWrapper(controllers.registerUserController),
);

router.post(
  '/login',
  validateBody(schema.loginUserSchema),
  ctrlWrapper(controllers.loginUserController),
);

router.post('/logout', ctrlWrapper(controllers.logoutUserController));

router.post('/refresh', ctrlWrapper(controllers.refreshUserSessionController));

router.post(
  '/send-reset-email',
  validateBody(schema.requestResetEmailSchema),
  ctrlWrapper(controllers.requestResetEmailController),
);

router.post(
  '/reset-pwd',
  validateBody(schema.resetPasswordSchema),
  ctrlWrapper(controllers.resetPasswordController),
);

export default router;
