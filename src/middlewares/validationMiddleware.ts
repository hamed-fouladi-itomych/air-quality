import { NextFunction, Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

export function validationMiddleware<T>(classToValidate: any) {
  return async (
    { query }: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const errors: ValidationError[] = await validate(
      plainToClass(classToValidate, query),
    );

    if (errors.length > 0) {
      const message = errors.map((error: ValidationError) => {
        if (error.children && error.children.length) {
          return Object.values(error.children);
        }
        if (error.constraints) {
          return Object.values(error.constraints);
        }
      });
      // .join(', ');
      res.status(400).send(message);
    } else {
      next();
    }
  };
}
