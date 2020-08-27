import {GatewayResponseDto} from '@modules/gates/dto/response/gateway.response';
import {Logger} from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import {Server, Socket} from 'socket.io';

@WebSocketGateway()
export class GatesGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private event = process.env.WEBSOCKET_EVENT;
  private logger: Logger = new Logger('GateGateway');

  @SubscribeMessage('update_status')
  handleMessage(payload: GatewayResponseDto): void {
    this.server.emit(this.event, payload);
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
