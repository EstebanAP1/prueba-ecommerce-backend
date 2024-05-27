import { Module } from '@nestjs/common'
import { PaymentController } from '@src/controller/payment.controller'
import { PaymentService } from '@src/service/payment.service'

@Module({
  controllers: [PaymentController],
  providers: [PaymentService]
})
export class PaymentModule {}
