import {HttpException} from '@nestjs/common';

export class APIError extends HttpException {
  statusCode: number;

  code: number;

  title: string;

  meta: string | object;

  constructor(status: number, title: string, code?: number, meta?: string | object) {
    super({
      error: `${status}`,
      statusCode: status,
      message: title,
      code,
      meta
    }, status);
    this.statusCode = status;
    this.code = code as number;
    this.title = title;
    this.meta = meta;
  }
}
