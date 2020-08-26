import {errors} from '@errors/errors';
import {GatesEntity} from '@modules/entities';
import {EntityRepository, Repository} from 'typeorm/index';

@EntityRepository(GatesEntity)
export class GatesRepository extends Repository<GatesEntity> {
  async findByDeviceIdOrReject(deviceId: string): Promise<GatesEntity> {
    const gate = await this.findOne({where: {deviceId}});
    if (!gate) {
      throw errors.GateNotFound;
    }
    return gate;
  }

  async findByDeviceIdAndReject(deviceId: string): Promise<void> {
    const gate = await this.findOne({where: {deviceId}});
    if (gate) {
      throw errors.GateAlreadyExists;
    }
  }
}
