const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
app.use(cors());

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'database',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root123',
  database: process.env.DB_NAME || 'cvdb',
  waitForConnections: true,
  connectionLimit: 5,
});

app.get('/cv', async (req, res) => {
  try {
    const [personas] = await pool.query('SELECT * FROM persona LIMIT 1');
    const persona = personas[0];
    const [formacion] = await pool.query(
      'SELECT * FROM formacion WHERE persona_id = ? ORDER BY anio',
      [persona.id]
    );
    res.json({ persona, formacion });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error consultando la base de datos' });
  }
});

app.listen(4000, () => console.log('Backend en puerto 4000'));