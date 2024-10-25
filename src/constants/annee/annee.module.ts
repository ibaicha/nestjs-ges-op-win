import { Module } from '@nestjs/common';
import { AnneeController } from './annee.controller';
import { AnneeService } from './annee.service';
import { EventsGateway } from '../../socket/events/events.gateway';

@Module({
  controllers: [AnneeController],
  providers: [AnneeService,EventsGateway]
})
export class AnneeModule {}
