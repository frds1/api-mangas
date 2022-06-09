const pgp = require('pg-promise')();
const db = pgp({
    user:'fkxlebau',
    password:'LlWKgDLd6FsTfqjmpbjwJNOnIpK-r9_l',
    host:'kesavan.db.elephantsql.com',
    port:5432,
    database:'fkxlebau'
});

module.exports = db;