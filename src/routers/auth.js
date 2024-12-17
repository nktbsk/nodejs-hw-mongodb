import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserSchema, loginUserSchema } from '../validation/auth.js';
import * as controllers from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(controllers.registerUserController),
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(controllers.loginUserController),
);

router.post('/logout', ctrlWrapper(controllers.logoutUserController));

router.post('/refresh', ctrlWrapper(controllers.refreshUserSessionController));

export default router;
