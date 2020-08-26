import {ApiProperty} from '@nestjs/swagger';
import {ListResponseDto} from '@shared/dto/list.response.dto';

declare type Entity<T> = {
  new(): T;
}

export const getManyResponseFor = <E>(type: Entity<E>): typeof ListResponseDto => {
  class GetManyResponseForEntity<E> extends ListResponseDto<E> {
    @ApiProperty({type, isArray: true, description: 'Array list data'})
    data: E[];
  }

  Object.defineProperty(GetManyResponseForEntity, 'name', {
    value: `GetManyResponseFor${type.name}`
  });

  return GetManyResponseForEntity;
};
