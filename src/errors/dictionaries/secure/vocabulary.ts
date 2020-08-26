import {APIError} from '@errors/builder/ErrorBuilder';
import {HTTP_STATUSES} from '@errors/interfaces';
import {ISecureErrors} from './interfaces';

export const secureVocabulary: ISecureErrors = {
  AccessDenied: new APIError(HTTP_STATUSES.FORBIDDEN, 'Access denied', 800),
  NotAuthorize: new APIError(HTTP_STATUSES.UNAUTHORIZED, 'Not authorize', 801)
};
