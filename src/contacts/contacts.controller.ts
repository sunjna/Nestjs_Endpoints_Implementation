import { Controller, Get, Post } from '@nestjs/common';
import { Contact } from './contact.entity';
import { ContactsService } from './contacts.service'
import { Put, Delete, Body, Param } from  '@nestjs/common';


@Controller('contacts')
export class ContactsController {

    constructor(private contactService:ContactsService){}

    
    @Get()
    index(): Promise<Contact[]> {
      return this.contactService.findAll();
    }  
    @Post('create')
    async create(@Body() contactData: Contact): Promise<Contact> {
      return this.contactService.create(contactData);
    } 
    @Put(':id/update')
    async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
        contactData.id = Number(id);
        console.log('Update #' + contactData.id)
        return this.contactService.update(contactData);
    }  
    @Delete(':id/delete')
    async delete (@Param('id') id):
    Promise<any>{
        this.contactService.delete(id)
    }

}
