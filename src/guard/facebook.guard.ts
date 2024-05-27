import { ExecutionContext } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

export class FacebookGuard extends AuthGuard('facebook') {
  async canActivate(context: ExecutionContext) {
    const activate = (await super.canActivate(context)) as boolean
    const request = context.switchToHttp().getRequest()
    await super.logIn(request)
    return activate
  }
}
