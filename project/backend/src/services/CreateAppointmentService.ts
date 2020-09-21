import { startOfHour } from 'date-fns'
import { RequestToCreateAppointmentDTO } from '../interfaces/Appointments'
import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository'

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository
  }

  public execute({
    date,
    provider,
  }: RequestToCreateAppointmentDTO): Appointment {
    const appointmentDate = startOfHour(date)

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      appointmentDate,
    )

    if (findAppointmentInSameDate) {
      throw new Error('This appointment is already booked')
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    })

    return appointment
  }
}

export default CreateAppointmentService
