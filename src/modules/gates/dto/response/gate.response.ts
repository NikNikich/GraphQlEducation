import {ApiProperty} from '@nestjs/swagger';
import {RowDto} from '@shared/dto';
import {Expose} from 'class-transformer';

export class GatesResponseDto<T = GatesResponseDto<Record<string, unknown>>> extends RowDto<T> {
  @Expose()
  @ApiProperty({type: Number, description: 'Name'})
  state: number;

  @Expose()
  @ApiProperty({type: String, description: 'Name'})
  name: string;

 /* @Expose()
  @Type(() => MapCoordsDataDto)
  @ApiPropertyOptional({type: Object, description: 'Map route data', isArray: true})
  mapRouteData?: MapCoordsDataDto[];

  @Expose()
  @ApiPropertyOptional({type: Number, description: 'Base price'})
  @Transform((value) => value / 100) // Transform price from cent to dollar
  basePrice?: number;*/

}
