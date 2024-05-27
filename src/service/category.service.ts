import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { CategoryRequest } from '../request/category.request'
import { Category } from '@prisma/client'

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllCategories(): Promise<Category[]> {
    return this.prisma.category.findMany()
  }

  async addCategory(categoryRequest: CategoryRequest) {
    return this.prisma.category.create({
      data: {
        name: categoryRequest.name
      }
    })
  }
}
