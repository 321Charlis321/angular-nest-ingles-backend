import { Injectable } from '@nestjs/common';
import { CreateFraseDto } from './dto/create-frase.dto';
import { UpdateFraseDto } from './dto/update-frase.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Frase } from './entities/frase.entity';
import { Model } from 'mongoose';

@Injectable()
export class FrasesService {
  constructor(
    @InjectModel(Frase.name) private fraseModel: Model<Frase>
  ) { }

  create(createFraseDto: CreateFraseDto): Promise<Frase> {
    console.log(createFraseDto.ingles);

    const newFrase = new this.fraseModel(createFraseDto);
    return newFrase.save();
  }

  findAll() {
    return this.fraseModel.find();;
  }

  findOne(id: number) {
    return `This action returns a #${id} frase`;
  }

  update(id: number, updateFraseDto: UpdateFraseDto) {
    return `This action updates a #${id} frase`;
  }

  remove(id: number) {
    return `This action removes a #${id} frase`;
  }
}
