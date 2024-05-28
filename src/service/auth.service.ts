import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { LoginRequest } from '../request/login.request'
import { PrismaService } from './prisma.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async comparePasswords(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword)
  }

  async validateUser({ username, password }: LoginRequest) {
    const findUser = await this.prisma.user.findFirst({
      where: {
        username: username
      }
    })

    if (!findUser) return null

    if (this.comparePasswords(password, findUser.password)) {
      const user = {
        username: findUser.username,
        id: findUser.id
      }
      return this.jwtService.sign(user)
    }
  }

  async validateOAuthUser({ email, name }: { email: string; name: string }) {
    return this.jwtService.sign({ email, name })
  }

  async findUser(username: string) {
    const user = await this.prisma.user.findFirst({
      where: { username: username }
    })

    return user
  }
}
