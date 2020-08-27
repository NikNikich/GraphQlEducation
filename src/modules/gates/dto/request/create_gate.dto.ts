import {ApiProperty} from '@nestjs/swagger';
import {ConstructableDto} from '@shared/dto';
import {IsNotEmpty, IsString} from 'class-validator';

export class CreateGateDto extends ConstructableDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({type: String, description: 'Device id gate'})
  deviceId: string;
}
