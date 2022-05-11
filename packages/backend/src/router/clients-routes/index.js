import express from 'express'

import { getAllClients, getClientByCups } from '../../controllers/clientsController.js'

const clientsRouter = express.Router()

clientsRouter.get('/', getAllClients)
clientsRouter.get('/:cups', getClientByCups)

export default clientsRouter
