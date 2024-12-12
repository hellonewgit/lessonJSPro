var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class CreateTables1702414500000 {
    constructor() {
        this.name = 'CreateTables1702414500000';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
            CREATE TABLE "task" (
                "id_list" SERIAL PRIMARY KEY,
                "title" varchar NOT NULL,
                "description" varchar NOT NULL,
                "difficulty" varchar NOT NULL
            )
        `);
            yield queryRunner.query(`
            CREATE TABLE "users" (
                "userid" SERIAL PRIMARY KEY,
                "username" varchar NOT NULL,
                "password" varchar NOT NULL,
                "role" varchar NOT NULL,
                "taskId" integer,
                CONSTRAINT "FK_task_user" FOREIGN KEY ("taskId") REFERENCES "task"("id_list")
            )
        `);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "users"`);
            yield queryRunner.query(`DROP TABLE "task"`);
        });
    }
}
