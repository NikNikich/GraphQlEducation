import {ApiProperty} from '@nestjs/swagger';
import {Expose} from 'class-transformer';
import {ConstructableDto} from './constructable.dto';

export class RowDto<T = Record<string, unknown>> extends ConstructableDto<T> {
  @Expose()
  @ApiProperty({
    type: Number,
    description: 'Record id',
    example: 1
  })
  readonly id: number;
}
