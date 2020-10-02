import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService'
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated'
import { parseISO } from 'date-fns'
import { Router } from 'express'
import AppointmentsRepository from '../../typeorm/repositories/AppointmentsRepository'

const appointmentsRouter = Router()

appointmentsRouter.use(ensureAuthenticated)

// appointmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointmentsRepository.find()

//   return response.json(appointments)
// })

appointmentsRouter.post('/', async (request, response) => {
  const appointmentsRepository = new AppointmentsRepository()
  const { provider_id, date } = request.body
  const parsedDate = parseISO(date)

  const createAppointment = new CreateAppointmentService(appointmentsRepository)

  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider_id,
  })

  return response.json(appointment)
})

export default appointmentsRouter
