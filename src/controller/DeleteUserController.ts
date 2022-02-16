import { Request, Response } from "express";
import { DeleteUserService } from "../service/DeleteUserService";


export class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = parseInt(request.params.id);
    const service = new DeleteUserService();
    const result: any = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).send('User deleted with success');
  }
}