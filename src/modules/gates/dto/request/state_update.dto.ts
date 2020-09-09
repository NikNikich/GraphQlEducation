import {GATE_STATUSES} from '@modules/gates/interface';
import {ApiPropertyOptional} from '@nestjs/swagger';
import {ConstructableDto} from '@shared/dto';
import {IsEnum, IsNotEmpty} from 'class-validator';

export class SateUpdateDto extends ConstructableDto {
  @IsNotEmpty()
  @IsEnum(GATE_STATUSES)
  @ApiPropertyOptional({type: String, description: 'State gate'})
  state: number;
}
