import AuthenticateUserService from '@modules/users/services/AuthenticateUserService'
import { Router } from 'express'
import UsersRepository from '../../repositories/UsersRepository'

const sessionsRouter = Router()

sessionsRouter.post('/', async (request, response) => {
  const userRepository = new UsersRepository()
  const { email, password } = request.body

  const authenticateUser = new AuthenticateUserService(userRepository)

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  })

  delete user.password

  return response.json({ user, token })
})

export default sessionsRouter
