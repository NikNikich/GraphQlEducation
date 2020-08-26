import {GATE_STATUSES} from '@modules/gates/interface';
import {ApiPropertyOptional} from '@nestjs/swagger';
import {ConstructableDto} from '@shared/dto';
import {Type} from 'class-transformer';
import {IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min} from 'class-validator';

export class UpdateGateDto extends ConstructableDto {
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({type: String, description: 'Name gate'})
  name?: string;

  @IsEnum(GATE_STATUSES)
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({type: String, description: 'State gate'})
  state?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(-180)
  @Max(180)
  @ApiPropertyOptional({type: String, description: 'Latitude gate'})
  lat?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(-180)
  @Max(180)
  @ApiPropertyOptional({type: String, description: 'Longitude gate'})
  lng?: number;
}
