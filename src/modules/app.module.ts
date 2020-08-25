import {ConfigModule} from '@nestjs/config';
import {Module} from '@nestjs/common';
import {DatabaseModule} from "@modules/database/database.module";

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    DatabaseModule,
  ],
  exports: [ConfigModule],
  providers: [
    ConfigModule,
  ],
})
export class AppModule {
}
