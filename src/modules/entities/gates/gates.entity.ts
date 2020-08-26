import {Column, Entity} from 'typeorm/index';
import {RowEntity} from '../shared';

@Entity('event')
export class GatesEntity extends RowEntity<GatesEntity> {
  @Column({type: 'varchar', nullable: false, length: 255, unique: true})
  deviceId: string;

  @Column({type: 'varchar', nullable: true, length: 255})
  name?: string;

  @Column({type: 'integer', nullable: false, default: '0'})
  state?: number;

  @Column({type: 'decimal', nullable: true})
  lat?: string;

  @Column({type: 'decimal', nullable: true})
  lng?: string;
}
