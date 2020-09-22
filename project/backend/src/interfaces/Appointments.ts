export interface CreateAppointmentDTO {
  provider: string
  date: Date
}

export interface RequestToCreateAppointmentDTO {
  provider_id: string
  date: Date
}
