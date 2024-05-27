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
      if (!name || !username || !password) {
        return {
          success: false,
          message: 'Todos los campos son requeridos.'
        }
      }
      const email = await this.prisma.user.findFirst({
        where: {
          username: username
        }
      })

      if (email) {
        return {
          success: false,
          message: 'El correo ya se encuentra registrado.'
        }
      }

      await this.prisma.user.create({
        data: {
          name: name,
          username: username,
          password: password
        }
      })

      return {
        success: true,
        message: '¡Registro exitoso! Por favor inicie sesión.'
      }
    } catch (error) {
      throw new Error('Error creating user')
    }
  }
}
