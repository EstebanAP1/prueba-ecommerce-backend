import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common'
import { LocalGaurd } from '../guard/local.guard'
import { Request, Response } from 'express'
import { JwtGuard } from '@src/guard/jwt.guard'
import { FacebookGuard } from '@src/guard/facebook.guard'
import { GoogleGuard } from '@src/guard/google.guard'

@Controller('auth')
export class AuthController {
  @Post('login')
  @UseGuards(LocalGaurd)
  async login(@Req() req: Request) {
    return req.user
  }

  @Get('google/login')
  @UseGuards(GoogleGuard)
  async handleGoogleLogin() {}

  @Get('google/redirect')
  @UseGuards(GoogleGuard)
  async handleGoogleRedirect(@Req() req: Request, @Res() res: Response) {
    return res.redirect(`http://localhost:3000/login?token=${req.user}`)
  }

  @Get('facebook/login')
  @UseGuards(FacebookGuard)
  async handleFacebookLogin() {}

  @Get('facebook/redirect')
  @UseGuards(FacebookGuard)
  async handleFacebookRedirect(@Req() req: Request, @Res() res: Response) {
    return res.redirect(`http://localhost:3000/login?token=${req.user}`)
  }

  @Get('status')
  @UseGuards(JwtGuard)
  async status(@Req() req: Request) {
    return req.user
  }
}
