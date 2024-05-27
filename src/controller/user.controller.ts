import { Body, Controller, Post } from '@nestjs/common'
import { UserService } from '../service/user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(
    @Body()
    {
      name,
      username,
      password
    }: {
      name: string
      username: string
      password: string
    }
  ) {
    return this.userService.registerUser({ name, username, password })
  }
}
