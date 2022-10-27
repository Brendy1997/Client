import express from 'express'
import { pool } from './db.js'
import clientRoute from './routes/clientes.routes.js'
import { PORT } from './config.js'

const app = express()

app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT 1 + 1 AS result')
    res.json(result)
});

app.use(express.json())

app.use(clientRoute)

app.listen(PORT)