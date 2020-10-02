import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import 'express-async-errors'
import routes from '@shared/infra/http/routes'
import uploadConfig from '@config/upload'
import exceptionHandle from '@shared/infra/http/middlewares/exceptionHandle'

import '@shared/infra/typeorm'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/files', express.static(uploadConfig.directory))
app.use(routes)
app.use(exceptionHandle)

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('🚀 Server started on port 3333')
})
