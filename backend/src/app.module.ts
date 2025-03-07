import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonacionModule } from './donaciones/donacion.module';
import { DonanteModule } from './donantes/donante.module';
import { BeneficiarioModule } from './beneficiarios/beneficiario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'sa2001',
      database: 'conjunta-bd',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    DonacionModule,
    DonanteModule,
    BeneficiarioModule
  ],
})
export class AppModule {}
