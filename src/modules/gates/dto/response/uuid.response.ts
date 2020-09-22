import {ApiProperty} from '@nestjs/swagger';
import {ConstructableDto} from '@shared/dto';
import {Expose} from 'class-transformer';

export class UUIDResponseDto extends ConstructableDto {
  @Expose()
  @ApiProperty({type: String, description: 'Free UUID v4'})
  id: string;
}
