import {APIError} from '@errors/builder/ErrorBuilder';
import {HTTP_STATUSES} from '@errors/interfaces';
import {INotFoundRequestErrors} from './interfaces';

export const notFoundRequestVocabulary: INotFoundRequestErrors = {
  GateNotFound: new APIError(HTTP_STATUSES.NOT_FOUND, 'Gate not found', 1),
};
