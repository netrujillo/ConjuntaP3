import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donacion } from './donacion.entity';
import { Beneficiario } from 'src/beneficiarios/beneficiario.entity';

@Injectable()
export class DonacionService {
  constructor(
    @InjectRepository(Donacion)
    private readonly donacionRepository: Repository<Donacion>,

    @InjectRepository(Beneficiario)
    private readonly beneficiarioRepository: Repository<Beneficiario>,
  ) {}

  async listarDonaciones(): Promise<Donacion[]> {
    return this.donacionRepository.find({
      relations: ['donante', 'beneficiarios'],
    });
  }
  
  async obtenerDonacion(id: number): Promise<Donacion> {
    const donacion = await this.donacionRepository.findOne({
      where: { id },
      relations: ['donante', 'beneficiarios'],
    });
  
    if (!donacion) throw new NotFoundException('Donación no encontrada');
    return donacion;
  }

  async asignarBeneficiarios(idDonacion: number, idBeneficiarios: number[]): Promise<Donacion> {
    const donacion = await this.donacionRepository.findOne({ 
      where: { id: idDonacion }, 
      relations: ['beneficiarios'] 
    });
    
    if (!donacion) {
      throw new NotFoundException('Donación no encontrada');
    }
  
    const beneficiarios = await this.beneficiarioRepository.findByIds(idBeneficiarios);
    
    if (!beneficiarios.length) {
      throw new NotFoundException('No se encontraron beneficiarios');
    }
  
    donacion.beneficiarios = beneficiarios;
    return this.donacionRepository.save(donacion);
  }  
}
