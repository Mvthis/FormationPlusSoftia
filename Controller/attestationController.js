const express = require('express');
const router = express.Router();
const AttestationService = require('../services/AttestationServices');
const attestationService = new AttestationService();

router.post('', (req, res) => {
    attestationService.insert(req.body.subject, req.body.convention, req.body.attestation)
    res.send("Inserted")
})

module.exports = router;