import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, Profile } from 'passport-facebook'
import { AuthService } from '../service/auth.service'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService
  ) {
    super({
      clientID: configService.get<string>('FACEBOOK_CLIENT_ID'),
      clientSecret: configService.get<string>('FACEBOOK_CLIENT_SECRET'),
      callbackURL: configService.get<string>('FACEBOOK_CLIENT_REDIRECT'),
      profileFields: ['id', 'emails', 'name', 'displayName', 'photos']
    })
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const email =
      profile.emails && profile.emails.length > 0
        ? profile.emails[0].value
        : profile.displayName
    const name = profile.displayName
    return await this.authService.validateOAuthUser({ email, name })
  }
}
