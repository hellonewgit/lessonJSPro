var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { Task } from "./task.entity.js";
let Users = class Users {
};
__decorate([
    PrimaryColumn({ type: "integer" }),
    __metadata("design:type", Number)
], Users.prototype, "userid", void 0);
__decorate([
    Column({ name: "username", type: "varchar" }),
    __metadata("design:type", String)
], Users.prototype, "username", void 0);
__decorate([
    Column({ name: "password", type: "varchar" }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    Column({ name: "role", type: "varchar" }),
    __metadata("design:type", String)
], Users.prototype, "role", void 0);
__decorate([
    ManyToOne(() => Task, (task) => task.users),
    JoinColumn(),
    __metadata("design:type", Task)
], Users.prototype, "task", void 0);
Users = __decorate([
    Entity("users")
], Users);
export { Users };
