import { PrismaService } from '../service/prisma.service'
import { CategoryService } from '../service/category.service'
import { Test, TestingModule } from '@nestjs/testing'
import { Category } from '@prisma/client'

describe('CategoryService', () => {
  let service: CategoryService
  let prismaService: PrismaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryService,
        {
          provide: PrismaService,
          useValue: {
            category: {
              findMany: jest.fn(),
              create: jest.fn()
            }
          }
        }
      ]
    }).compile()

    service = module.get<CategoryService>(CategoryService)
    prismaService = module.get<PrismaService>(PrismaService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
    expect(prismaService).toBeDefined()
  })

  describe('getAllCategories', () => {
    it('should get all categories', async () => {
      const expectedCategories: Category[] = [
        {
          id: 1,
          name: 'Shirts'
        },
        {
          id: 2,
          name: 'Jeans'
        }
      ]

      jest
        .spyOn(prismaService.category, 'findMany')
        .mockResolvedValue(expectedCategories)

      const items = await service.getAllCategories()

      expect(items).not.toBeNull()
      expect(items).toEqual(expectedCategories)
    })
  })
})
