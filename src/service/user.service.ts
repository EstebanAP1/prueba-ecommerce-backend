import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  private saltRounds = 10

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds)
  }

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

      const hashedPassword = await this.hashPassword(password)

      await this.prisma.user.create({
        data: {
          name: name,
          username: username,
          password: hashedPassword
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
