import { Controller, Get } from '@nestjs/common'
import { CategoryService } from '../service/category.service'
import { Category } from '@prisma/client'

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategories(): Promise<Category[]> {
    return this.categoryService.getAllCategories()
  }
}
