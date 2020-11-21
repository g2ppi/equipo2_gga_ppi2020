const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db');


router.get('/', (req, res) => {
mysqlConnection.query('SELECT * FROM usuario', (err,rows,fields)=>{

module.exports = router;
