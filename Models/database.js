var mysql = require('mysql');

/* Class DATABASE that is exported to all the other files */
class DATABASE {
    con;
    constructor (){
        this.con = mysql.createConnection({
            host: '127.0.0.1',
            user : 'root',
            password: '',
            database: 'softia'
        });
    }
    query(sql) {
        return new Promise((resolve, reject) => {
            this.con.query(sql, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            })
        })
    }
}





module.exports = DATABASE;

