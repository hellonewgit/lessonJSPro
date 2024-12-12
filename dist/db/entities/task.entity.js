var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Users } from "./users.entity.js";
let Task = class Task {
};
__decorate([
    PrimaryColumn({ type: "integer" }),
    __metadata("design:type", Number)
], Task.prototype, "id_list", void 0);
__decorate([
    Column({ name: "title", type: "varchar" }),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    Column({ name: "description", type: "varchar" }),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    Column({ name: "creatdate", type: "date" }),
    __metadata("design:type", String)
], Task.prototype, "creatdate", void 0);
__decorate([
    Column({ name: "updateat", type: "date" }),
    __metadata("design:type", String)
], Task.prototype, "updateat", void 0);
__decorate([
    Column({ name: "bindTask", type: "integer" }),
    __metadata("design:type", String)
], Task.prototype, "bindTask", void 0);
__decorate([
    Column({ name: "userid", type: "integer" }),
    __metadata("design:type", String)
], Task.prototype, "userid", void 0);
__decorate([
    OneToMany(() => Users, (users) => users.task),
    __metadata("design:type", Array)
], Task.prototype, "users", void 0);
Task = __decorate([
    Entity("task")
], Task);
export { Task };
