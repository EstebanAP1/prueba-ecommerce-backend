import { PassportSerializer } from '@nestjs/passport'
import { AuthService } from '../service/auth.service'
import jwt from 'jsonwebtoken'
import { Injectable } from '@nestjs/common'

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly authService: AuthService) {
    super()
  }

  serializeUser(user: any, done: (arg0: null, arg1: any) => void) {
    done(null, user)
  }

  async deserializeUser(
    payload: any,
    done: (
      arg0: null,
      arg1: { id: number; username: string; password: string }
    ) => any
  ) {
    const token = jwt.verify(payload, 'abc123')
    const username = token.username

    const user = await this.authService.findUser(username)
    return user ? done(null, user) : done(null, null)
  }
}
