import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Frase } from './entities/frase.entity';
import { Model, isValidObjectId } from 'mongoose';

import { UpdateFraseDto } from './dto/update-frase.dto';
import { CreateFraseDto } from './dto/create-frase.dto';

@Injectable()
export class FrasesService {
  constructor(
    @InjectModel(Frase.name)
    private readonly fraseModel: Model<Frase>,

  ) { }

  private handleException(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(`Frase exist in BD ${JSON.stringify(error.keyValue)}`)
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create Frase - Check Server Log`);

  }


  async create(createFraseDto: CreateFraseDto): Promise<Frase> {

    createFraseDto.ingles = createFraseDto.ingles.toLowerCase();
    // createFraseDto.id = uuid();
    try {

      const newFrase = await this.fraseModel.create(createFraseDto);
      return newFrase;

    } catch (error) {

      this.handleException(error);

    }


  }

  findAll() {
    return this.fraseModel.find();;
  }

  async findOne(id: string): Promise<Frase> {

    let frase: Frase;

    if (!isNaN(+id)) {//si hay un term  y convierto el term a number
      frase = await this.fraseModel.findOne({ no: id })
    }

    // MONGO ID : Buscar por id
    if (!frase && isValidObjectId(id)) {
      frase = await this.fraseModel.findById(id);
    }

    // Name : buscar por nombre 
    if (!frase) {
      frase = await this.fraseModel.findOne({ ingles: id.toLowerCase() })
    }



    if (!frase) throw new NotFoundException(`Frase with Id , name or no "${id}" not found `)//exeption (sino eneuntra un frase)
    return frase;

  }

  async update(id: string, updateFraseDto: UpdateFraseDto): Promise<Frase> {

    const frase = await this.findOne(id);  //Si no encunetra mingun frase va a lanzar la exeptioon de arriba 
    // Si pasa de esta linea devuelv el objeto frase

    // if (updateFraseDto.id && updateFraseDto.id !== id) //para que no se actualize el ID
    // throw new BadRequestException(`Frase id: ${id} not is valid `);


    if (updateFraseDto.ingles)
      updateFraseDto.ingles = updateFraseDto.ingles.toLowerCase();

    try {
      // const updateModel = await this.fraseModel.findByIdAndUpdate(_id, { $set: updateFraseDto }, { new: true })
      // .exec();

      await frase.updateOne(updateFraseDto);

      return { ...frase.toJSON(), ...updateFraseDto }; //exparso todas las propiedades del frase con   ...frase.toJSON
      //y sobreescribo las propiedades que tiene el updateFraseDto

    } catch (error) {
      this.handleException(error);

    }

  }

  async remove(id: string): Promise<Frase> {

    // const deletFrase = await this.fraseModel.findByIdAndDelete(id)
    // return deletFrase;

    const { deletedCount } = await this.fraseModel.deleteOne({ _id: id });
    if (deletedCount === 0) {
      throw new BadRequestException(`Pokemon with id "${id}" not found`);
    }
    return; //aqui regrearia el status 200 de que si se elimino

  }


}
