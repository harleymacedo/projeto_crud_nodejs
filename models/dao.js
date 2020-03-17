const {Pool, Client} = require('pg')
const strConnection = process.env.URI_BANCO

const pool = new Pool({
    connectionString: strConnection,
})

module.exports = pool