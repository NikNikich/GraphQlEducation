import {ApiProperty} from '@nestjs/swagger';
import {Expose} from 'class-transformer';

export class GatesResponseDto<T = GatesResponseDto<Record<string, unknown>>> {
  @Expose()
  @ApiProperty({type: Number, description: 'State gate'})
  state: number;

  @Expose()
  @ApiProperty({type: String, description: 'Name gate'})
  name: string;

  @Expose()
  @ApiProperty({type: String, description: 'Device id'})
  deviceId: string;

  @Expose()
  @ApiProperty({type: Number, description: 'Latitude gate'})
  lat: number;

  @Expose()
  @ApiProperty({type: Number, description: 'Longitude gate'})
  lng: number;

}
