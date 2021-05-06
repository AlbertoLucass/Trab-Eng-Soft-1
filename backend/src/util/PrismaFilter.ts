import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { Request, Response } from 'express';

@Catch(PrismaClientKnownRequestError)
export class PrismaValidationError implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = 404;
    response.status(status).json({
      statusCode: status,
      exception,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
