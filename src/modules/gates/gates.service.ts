import {GatesEntity} from '@modules/entities';
import {CreateGateDto} from '@modules/gates/dto/request/create_gate.dto';
import {UpdateGateDto} from '@modules/gates/dto/request/update_gate.dto';
import {GatesRepository} from '@modules/gates/repository/gates.repository';
import {Injectable} from '@nestjs/common';
import {merge} from 'lodash';

@Injectable()
export class GatesService {
  constructor(
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

  async updateState(deviceId: string, data: UpdateGateDto): Promise<GatesEntity> {
    let gate = await this.gatesRepository.findOne({where: {deviceId}});
    if (!gate) {
      gate = await this.createGate({deviceId});
    }
    return await this.gatesRepository.save(merge(gate, data));
  }
}
