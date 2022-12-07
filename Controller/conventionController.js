const express = require('express');
const router = express.Router();
const ConventionServices = require('../services/ConventionServices');
const conventionServices = new ConventionServices();

router.get('/hours', (req, res) => {
    conventionServices.fetchAll().then(result => {
        res.send(result);
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    conventionServices.fetchConventionByStudentId(id).then(result => {
        res.send(result);
    });
});


module.exports = router;