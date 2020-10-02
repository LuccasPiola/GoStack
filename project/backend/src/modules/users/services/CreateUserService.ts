import { hash } from 'bcryptjs'
import AppError from '@shared/errors/AppError'
import { RequestToCreateUser } from '../interfaces/Users'
import User from '../infra/typeorm/entities/User'
import IUserRepository from '../repositories/IUsersRepository'

class CreateUserService {
  constructor(private usersRepository: IUserRepository) {}

  public async execute({
    name,
    email,
    password,
  }: RequestToCreateUser): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email)

    if (checkUserExists) {
      throw new AppError('Email address already used.')
    }

    const hashedPassword = await hash(password, 8)

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    })

    return user
  }
}

export default CreateUserService
