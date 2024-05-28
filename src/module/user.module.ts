// UserModule
import { Module } from '@nestjs/common'
import { UserController } from '../controller/user.controller'
import { UserService } from '../service/user.service'
import { PrismaModule } from './prisma.module'
@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule]
})
export class UserModule {}
