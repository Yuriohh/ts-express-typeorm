import { getRepository } from "typeorm"
import { User } from "../entity/User"

export class GetUserService {
  async execute(id: number): Promise<User | Error> {
    const repo = getRepository(User);
    const user = await repo.findOne(id);

    if (!user) {
      return new Error('User not found');
    }

    return user;
  }
}