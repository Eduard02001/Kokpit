import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = HttpExceptionFilter.extractMessage(exception);

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: ctx.getRequest().url,
      message,
    });
  }

  private static extractMessage(exception: unknown): string | string[] {
    if (!(exception instanceof HttpException)) {
      return 'Erro interno do servidor';
    }

    const response = exception.getResponse();

    if (typeof response === 'string') {
      return response;
    }

    const message = (response as { message?: string | string[] }).message;
    return message ?? exception.message;
  }
}
