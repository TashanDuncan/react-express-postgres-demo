import express from 'express';
import * as pg from 'pg'
import cors from 'cors';
const { Pool } = pg.default

const app = express();
app.use(cors())
app.use(express.json());

const pool = new Pool({
  user: 'neilg',
  host: 'localhost',
  database: 'demo',
  password: 'password',
  port: 5432,
})

app.get('/', (req, res) => {
  res.json({ message: 'Test' });
});

app.get('/stock', (req, res) => {
  pool.query('SELECT * FROM demo.stock ORDER BY stock_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});

app.listen(3001, () => {
  console.log('API Server listening on http://localhost:3001');
});
