const DATABASE = require("../Models/database");
const DB = new DATABASE(); 

class AttestationServices {
    insert(studentId, conventionId, message) {
        let sql =`INSERT INTO Attestation (idEtudiant, idConvention, message) VALUES (?, ?, ?)`
        DB.con.query(sql, [studentId, conventionId, message],  (err, rows)=> {
            console.log('OK');
            return true;
        })
    }
}

module.exports = AttestationServices;