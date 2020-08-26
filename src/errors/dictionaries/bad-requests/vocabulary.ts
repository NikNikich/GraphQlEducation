import {APIError} from '@errors/builder/ErrorBuilder';
import {HTTP_STATUSES} from '@errors/interfaces';
import {IBadRequestErrors} from './interfaces';

export const badRequestVocabulary: IBadRequestErrors = {
  UserAlreadyExists: new APIError(HTTP_STATUSES.BAD, 'User is already exist', 1),
};
