import {errors} from '@errors/errors';
import {GatesEntity} from '@modules/entities';
import {GatesRepository} from '@modules/gates/repository/gates.repository';
import {GateUpdateType} from '@modules/graphql/gates/gateUpdate.type';
import {Injectable} from '@nestjs/common';
import {merge} from 'lodash';

@Injectable()
export class GraphGatesService {
  constructor(
    private readonly gatesRepository: GatesRepository
  ) {
  }

  async findOneById(id: number): Promise<GatesEntity> {
    return this.gatesRepository.findOne({where: {id}});
  }

  async findAll(): Promise<GatesEntity[]> {
    return this.gatesRepository.find();
  }

  async updateGateByDeviceId(update: GateUpdateType): Promise<GatesEntity | boolean> {
    const {deviceId} = update;
    if (!deviceId) {
      return false;
    }
    const gate = await this.gatesRepository.findOne({where: {deviceId}});
    if (gate) {
      return this.gatesRepository.save(merge(gate, update));
    }
    return false;
  }

  async createGate(create: GateUpdateType): Promise<GatesEntity | boolean> {
    const {deviceId} = create;
    if (!deviceId) {
      throw errors.GateNotFound;
    }
    const gate = await this.gatesRepository.findOne({where: {deviceId}});
    if (gate) {
      throw errors.GateNotFound;
    }
    const newGate = new GatesEntity(create);
    return  this.gatesRepository.save(newGate);
  }
}
