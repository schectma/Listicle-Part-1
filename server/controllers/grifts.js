import path from 'path'
import { fileURLToPath } from 'url'
import { pool } from '../config/database.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Postgres folds unquoted identifiers to lowercase, so the camelCase columns get
// aliased back on the way out. That keeps the JSON shape identical to the data
// the frontend was originally written against.
const griftColumns = `
    id,
    slug,
    title,
    category,
    text,
    redflag AS "redFlag",
    image,
    submittedby AS "submittedBy",
    submittedon AS "submittedOn"
`

const getGrifts = async (req, res) => {
    try {
        const { search } = req.query

        // the search filter is applied by Postgres, so the server only ever
        // returns the rows that matched
        const whereClause = search
            ? `WHERE title ILIKE $1
                OR text ILIKE $1
                OR redflag ILIKE $1
                OR category ILIKE $1
                OR submittedby ILIKE $1`
            : ''

        const values = search ? [`%${search}%`] : []

        const results = await pool.query(
            `SELECT ${griftColumns} FROM grifts ${whereClause} ORDER BY id ASC`,
            values
        )

        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const getGriftBySlug = async (req, res) => {
    try {
        const { griftSlug } = req.params

        const results = await pool.query(
            `SELECT ${griftColumns} FROM grifts WHERE slug = $1`,
            [griftSlug]
        )

        if (results.rows.length === 0) {
            res.status(404).json({ error: 'grift not found' })
            return
        }

        res.status(200).json(results.rows[0])
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// the detail page is a static shell that grift.js fills in, but the slug is
// checked against the database first so an unknown one gets a real 404 from
// the server rather than a client-side redirect after the page has loaded
const getGriftPage = async (req, res) => {
    try {
        const results = await pool.query(
            'SELECT 1 FROM grifts WHERE slug = $1',
            [req.params.griftSlug]
        )

        if (results.rows.length === 0) {
            res.status(404).sendFile(path.resolve(__dirname, '../public/404.html'))
            return
        }

        res.status(200).sendFile(path.resolve(__dirname, '../public/grift.html'))
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default {
    getGrifts,
    getGriftBySlug,
    getGriftPage
}
