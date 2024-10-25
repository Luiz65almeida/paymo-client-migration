import { Module } from '@nestjs/common';
import { PaymoService } from './Paymo.service';

@Module({
  providers: [PaymoService],
  exports: [PaymoService],
})
export class PaymoModule {}