import {APIError} from '@errors/builder/ErrorBuilder';

export interface IBadRequestErrors {
  GateAlreadyExists: APIError;
  GateNotSave: APIError;
}
