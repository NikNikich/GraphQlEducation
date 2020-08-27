import {GatesController} from '@modules/gates/gates.controller';
import {GatesGateway} from '@modules/gates/gates.gateway';
import {GatesService} from '@modules/gates/gates.service';
import {GatesRepository} from '@modules/gates/repository/gates.repository';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  controllers: [GatesController],
  providers: [GatesService, GatesGateway],
  imports: [TypeOrmModule.forFeature([GatesRepository]), ConfigModule],
  exports: [GatesService]
})
export class GatesModule {
}
