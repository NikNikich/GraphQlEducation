import {ApiProperty} from '@nestjs/swagger';
import {Expose} from 'class-transformer';
import {ConstructableDto} from './constructable.dto';

export class SuccessDto extends ConstructableDto<SuccessDto> {
  @Expose()
  @ApiProperty({type: Boolean, description: 'Is success execute request', example: true})
  success: boolean;
}
