import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Admin, Doctor, Patient } from '../strategy';

export const GetUser = createParamDecorator((data, ctx: ExecutionContext):
  | Admin
  | Patient
  | Doctor => {
  const req = ctx.switchToHttp().getRequest();
  return req.user;
});
