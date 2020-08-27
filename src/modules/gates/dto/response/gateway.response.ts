import {ApiProperty} from '@nestjs/swagger';
import {ConstructableDto} from '@shared/dto';
import {Expose} from 'class-transformer';

export class GatewayResponseDto extends ConstructableDto {
  @Expose()
  @ApiProperty({type: String, description: 'Device id'})
  deviceId: string;

  @Expose()
  @ApiProperty({type: Number, description: 'State gate'})
  state: number;
}
