import AppError from '@shared/errors/AppError'
import { startOfHour } from 'date-fns'
import Appointment from '../infra/typeorm/entities/Appointment'
import { RequestToCreateAppointmentDTO } from '../interfaces/Appointments'
import IAppointmentsRepository from '../repositories/IAppointmentsRepository'

class CreateAppointmentService {
  constructor(private appointmentsRepository: IAppointmentsRepository) {}

  public async execute({
    date,
    provider_id,
  }: RequestToCreateAppointmentDTO): Promise<Appointment> {
    const appointmentDate = startOfHour(date)

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      appointmentDate,
    )

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked')
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    })

    return appointment
  }
}

export default CreateAppointmentService
