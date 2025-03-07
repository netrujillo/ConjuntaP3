import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donante } from '../donantes/donante.entity';

@Injectable()
export class DonanteService {
  constructor(
    @InjectRepository(Donante)
    private readonly donanteRepository: Repository<Donante>,
  ) {}

  async listarDonantes(): Promise<Donante[]> {
    return this.donanteRepository.find();
  }
}
