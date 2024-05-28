import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async registerUser({
    name,
    username,
    password
  }: {
    name: string
    username: string
    password: string
  }) {
    try {
      if (!name || !username || !password) throw new Error('Missing fields')
      await this.prisma.user.create({
        data: {
          name: name,
          username: username,
          password: password
        }
      })

      return {
        message: '¡Registro exitoso! Por favor inicie sesión.',
        success: true
      }
    } catch (error) {
      throw new Error('Error creating user')
    }
  }
}
