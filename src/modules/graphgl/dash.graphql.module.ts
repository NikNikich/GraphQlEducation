import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { initialConfig, playgroundConfig } from './graphql.config';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/form/graphql/_schema.gql',
      ...initialConfig,
      ...playgroundConfig,
    }),
  ],
})
export class DashGraphqlModule {}
