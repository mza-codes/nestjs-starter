import { Injectable } from '@nestjs/common';
import { Role } from './app.controller';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }

    displayMessage(role: Role) {
        return {
            greeting: 'Hello There!',
            msg: 'Welcome from ' + role,
            role: role,
        };
    }
}
