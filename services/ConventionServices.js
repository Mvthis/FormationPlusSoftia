const DATABASE = require("../Models/database");

const DB = new DATABASE();
class ConventionServices {
    fetchAll(){
        let sql = 'SELECT * from Convention'
        return DB.query(sql);
    }

    fetchConventionByStudentId(id){
        let sql = `SELECT Convention.id, Convention.nbHeure from Convention, Etudiant WHERE Convention.id=Etudiant.idConvention AND Etudiant.id=${id}`
        return DB.query(sql);
    }
}

module.exports = ConventionServices;