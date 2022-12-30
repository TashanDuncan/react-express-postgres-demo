import express from 'express';
import * as pg from 'pg'
import cors from 'cors';
const { Pool } = pg.default

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const pool = new Pool({
  user: 'Tay.Duncan',
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

app.get('/stock/:_id', (req, res) => {
  const id = req.params._id;
  pool.query(`SELECT * FROM demo.stock WHERE stock_id = '${id}'`, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});

app.put('/stock/:_id', (req, res) => {
  const id = req.params._id;
  pool.query(`SELECT * FROM demo.stock WHERE stock_id = '${id}'`, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});

app.post('/add', (req, res) => {
  let { name, description } = req.body;
  pool.query(`INSERT INTO demo.stock (name, description) VALUES ('${name}', '${description}');`, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});

app.delete('/remove', (req, res) => {
  console.log(req.body)
  let { id } = req.body;
  pool.query(`DELETE FROM demo.stock WHERE stock_id ='${id}';`, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })

})

app.listen(3001, () => {
  console.log('API Server listening on http://localhost:3001');
});
