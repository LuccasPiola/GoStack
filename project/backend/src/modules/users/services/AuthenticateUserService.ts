import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import AppError from '@shared/errors/AppError'
import authConfig from '@config/auth'
import { RequestToCreateSession } from '../interfaces/Sessions'
import User from '../infra/typeorm/entities/User'
import IUserRepository from '../repositories/IUsersRepository'

class AuthenticateUserService {
  constructor(private usersRepository: IUserRepository) {}

  public async execute({
    email,
    password,
  }: RequestToCreateSession): Promise<{ user: User; token: string }> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Incorrect e-mail/password combination', 401)
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new AppError('Incorrect e-mail/password combination', 401)
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    })

    return {
      user,
      token,
    }
  }
}

export default AuthenticateUserService
