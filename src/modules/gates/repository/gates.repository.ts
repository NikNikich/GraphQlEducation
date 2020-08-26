import {GatesEntity} from '@modules/entities';
import {EntityRepository, Repository} from 'typeorm/index';

@EntityRepository(GatesEntity)
export class GatesRepository extends Repository<GatesEntity> {

}
