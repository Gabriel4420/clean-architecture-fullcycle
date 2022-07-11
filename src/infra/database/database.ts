import pgPromise from 'pg-promise'

const pgp = pgPromise({})

const db = pgp({
  user: 'postgres',
  password: 'G@briel4420',
  host: 'localhost',
  port: 5432,
  database: 'parkinglot',
  idleTimeoutMillis: 100,
})

export default db
