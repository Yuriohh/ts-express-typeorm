import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { DeleteUserController } from "./controller/DeleteUserController";
import { GetAllUsersController } from "./controller/GetAllUsersController";
import { GetUserController } from "./controller/GetUserController";
import { UpdateUserController } from "./controller/UpdateUserController";

const routes = Router();

routes.post('/create', new CreateUserController().handle);
routes.get('/users', new GetAllUsersController().handle);
routes.get('/user/:id', new GetUserController().handle);
routes.put('/user/:id', new UpdateUserController().handle);
routes.delete('/delete/:id', new DeleteUserController().handle);

export { routes }