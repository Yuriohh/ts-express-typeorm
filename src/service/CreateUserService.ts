import { getRepository } from 'typeorm';
import { User } from '../entity/User';

type UserRequest = {
  name: string,
  email: string,
  password: string,
}

export class CreateUserService {
  async execute({
    name,
    email,
    password
  }: UserRequest): Promise<User | Error> {
    const repo = getRepository(User);

    const json = JSON.stringify(new Date());
    const parsed = JSON.parse(json);
    const date = new Date(parsed);

    if (await repo.findOne({ email })) {
      return new Error('Email already exists');
    }

    const user = repo.create({
      name,
      email,
      password,
      created_at: date,
      updated_at: date
    });

    await repo.save(user);

    return user;
  }

}