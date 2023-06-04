import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(async function () {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.listen(3000);
})();

/**
 * @param { whitelist: boolean } params mentioned in the dtos will only be available!
 */
