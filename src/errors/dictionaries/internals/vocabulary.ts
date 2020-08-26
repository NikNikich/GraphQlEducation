import {APIError} from '@errors/builder/ErrorBuilder';
import {HTTP_STATUSES} from '@errors/interfaces';
import {IInternalErrors} from './interfaces';

export const internalVocabulary: IInternalErrors = {
  ControllerUnknown: new APIError(HTTP_STATUSES.INTERNAL, 'RIController for route unknown', 501),
  MethodOfControllerUnknown: new APIError(HTTP_STATUSES.INTERNAL, 'Method of route unknown', 502),
  ExternalRequestUnknownType: new APIError(HTTP_STATUSES.INTERNAL, 'Unknown type of external request', 503),
  DatabaseNotConnected: new APIError(HTTP_STATUSES.INTERNAL, 'Database didn\'t connect', 504),
  UnparsableSequelizeError: new APIError(HTTP_STATUSES.INTERNAL, 'Unexpected DB error', 505),
  SequelizeError: new APIError(HTTP_STATUSES.INTERNAL, 'The Sequelize Error', 506),
};
