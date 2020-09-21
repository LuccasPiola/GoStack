import { isEqual } from 'date-fns'
import { CreateAppointmentDTO } from '../interfaces/Appointments'
import Appointment from '../models/Appointment'

class AppointmentsRepository {
  private appointments: Appointment[]

  constructor() {
    this.appointments = []
  }

  public all(): Appointment[] {
    return this.appointments
  }

  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date })
    this.appointments.push(appointment)

    return appointment
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    )

    return findAppointment || null
  }
}

export default AppointmentsRepository
