import {DatabaseModule} from '@modules/database/database.module';
import {GatesModule} from '@modules/gates/gates.module';
import {GatesGraphqlModule} from '@modules/graphgl/gates/gates.module';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    DatabaseModule,
    GatesModule,
    GatesGraphqlModule
  ],
  exports: [ConfigModule],
  providers: [
    ConfigModule
  ]
})
export class AppModule {
}
