import { compare } from 'bcryptjs'
import { getRepository } from 'typeorm'
import { sign } from 'jsonwebtoken'
import User from '../models/User'
import { RequestToCreateSession } from '../interfaces/Sessions'
import authConfig from '../config/auth'

class AuthenticateUserService {
  public async execute({
    email,
    password,
  }: RequestToCreateSession): Promise<{ user: User; token: string }> {
    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne({
      where: { email },
    })

    if (!user) {
      throw new Error('Incorrect e-mail/password combination')
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new Error('Incorrect e-mail/password combination')
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
