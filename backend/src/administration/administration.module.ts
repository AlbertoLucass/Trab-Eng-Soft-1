import { Module } from '@nestjs/common';
import { AdministrationService } from './administration.service';
import { AdministrationController } from './administration.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { RolesGuard } from '../auth/roles.guard';

@Module({
  imports: [PrismaModule],
  controllers: [AdministrationController],
  providers: [AdministrationService, RolesGuard],
  exports: [AdministrationService],
})
export class AdministrationModule {}
