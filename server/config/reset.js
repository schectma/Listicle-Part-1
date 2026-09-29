import { pool } from './database.js'
import './dotenv.js'
import griftData from '../data/grifts.js'

const createGriftsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS grifts;

        CREATE TABLE IF NOT EXISTS grifts (
            id SERIAL PRIMARY KEY,
            slug VARCHAR(255) NOT NULL UNIQUE,
            title VARCHAR(255) NOT NULL,
            category VARCHAR(255) NOT NULL,
            text TEXT NOT NULL,
            redFlag TEXT NOT NULL,
            image VARCHAR(255) NOT NULL,
            submittedBy VARCHAR(255) NOT NULL,
            submittedOn TIMESTAMP NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 grifts table created successfully')
    }
    catch (err) {
        console.error('⚠️ error creating grifts table', err)
    }
}

const seedGriftsTable = async () => {
    await createGriftsTable()

    // sequential rather than forEach so the serial ids line up with the
    // lesson order in data/grifts.js
    for (const grift of griftData) {
        const insertQuery = {
            text: 'INSERT INTO grifts (slug, title, category, text, redFlag, image, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
        }

        const values = [
            grift.slug,
            grift.title,
            grift.category,
            grift.text,
            grift.redFlag,
            grift.image,
            grift.submittedBy,
            grift.submittedOn
        ]

        try {
            await pool.query(insertQuery, values)
            console.log(`✅ ${grift.title} added successfully`)
        }
        catch (err) {
            console.error('⚠️ error inserting grift', err)
        }
    }
}

seedGriftsTable()
