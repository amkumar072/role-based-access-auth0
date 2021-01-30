import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getTypeOrmConfig } from './configs/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

const getEnvFilePath = (): string => {
  const currentEnv: string = process.env.NODE_ENV?.toString().trim();
  console.log('-----------------------------------');
  console.log(currentEnv);
  console.log('-----------------------------------');
  const currentPath =
    currentEnv == null ? `.env` : `${currentEnv}.env`;

  console.log('-----------------------------------');
  console.log(currentPath);
  console.log('-----------------------------------');
  return currentPath;
};

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: getEnvFilePath(),
    }),
    TypeOrmModule.forRoot(getTypeOrmConfig()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
