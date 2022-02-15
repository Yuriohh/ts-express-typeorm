import { Request, Response } from "express";
import { UpdateUserService } from "../service/UpdateUserService";


export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    const { name, email, password } = request.body;

    const service = new UpdateUserService();
    const user = await service.execute({ id, name, email, password });

    if (user instanceof Error) {
      return response.status(400).json('User not found');
    }

    return response.json(user);
  }
}