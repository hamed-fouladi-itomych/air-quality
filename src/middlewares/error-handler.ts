import { NextFunction, Request, Response } from 'express';
import { IqairError } from '../handlers/iqairError';

export default (
  err: IqairError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (res.headersSent) {
    return next(err);
  }
  console.warn('error', '', {
    message: 'Error Handler',
    action: `${req.method} : ${req.baseUrl} ${req.url}`,
    body: {
      ...req.body,
      secretKey: undefined,
      publicKey: undefined,
    },
    err,
  });

  res.status(err.status || 500).send(err.message);
};
