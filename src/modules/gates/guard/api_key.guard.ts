import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {get} from "lodash";


@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor() {
  }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKeyHeader = get(request.headers, "api-key")
    return (apiKeyHeader === process.env.DEVICE_KEY);
  }
}
