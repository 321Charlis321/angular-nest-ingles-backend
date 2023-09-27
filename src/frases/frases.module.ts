import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FrasesService } from './frases.service';
import { FrasesController } from './frases.controller';
import { Frase, FraseSchema } from './entities/frase.entity';

@Module({
  controllers: [FrasesController],
  providers: [FrasesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Frase.name,
        schema: FraseSchema
      }
    ])
  ]
})
export class FrasesModule { }
