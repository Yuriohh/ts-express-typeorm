import { getRepository } from "typeorm";
import { User } from "../entity/User";

export class GetAllUsersService {
  async execute() {
    const repo = getRepository(User);
    const users = await repo.find();
    return users;
  }
}