import { getRepository } from "typeorm";
import { User } from "../entity/User";

export class DeleteUserService {
  async execute(id: number): Promise<void | Error> {
    const repo = getRepository(User);

    if (!await repo.findOne(id)) {
      return new Error('User not found');
    }

    await repo.delete(id);
  }
}