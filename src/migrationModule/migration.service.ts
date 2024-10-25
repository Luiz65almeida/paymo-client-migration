import { Injectable } from '@nestjs/common';
import { GoogleSheetsService } from '../googleSheets/googleSheets.service';
import { PaymoService } from '../paymoModule/Paymo.service';

@Injectable()
export class MigrationService {
  constructor(
    private readonly googleSheetsService: GoogleSheetsService,
    private readonly paymoService: PaymoService,
  ) {}

  async migrateClients() {
    const spreadsheetId = 'your-google-sheet-id';
    const range = 'Sheet1!A2:H'; 
  
    try {
      const sheetData = await this.googleSheetsService.getSheetData(spreadsheetId, range);
  
      for (const client of sheetData) {
        
        const clientData = { 
          name: client["name"],
          email: client["email"],
          address: client["address"],
          city: client["city"],
          state: client["state"],
          postalCode: client["postal_code"],
          country: client["country"],
        };
  
        await this.paymoService.createClient(clientData);
        console.log(`Cliente ${clientData.name} migrado com sucesso.`);
      }
  
      return { message: 'Migração concluída com sucesso.' };
    } catch (error) {
      console.error('Erro durante a migração:', error.message);
      throw new Error('Falha na migração dos clientes.');
    }
  }
}  