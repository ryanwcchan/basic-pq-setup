const { Pool } = require("pg")
require("dotenv").config()

module.exports = new Pool({
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
})

// module.exports = new Pool({
//     connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
// });