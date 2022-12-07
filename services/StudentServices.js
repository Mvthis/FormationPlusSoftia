const DATABASE = require("../Models/database");
const DB = new DATABASE(); 

class StudentServices {
    fetchAll(){
        let sql = 'SELECT * FROM Etudiant '
        return DB.query(sql);
    }
    fetchStudentbyId(id){
        let sql = `SELECT * FROM Etudiant WHERE id = ${id}`
        return DB.query(sql);
    }
}

module.exports = StudentServices;