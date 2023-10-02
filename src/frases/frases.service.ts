import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
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

  async create(createFraseDto: CreateFraseDto): Promise<Frase> {
    try {


      const newFrase = new this.fraseModel(createFraseDto);

      // console.log(`Se guard  o la frase :    ${createFraseDto.ingles}`);
      return await newFrase.save();





    } catch (error) {
      console.log(`Duplicado de datos ${error.code}`);

      if (error.code === 11000) {
        throw new BadRequestException(` The frase ${createFraseDto.ingles}  already exist`)

      }
      throw new InternalServerErrorException(`Something terrible happen!!`)
    }


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
