import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ActivitiesModule } from './activities/activities.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { SchedulingsModule } from './schedulings/schedulings.module';

@Module({
  imports: [UsersModule, AuthModule, PrismaModule, ActivitiesModule, VehiclesModule, SchedulingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
