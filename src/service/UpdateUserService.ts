import { getRepository } from "typeorm"
import { User } from "../entity/User"

type UserRequest = {
  id: number,
  name: string,
  email: string,
  password: string
}

export class UpdateUserService {
  async execute({
    id,
    name,
    email,
    password
  }: UserRequest): Promise<User | Error> {
    const repo = getRepository(User);
    const user = await repo.findOne(id);

    if (!user) {
      return new Error('User not found');
    }

    const json = JSON.stringify(new Date());
    const parsed = JSON.parse(json);
    const date = new Date(parsed);

    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;
    user.updated_at = date;

    repo.save(user);

    return user;
  }
}