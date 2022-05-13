import express from 'express'

import cors from 'cors'

import { clientsRouter, supplyPointsRouter } from './router/index.js'

const app = express()

app.use(cors())

app.use('/clients', clientsRouter)
app.use('/supply-points', supplyPointsRouter)

export default app
