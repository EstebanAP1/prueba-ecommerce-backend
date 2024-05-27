import { HttpException, Injectable } from '@nestjs/common'
import { Product } from '@prisma/client'
import { ProductRequest } from '../request/product.request'
import { PrismaService } from './prisma.service'

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllProducts(): Promise<Product[]> {
    return this.prisma.product.findMany()
  }

  async getAllProductsInCategory(categoryId: number): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: {
        categoryId: categoryId
      }
    })
  }

  async addProduct(productRequest: ProductRequest): Promise<Product> {
    try {
      const product = await this.prisma.product.create({
        data: {
          name: productRequest.name,
          description: productRequest.description,
          price: productRequest.price,
          stock: productRequest.stock,
          discount: productRequest.discount,
          image: productRequest.image,
          categoryId: productRequest.categoryId
        }
      })

      return product
    } catch (error) {
      throw new HttpException('Error al intentar crear producto', 500)
    }
  }
}
