import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'
import { ProductService } from '../service/product.service'
import { Product } from '@prisma/client'

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts()
  }

  @Get('get-in-category/:categoryId')
  async getAllProductsInCategory(
    @Param('categoryId', ParseIntPipe) categoryId: number
  ): Promise<Product[]> {
    return this.productService.getAllProductsInCategory(categoryId)
  }
}
