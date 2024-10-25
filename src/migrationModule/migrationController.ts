import { Controller, Post } from '@nestjs/common';
import { MigrationService } from './migration.service';

@Controller('migration')
export class MigrationController {
  constructor(private readonly migrationService: MigrationService) {}

  @Post()
  async migrate() {
    return this.migrationService.migrateClients();
  }
}
