import { Module } from '@nestjs/common'
import { AuthModule } from './module/auth.module'
import { UserModule } from './module/user.module'
import { ConfigModule } from '@nestjs/config'
import { PassportModule } from '@nestjs/passport'
import { CategoryModule } from './module/category.module'
import { PaymentModule } from './module/payment.module'
import { ProductModule } from './module/product.module'

@Module({
  imports: [
    ProductModule,
    AuthModule,
    UserModule,
    CategoryModule,
    PaymentModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    PassportModule.register({ session: true })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
