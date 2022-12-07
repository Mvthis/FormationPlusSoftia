const express = require('express');
const router = express.Router();
const StudentServices = require('../services/StudentServices');
const studentServices = new StudentServices();


router.get('/all', (req, res) => {
    studentServices.fetchAll().then(result => {
        res.send(result);
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    studentServices.fetchStudentbyId(id).then(result => {
        res.send(result);
    });

})

module.exports = router;