import { Controller, Get } from '@nestjs/common';
import { GoogleSheetsService } from './googleSheets.service';

@Controller('google-sheets')
export class GoogleSheetsController {
  constructor(private readonly googleSheetsService: GoogleSheetsService) {}

  @Get()
  async getSheetData() {
    const spreadsheetId = '1IZ1sSXrj3JHKsxfoC94MOnqk0yv47QLvCA837U7Dqc8';
    const range = 'CLIENTS IMPORT!A:H';
    const data = await this.googleSheetsService.getSheetData(spreadsheetId, range);
    return data;
  }
}