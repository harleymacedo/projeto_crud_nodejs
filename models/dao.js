const {Pool, Client} = require('pg')
const strConnection = 'postgres://dycyctsf:BOIf2RkvWBBv8BFSB_iIT4Wcw1XxCaI_@rajje.db.elephantsql.com:5432/dycyctsf'

const pool = new Pool({
    connectionString: strConnection,
})

module.exports = pool