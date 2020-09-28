import {GatesGraphModule} from '@modules/graphql/gates/graphGates.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { initialConfig, playgroundConfig } from './graphql.config';

@Module({
  imports: [
    GatesGraphModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'src/modules/graphql/schema',
      ...initialConfig,
      ...playgroundConfig,
    }),
  ],
})
export class GraphModule {}
