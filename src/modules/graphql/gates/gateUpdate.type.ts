import {GATE_STATUSES_NUMBER} from '@modules/gates/interface';
import {Field, InputType, ObjectType} from '@nestjs/graphql';
import {Type} from 'class-transformer';
import {IsEnum, IsNumber, IsOptional, IsString, Max, MaxLength, Min} from 'class-validator';

@InputType()
export class GateUpdateType {

  @Field({
    description: 'ID шлагбаума',
    nullable: false
  })
  @IsString()
  @MaxLength(255)
  deviceId: string;

  @Field({
    description: 'Имя шлагбаума на карте',
    nullable: true
  })
  @MaxLength(255)
  @IsString()
  @IsOptional()
  name?: string;

  @Field({
    description: 'Состояние шлагбаума(открыт или закрыт)',
    nullable: true
  })
  @IsOptional()
  @IsEnum(GATE_STATUSES_NUMBER)
  @IsNumber()
  state?: number;

  @Field({
    description: 'Широта(latitude) координат шлагбаума',
    nullable: true
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(-180)
  @Max(180)
  lat?: number;

  @Field({
    description: 'Долгота(Longitude) координат шлагбаума',
    nullable: true
  })
  @IsNumber()
  @Type(() => Number)
  @Min(-180)
  @Max(180)
  @IsOptional()
  lng?: number;
}
