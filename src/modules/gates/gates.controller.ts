import {CreateGateDto} from '@modules/gates/dto/request/create_gate.dto';
import {SateUpdateDto} from '@modules/gates/dto/request/state_update.dto';
import {UpdateGateDto} from '@modules/gates/dto/request/update_gate.dto';
import {GatesResponseDto} from '@modules/gates/dto/response/gate.response';
import {UUIDResponseDto} from '@modules/gates/dto/response/uuid.response';
import {GatesService} from '@modules/gates/gates.service';
import {ApiKeyGuard} from '@modules/gates/guard/api_key.guard';
import {Body, Controller, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {ApiCreatedResponse, ApiHeader, ApiOkResponse, ApiOperation, ApiTags} from '@nestjs/swagger';
import {ListResponseDto} from '@shared/dto/list.response.dto';
import {mapToListResponseDto} from '@shared/functions/map-to-list-response-dto';
import {mapToResponseDto} from '@shared/functions/map-to-response-dto';

@Controller('gates')
@ApiTags('gates')
export class GatesController {
  constructor(
    private readonly gatesService: GatesService
  ) {
  }

  @Get()
  @ApiOperation({summary: 'Get list gates'})
  @ApiOkResponse({type: GatesResponseDto, isArray: true})
  async getEventLinkByEventId(): Promise<ListResponseDto<GatesResponseDto>> {
    const data = await this.gatesService.getGates();
    return mapToListResponseDto(GatesResponseDto, data);
  }

  @Post()
  @UseGuards(ApiKeyGuard)
  @ApiHeader({name: 'api-key'})
  @ApiOperation({summary: 'Create new Gate'})
  @ApiCreatedResponse({type: Boolean})
  async createGate(
    @Body() dataCreate: CreateGateDto
  ): Promise<Boolean> {
    await this.gatesService.createGate(dataCreate);
    return true;
  }

  @Put(':deviceId')
  @UseGuards(ApiKeyGuard)
  @ApiHeader({name: 'api-key'})
  @ApiOperation({summary: 'Update Gate'})
  @ApiOkResponse({type: GatesResponseDto})
  async updateGate(
    @Param('deviceId') deviceId: string,
    @Body() dataUpdate: UpdateGateDto
  ): Promise<GatesResponseDto> {
    return mapToResponseDto(GatesResponseDto, await this.gatesService.updateGate(deviceId, dataUpdate));
  }

  @Post(':deviceId/state')
  @UseGuards(ApiKeyGuard)
  @ApiHeader({name: 'api-key'})
  @ApiOperation({summary: 'Update state or create gate'})
  @ApiCreatedResponse({type: Boolean})
  async updateOrCreateByState(
    @Param('deviceId') deviceId: string,
    @Body() stateUpdate: SateUpdateDto
  ): Promise<Boolean> {
    await this.gatesService.updateState(deviceId, stateUpdate);
    return true;
  }

  @Get('/newDeviceId')
  @ApiOperation({summary: 'Get list gates'})
  @ApiOkResponse({type: UUIDResponseDto})
  async getNewDeviceUUID(): Promise<UUIDResponseDto> {
    const uuid = await this.gatesService.getNewUUID();
    return mapToResponseDto(UUIDResponseDto, {id: uuid});
  }
}
