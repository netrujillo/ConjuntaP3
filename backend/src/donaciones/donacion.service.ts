import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donacion } from './donacion.entity';

@Injectable()
export class DonacionService {
  constructor(
    @InjectRepository(Donacion)
    private readonly donacionRepository: Repository<Donacion>,
  ) {}

  async listarDonaciones(): Promise<Donacion[]> {
    return this.donacionRepository.find();
  }

  async obtenerDonacion(id: number): Promise<Donacion> {
    const donacion = await this.donacionRepository.findOne({ where: { id } });
    if (!donacion) throw new NotFoundException('Donación no encontrada');
    return donacion;
  }

}
