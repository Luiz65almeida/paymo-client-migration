import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PaymoService {
  private readonly paymoApiUrl = 'https://app.paymoapp.com/api/clients';
  private readonly paymoApiKey = 'your-paymo-api-key';

  async createClient(clientData: any) {
    try {
      const response = await axios.post(
        this.paymoApiUrl,
        clientData,
        {
          headers: {
            'Authorization': `Bearer ${this.paymoApiKey}`,
            'Content-Type': 'application/json',
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error creating client in Paymo:', error.response?.data || error.message);
      throw new Error('Failed to create client in Paymo');
    }
  }
}