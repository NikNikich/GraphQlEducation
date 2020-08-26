import {APIError} from '@errors/builder/ErrorBuilder';

export interface ISecureErrors {
  AccessDenied: APIError;
  NotAuthorize: APIError;
}
