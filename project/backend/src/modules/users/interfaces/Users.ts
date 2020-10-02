export interface RequestToCreateUser {
  name: string
  email: string
  password: string
}

export interface RequestToUpdateUserAvatar {
  user_id: string
  avatarFilename: string
}
