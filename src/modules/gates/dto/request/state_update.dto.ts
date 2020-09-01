import {GATE_STATUSES} from '@modules/gates/interface';
import {ApiPropertyOptional} from '@nestjs/swagger';
import {ConstructableDto} from '@shared/dto';
import {IsEnum, IsNotEmpty, IsNumber} from 'class-validator';

export class SateUpdateDto extends ConstructableDto {
  @IsNotEmpty()
  @IsEnum(GATE_STATUSES)
  @IsNumber()
  @ApiPropertyOptional({enum: GATE_STATUSES, description: 'State gate'})
  state: number;
}
