import { DataSource } from "typeorm";
import "reflect-metadata";
const usersBD = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "postgres",
    entities: ["./src/db/entities/*.entity{.ts,.js}"],
    migrationsTableName: "__migrations",
    migrations: ["./src/db/migrations/*{.ts,.js}"],
};
export default new DataSource(usersBD);
