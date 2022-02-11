import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";

const routes = Router();

routes.post('/create', new CreateUserController().handle);

export { routes }