import {errors} from '@errors/errors';
import {GatesEntity} from '@modules/entities';
import {CreateGateDto} from '@modules/gates/dto/request/create_gate.dto';
import {SateUpdateDto} from '@modules/gates/dto/request/state_update.dto';
import {UpdateGateDto} from '@modules/gates/dto/request/update_gate.dto';
import {GatesGateway} from '@modules/gates/gates.gateway';
import {GatesRepository} from '@modules/gates/repository/gates.repository';
import {Injectable} from '@nestjs/common';
import {merge} from 'lodash';
import {v4 as uuidV4} from 'uuid';

@Injectable()
export class GatesService {
  constructor(
    private readonly gatesGateway: GatesGateway,
    private readonly gatesRepository: GatesRepository
  ) {
  }

  async getGates(): Promise<GatesEntity[]> {
    return this.gatesRepository.find();
  }

  async createGate(data: CreateGateDto): Promise<GatesEntity> {
    await this.gatesRepository.findByDeviceIdAndReject(data.deviceId);
    const newGate = new GatesEntity(data);
    return await this.gatesRepository.save(newGate);
  }

  async updateGate(deviceId: string, data: UpdateGateDto): Promise<GatesEntity> {
    let gate = await this.gatesRepository.findByDeviceIdOrReject(deviceId);
    return await this.gatesRepository.save(merge(gate, data));
  }

  async updateState(deviceId: string, data: SateUpdateDto): Promise<GatesEntity> {
    let gate = await this.gatesRepository.findOne({where: {deviceId}});
    if (!gate) {
      gate = await this.createGate({deviceId});
    }
    const saveGate = await this.gatesRepository.save(merge(gate, data));
    try {
      await this.gatesGateway.handleMessage({deviceId, state: data.state});
    } catch (e) {
      throw errors.GateAlreadyExists;
    }
    return saveGate;
  }

  async getNewUUID(): Promise<string> {
    const newUuid = uuidV4();
    const gate = await this.gatesRepository.findOne({where: {deviceId: newUuid}});
    if (gate) {
      return this.getNewUUID();
    }
    return newUuid;
  }
}
