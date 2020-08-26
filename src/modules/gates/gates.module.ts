import {GatesController} from '@modules/gates/gates.controller';
import {GatesService} from '@modules/gates/gates.service';
import {GatesRepository} from '@modules/gates/repository/gates.repository';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  controllers: [GatesController],
  providers: [GatesService],
  imports: [TypeOrmModule.forFeature([GatesRepository]), ConfigModule],
  exports: [GatesService]
})
export class EventLinkModule {
}
