import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { ContactsService } from './contacts/contacts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsController } from './contacts/contacts.controller';
import { Contact } from './contacts/contact.entity';


@Module({
  imports: [ContactsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
   }), TypeOrmModule.forFeature(
     [Contact]
   )],
  controllers: [AppController, ContactsController],
  providers: [AppService, ContactsService],
})
export class AppModule {}
