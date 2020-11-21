const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db');


/// contenido
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM Rutina_usuario', (err,rows,fields)=>{
    
     if(!err){
module.exports = router;
