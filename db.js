const Pool = require('pg').Pool
const pool = new Pool({
    host : 'localhost',
    user : 'postgres',
    password : 'Woq37552',
    database : 'NEW_DB',
    port : 5432,
})

module.exports = pool