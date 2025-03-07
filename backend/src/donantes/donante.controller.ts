import { Controller, Get } from '@nestjs/common';
import { DonanteService } from '../donantes/donante.service';

@Controller('donantes')
export class DonanteController {
  constructor(private readonly donanteService: DonanteService) {}

  @Get()
  async listarDonantes() {
    return this.donanteService.listarDonantes();
  }
}
