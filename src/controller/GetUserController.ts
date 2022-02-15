import { Request, Response } from "express";
import { User } from "../entity/User";
import { GetUserService } from "../service/GetUserService";


export class GetUserController {
  async handle(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    const service = new GetUserService();
    const user = await service.execute(id);

    if (user instanceof Error) {
      return response.status(400).json(user.message);
    }

    return response.json(user);
  }
}