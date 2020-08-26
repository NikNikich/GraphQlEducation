import {Controller, Get} from '@nestjs/common';
import {ApiOkResponse, ApiOperation, ApiTags} from '@nestjs/swagger';

@Controller('gates')
@ApiTags('gates')
export class GatesController {
  constructor(
    //private readonly _eventLinkService: EventLinkService
    ) {
  }

  @Get()
  @ApiOperation({summary: 'Get list gates'})
  @ApiOkResponse({type: EventLinkListResponseDto, isArray: true})
  public getEventLinkByEventId(
   // @Param('eventId', ParseIntPipe) eventId: number,
   // @Query() eventLinkQueryDto: EventLinkQueryDto
  ): Promise<EventLinkListResponseDto[]> {
    return 'GetAll';
  }

/*  @Post(':eventId')
  @ApiOperation({summary: 'Create link by some type'})
  @ApiCreatedResponse({type: EventLinkResponseDto})
  public generateLinkByEvent(
    @Param('eventId', ParseIntPipe) eventId: number,
    @Query() eventLinkCreateQueryDto: EventLinkCreateQueryDto
  ): Promise<EventLinkResponseDto> {
    return this._eventLinkService.generateLinkByEvent(eventId, eventLinkCreateQueryDto);
  }

  @Delete(':eventId')
  @ApiOperation({summary: 'Remove link by event id'})
  @ApiOkResponse({type: MessageResponseDto})
  public removeLinkForEvent(
    @Param('eventId', ParseIntPipe) eventId: number
  ): Promise<MessageResponseDto> {
    return this._eventLinkService.removeLinkForEvent(eventId);
  }*/
}
