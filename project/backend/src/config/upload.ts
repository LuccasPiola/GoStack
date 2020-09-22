import path from 'path'
import crypto from 'crypto'
import multer from 'multer'

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp')

const uploadConfig = {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (request, file, callback) => {
      try {
        const fileHash = crypto.randomBytes(10).toString('hex')
        const fileName = `${fileHash}-${file.originalname}`

        return callback(null, fileName)
      } catch {
        return callback(new Error('Cannot upload file, try again later'), null)
      }
    },
  }),
}

export default uploadConfig
