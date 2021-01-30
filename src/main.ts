import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('YERC')
    .setDescription('Role Based Access Documentation')
    .setVersion('1.0')
    .addTag('Scripts')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  console.log('running port', process.env.PORT);

  // app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
