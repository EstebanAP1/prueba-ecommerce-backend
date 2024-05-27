import { Test, TestingModule } from '@nestjs/testing'
import { UserService } from '../service/user.service'
import { PrismaService } from '../service/prisma.service'
import { User } from '@prisma/client'

describe('UserService', () => {
  let service: UserService
  let prismaService: PrismaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              create: jest.fn()
            },
            shoppingCart: {
              create: jest.fn()
            }
          }
        }
      ]
    }).compile()

    service = module.get<UserService>(UserService)
    prismaService = module.get<PrismaService>(PrismaService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
    expect(prismaService).toBeDefined()
  })

  describe('register user', () => {
    it('should create user', async () => {
      const name: string = 'Americana'
      const username: string = 'americana@americana.com'
      const password: string = 'americana123'

      const createdUser: User = {
        id: 1,
        name,
        username,
        password
      }

      jest.spyOn(prismaService.user, 'create').mockResolvedValue(createdUser)

      const result = await service.registerUser({ name, username, password })

      expect(result).not.toBeNull()
      expect(result).toEqual(createdUser)
    })
  })
})
