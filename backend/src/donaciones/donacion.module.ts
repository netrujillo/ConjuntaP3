import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donacion } from './donacion.entity';
import { DonacionService } from './donacion.service';
import { DonacionController } from './donacion.controller';
import { Beneficiario } from 'src/beneficiarios/beneficiario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Donacion, Beneficiario])],
  providers: [DonacionService],
  controllers: [DonacionController],
  exports: [DonacionService],
})
export class DonacionModule {}
