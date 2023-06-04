import { Controller, Get, Param, ParseEnumPipe } from '@nestjs/common';
import { AppService } from './app.service';

export enum Role {
    user = 'user',
    guest = 'guest',
    admin = 'admin',
}

@Controller('api/:role')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(@Param('role', new ParseEnumPipe(Role)) role: Role) {
        return this.appService.displayMessage(role);
    }

    @Get('error')
    throwErr() {
        throw new Error('Manual Error Throw!');
    }
}
