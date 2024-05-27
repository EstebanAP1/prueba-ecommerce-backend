import { Module } from '@nestjs/common'
import { CategoryController } from '@src/controller/category.controller'
import { CategoryService } from '@src/service/category.service'
import { PrismaModule } from './prisma.module'

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [PrismaModule]
})
export class CategoryModule {}
