import { Controller, Post, UseGuards } from '@nestjs/common'
import { PaymentService } from '../service/payment.service'
import { JwtGuard } from '@src/guard/jwt.guard'

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  @UseGuards(JwtGuard)
  simulatePayment(): boolean {
    return this.paymentService.simulatePayment()
  }
}
