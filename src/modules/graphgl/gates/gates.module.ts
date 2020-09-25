import {GatesResolver} from '@modules/graphgl/gates/gates.resolver';
import {Module} from '@nestjs/common';

@Module({
  providers: [
    GatesResolver
  ],
})
export class GatesGraphqlModule {}
