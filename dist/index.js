var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import ds from "./config/data-source.js";
import { Users } from "./db/entities/users.entity.js";
import { Task } from "./db/entities/task.entity.js";
const app = express();
app.use(express.json());
ds.initialize().then(() => {
    console.log("Database is ready");
});
app.get("/users", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const repo = ds.getRepository(Users);
    const usersData = yield repo.find();
    res.send(usersData);
}));
app.get("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params["id"] ? parseInt(req.params["id"]) : undefined;
    if (!id) {
        res.status(400).send({ error: "Invalid user ID" });
        return;
    }
    const repo = ds.getRepository(Users);
    const user = yield repo.findOneBy({ userid: id });
    res.send(user);
}));
app.get("/task", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const repo = ds.getRepository(Task);
    const taskData = yield repo.find();
    res.send(taskData);
}));
app.get("/task/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params["id"] ? parseInt(req.params["id"]) : undefined;
    if (!id) {
        res.status(400).send({ error: "Invalid task ID" });
        return;
    }
    const repo = ds.getRepository(Task);
    const task = yield repo.findOneBy({ id_list: id });
    res.send(task);
}));
app.get("/task/byMask/:mask", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mask = req.params["mask"];
    if (!mask) {
        res.status(400).send({ error: "Invalid mask" });
        return;
    }
    const repo = ds.getRepository(Task);
    const tasks = yield repo.find({
        where: { title: mask },
    });
    res.send(tasks);
}));
// Middleware
app.use(bodyParser.json());
app.use(session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
}));
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
// Запуск сервера
app.listen(3001, () => {
    console.log("Сервер запущен на порту 3001");
});
