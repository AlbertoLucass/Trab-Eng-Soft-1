import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Admin } from '../strategy';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): Admin => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
