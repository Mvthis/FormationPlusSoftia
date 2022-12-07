const express = require('express');
const DATABASE = require('./Models/database');
const app = express();
const path = require('path');
const studentRouter = require('./Controller/studentController');
const conventionRouter = require('./Controller/conventionController');
const attestationRouter = require('./Controller/attestationController');
const cors = require('cors');

/* Setting up express */
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use('/student', studentRouter);
app.use('/convention', conventionRouter);
app.use('/attestation', attestationRouter);

/* Setting up the server */
app.use(express.json());
app.use('/', express.static(path.join(__dirname,'./view')));
app.use('/public', express.static(path.join(__dirname, 'public')));
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Succesful connection');
});
app.get("/", async(req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'form.html'));
});
























/*Creating Database tables if not exist*/

//   app.post('/', (req, res) => {
//   let sql = 'CREATE TABLE IF NOT EXISTS Convention ( idConvention INT PRIMARY KEY NOT NULL AUTO_INCREMENT, nom varchar(30), nbHeur int );'
//   DB.connection.query(sql, (error, results) => {
//     if (error) {
//       console.error(error.message);
//       return res.status(500).json(error);
//     }
//     return res.status(201).json({message:"Table created"});
//   });
// });

// app.post('/', (req, res) => {
//   let sql = 'CREATE TABLE IF NOT EXISTS Etudiant ( idEtudiant INT PRIMARY KEY NOT NULL AUTO_INCREMENT, nom varchar(30), prenom varchar(30), mail varchar(30), convention int );'
//   DB.connection.query(sql, (error, results) => {
//     if (error) {
//       console.error(error.message);
//       return res.status(500).json(error);
//     }
//     return res.status(201).json({message:"Table created"});
//   });
// })


// app.post('/', (req, res) => {
//   let sql = 'CREATE TABLE IF NOT EXISTS Attestation ( idAttestation INT PRIMARY KEY NOT NULL AUTO_INCREMENT, etudiant int, convention int, message text );'
//   DB.connection.query(sql, (error, results) => {
//     if (error) {
//       console.error(error.message);
//       return res.status(500).json(error);
//     }
//     return res.status(201).json({message:"Table created"});
//   });
// })