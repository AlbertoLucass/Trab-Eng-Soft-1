import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdministrationModule } from '../administration/administration.module';
import { PrismaModule } from '../prisma/prisma.module';
import { jwtConstants } from './auth.constraint';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AdminStrategy } from './strategy/';
import { RolesGuard } from './guards';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),

    AdministrationModule,
  ],
  providers: [AuthService, JwtStrategy, AdminStrategy, RolesGuard],
  exports: [AuthService],
})
export class AuthModule {}
