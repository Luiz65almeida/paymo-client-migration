import { Module } from '@nestjs/common';
import { GoogleSheetsService } from './googleSheets.service';
import { GoogleSheetsController } from './googleSheets.controller';

@Module({
  controllers: [GoogleSheetsController],
  providers: [GoogleSheetsService],
})
export class GoogleSheetsModule {}