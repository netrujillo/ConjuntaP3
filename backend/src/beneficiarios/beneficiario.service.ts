import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Beneficiario } from '../beneficiarios/beneficiario.entity';

@Injectable()
export class BeneficiarioService {
  constructor(
    @InjectRepository(Beneficiario)
    private readonly beneficiarioRepository: Repository<Beneficiario>,
  ) {}

  async listarBeneficiarios(): Promise<Beneficiario[]> {
    return this.beneficiarioRepository.find({
      relations: ['donaciones'],
    });
  }
}
