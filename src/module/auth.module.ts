import { Module } from '@nestjs/common'
import { AuthController } from '../controller/auth.controller'
import { AuthService } from '../service/auth.service'
import { JwtModule } from '@nestjs/jwt'
import { LocalStrategy } from '../strategy/local.strategy'
import { JwtStrategy } from '../strategy/jwt.strategy'
import { GoogleStrategy } from '../strategy/google.strategy'
import { SessionSerializer } from '../serializer/serializer'
import { FacebookStrategy } from '../strategy/facebook.strategy'
import { PrismaModule } from './prisma.module'
// importa a ver correlo a ver y dime

// pera que ahí no está JAJSJASJ
@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' }
    })
  ],
  controllers: [AuthController],
  providers: [
    JwtStrategy,
    AuthService,
    LocalStrategy,
    GoogleStrategy,
    FacebookStrategy,
    SessionSerializer
  ]
})
export class AuthModule {}
