import {Column, Entity} from 'typeorm/index';
import {RowEntity} from '../shared';

@Entity('gate')
export class GatesEntity extends RowEntity<GatesEntity> {
  @Column({type: 'varchar', nullable: false, length: 255, unique: true})
  deviceId: string;

  @Column({type: 'varchar', nullable: true, length: 255})
  name?: string;

  @Column({type: 'integer', nullable: false, default: '0'})
  state?: number;

  @Column({type: 'decimal', nullable: true})
  lat?: number;

  @Column({type: 'decimal', nullable: true})
  lng?: number;
}
