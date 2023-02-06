import { NextFunction, Request, Response } from 'express';

export default (req: Request, _: Response, next: NextFunction) => {
  console.log({
    action: `${req.method} : ${req.url}`,
    query: { ...req.query },
  });
  next();
};
