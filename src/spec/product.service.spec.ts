import { Test, TestingModule } from '@nestjs/testing'
import { Product } from '@prisma/client'
import { ProductService } from '../service/product.service'
import { PrismaService } from '../service/prisma.service'

describe('ProductService', () => {
  let service: ProductService
  let prismaService: PrismaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: PrismaService,
          useValue: {
            product: {
              findMany: jest.fn(),
              create: jest.fn
            }
          }
        }
      ]
    }).compile()

    service = module.get<ProductService>(ProductService)
    prismaService = module.get<PrismaService>(PrismaService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
    expect(prismaService).toBeDefined()
  })

  describe('getAllProducts', () => {
    it('should return an array of products', async () => {
      const expectedProducts: Product[] = [
        {
          id: 1,
          name: 'Product 1',
          description: 'Description 1',
          price: null,
          stock: 1,
          discount: 10,
          image: 'image1.jpg',
          categoryId: 1
        },
        {
          id: 2,
          name: 'Product 2',
          description: 'Description 2',
          price: null,
          stock: 1,
          discount: 5,
          image: 'image2.jpg',
          categoryId: 1
        }
      ]

      jest
        .spyOn(prismaService.product, 'findMany')
        .mockResolvedValue(expectedProducts)

      const products = await service.getAllProducts()
      expect(products).toEqual(expectedProducts)
    })
  })

  describe('getAllProductsInCategory', () => {
    it('should return a list of products in the category specified', async () => {
      const categoryId: number = 1

      const expectedProductsInCategory: Product[] = [
        {
          id: 1,
          name: 'Camiseta',
          description: 'linda',
          price: null,
          image: 'image.jpg',
          discount: 10,
          stock: 1,
          categoryId: categoryId
        },
        {
          id: 1,
          name: 'Camiseta',
          description: 'linda',
          price: null,
          stock: 1,
          discount: 10,
          image: 'image.jpg',
          categoryId: categoryId
        }
      ]

      jest
        .spyOn(prismaService.product, 'findMany')
        .mockResolvedValue(expectedProductsInCategory)

      const result = await service.getAllProductsInCategory(categoryId)

      expect(result).not.toBeNull()
      expect(result).toEqual(expectedProductsInCategory)
      expect(result.every(product => product.categoryId === categoryId))
    })
  })
})
