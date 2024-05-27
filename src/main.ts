import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import session from 'express-session'
import passport from 'passport'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.use(
    session({
      secret: 'badwihuadiwbldwalhdaw',
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 60000
      }
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

  app.enableCors({
    origin: (origin, callback) => {
      const allowedOrigins = ['http://localhost:3000']
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length', 'X-Kuma-Revision'],
    credentials: true,
    maxAge: 600
  })

  await app.listen(3001)
}
bootstrap()
