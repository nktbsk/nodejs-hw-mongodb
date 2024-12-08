import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch (err) {
    const error = createHttpError(
      400,
      'Invalid ID format. Please check the provided ID.',
      {
        errors: err.details,
      },
    );
    next(error);
  }
};
