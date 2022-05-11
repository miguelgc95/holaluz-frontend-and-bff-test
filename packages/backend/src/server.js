import express from 'express'

import { clientsRouter, supplyPointsRouter } from './router/index.js'

const app = express()

app.use('/clients', clientsRouter)
app.use('/supply-points', supplyPointsRouter)

export default app
