import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { FrasesModule } from './frases/frases.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
      // useCreateIndex: true,
      autoIndex: true
    }),
    AuthModule,
    FrasesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

  // constructor() {
  //   console.log(process.env);

  // }
}
