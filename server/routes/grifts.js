import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import griftData from '../data/grifts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(griftData)
})

router.get('/:griftSlug', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/grift.html'))
})

export default router
