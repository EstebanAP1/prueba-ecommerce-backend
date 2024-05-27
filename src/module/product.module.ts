import { Module } from '@nestjs/common'
import { ProductService } from '../service/product.service'
import { ProductController } from '@src/controller/product.controller'
import { PrismaModule } from './prisma.module'

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [PrismaModule]
})
export class ProductModule {}
