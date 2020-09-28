import {GatesRepository} from '@modules/gates/repository/gates.repository';
import {GraphGatesResolver} from '@modules/graphql/gates/graphGates.resolver';
import {GraphGatesService} from '@modules/graphql/gates/graphGates.service';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  providers: [
    GraphGatesResolver, GraphGatesService
  ],
  imports: [TypeOrmModule.forFeature([GatesRepository]), ConfigModule],
  exports: [GraphGatesService]
})
export class GatesGraphModule {}
