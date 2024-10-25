import { Module } from '@nestjs/common';
import { GoogleSheetsModule } from '../googleSheets/googleSheets.module';
import { PaymoModule } from '../paymoModule/paymo.module';
import { MigrationService } from './migration.service';
import { MigrationController } from './migrationController';

@Module({
  imports: [GoogleSheetsModule, PaymoModule],
  providers: [MigrationService],
  controllers: [MigrationController],
})
export class MigrationModule {}