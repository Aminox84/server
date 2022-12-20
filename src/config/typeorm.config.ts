import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import entities from '../entities'

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'quiz',
    entities,
    synchronize: true,
  
};