import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';

@Injectable()
export class GoogleSheetsService {
  private async authenticate() {
    const auth = new google.auth.GoogleAuth({
      keyFile: '/home/luiz-henrique-almeida/Documentos/DOC projetos/PaymoMigration/interno-ipnet-dev-a3e1897ead02.json', // Caminho para suas credenciais do Google API
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });
    return auth;
  }


  private mapSpreadsheetData(data: string[][]) {
    const [headers, ...rows] = data;

    return rows.map(row => {
      const mappedRow: Record<string, string> = {};

      headers.forEach((header, index) => {
        mappedRow[header] = row[index] || '';
      });

      return mappedRow;
    });
  }

  async getSheetData(spreadsheetId: string, range: string) {
    const auth = await this.authenticate();
    const sheets = google.sheets({ version: 'v4', auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    const data = response.data.values || [];
    return this.mapSpreadsheetData(data);
  }
}

