import {DatabaseModule} from '@modules/database/database.module';
import {GatesModule} from '@modules/gates/gates.module';
import {GraphModule} from '@modules/graphql/graphql.module';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    DatabaseModule,
    GatesModule,
    GraphModule
  ],
  exports: [ConfigModule],
  providers: [
    ConfigModule
  ]
})
export class AppModule {
}
