import express from 'express'

import { getAllSupplyPoints, getSupplyPointByCups } from '../../controllers/supplyPointController.js'

const supplyPointsRouter = express.Router()

supplyPointsRouter.get('/', getAllSupplyPoints)
supplyPointsRouter.get('/:cups', getSupplyPointByCups)

export default supplyPointsRouter
