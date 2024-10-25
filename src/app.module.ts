import { Module } from '@nestjs/common';
import { GoogleSheetsModule } from './googleSheets/googleSheets.module';

@Module({
  imports: [GoogleSheetsModule],
})
export class AppModule {}