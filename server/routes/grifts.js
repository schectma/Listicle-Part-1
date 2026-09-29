import express from 'express'
import GriftsController from '../controllers/grifts.js'

const router = express.Router()

router.get('/', GriftsController.getGrifts)

router.get('/:griftSlug/data', GriftsController.getGriftBySlug)

router.get('/:griftSlug', GriftsController.getGriftPage)

export default router
