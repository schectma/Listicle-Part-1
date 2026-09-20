import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import griftsRouter from './routes/grifts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use('/public', express.static('./public'))

app.use('/scripts', express.static('./public/scripts'))

app.use(express.static('./public'))

app.use('/grifts', griftsRouter)

app.get('/*splat', (req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, './public/404.html'))
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
