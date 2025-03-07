import { Controller, Get } from '@nestjs/common';
import { BeneficiarioService } from '../beneficiarios/beneficiario.service';

@Controller('beneficiarios')
export class BeneficiarioController {
  constructor(private readonly beneficiarioService: BeneficiarioService) {}

  @Get()
  async listarBeneficiarios() {
    return this.beneficiarioService.listarBeneficiarios();
  }
}
