import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';
import * as controllers from '../controllers/contacts.js';
import * as schema from '../validation/contacts.js';
import { upload } from '../middlewares/multer.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(controllers.getContactsController));

router.get(
  '/:contactId',
  isValidId,
  ctrlWrapper(controllers.getContactByIdController),
);

router.post(
  '/',
  upload.single('photo'),
  validateBody(schema.createContactsSchema),
  ctrlWrapper(controllers.createContactController),
);

router.patch(
  '/:contactId',
  isValidId,
  upload.single('photo'),
  validateBody(schema.updateContactsSchema),
  ctrlWrapper(controllers.patchContactController),
);

router.delete(
  '/:contactId',
  isValidId,
  ctrlWrapper(controllers.deleteContactController),
);

export default router;
