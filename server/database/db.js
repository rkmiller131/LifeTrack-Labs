require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  password: process.env.PGPASS
});

pool.connect()
  .then(() => console.log('Connected to Postgres'))
  .catch((err) => console.log('CONNECTION ERROR ', err.stack));

pool.on('end', () => console.log('Disconnected'));

module.exports = pool;