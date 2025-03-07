import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { DonacionService } from './donacion.service';

@Controller('donaciones')
export class DonacionController {
  constructor(private readonly donacionService: DonacionService) {}

  @Get()
  async listarDonaciones() {
    return this.donacionService.listarDonaciones();
  }

  @Get(':id')
  async obtenerDonacion(@Param('id') id: number) {
    return this.donacionService.obtenerDonacion(id);
  }

  @Post(':id/beneficiarios')
  async asignarBeneficiarios(
    @Param('id') id: number, 
    @Body() { beneficiarios }: { beneficiarios: number[] }
  ) {
    return this.donacionService.asignarBeneficiarios(id, beneficiarios);
  }
}
