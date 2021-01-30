import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getTypeOrmConfig = () => {
    const typeormConfig: TypeOrmModuleOptions = {
        type: 'mongodb',
        database: process.env.DB_NAME,
        url: process.env.DB_URL,
        // The .js file is included as it is finally compiled to javascript.
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        logging: true,
        synchronize: true,
        useUnifiedTopology: true,
    };

    return typeormConfig;
};