import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor() {
  }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKeyHeader = request.headers.api_key;
    return (apiKeyHeader === process.env.DEVICE_KEY);
  }
}
