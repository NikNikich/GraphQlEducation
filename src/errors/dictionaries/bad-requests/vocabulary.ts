import {APIError} from '@errors/builder/ErrorBuilder';
import {HTTP_STATUSES} from '@errors/interfaces';
import {IBadRequestErrors} from './interfaces';

export const badRequestVocabulary: IBadRequestErrors = {
  GateAlreadyExists: new APIError(HTTP_STATUSES.BAD, 'Gate is already exist', 1),
};
