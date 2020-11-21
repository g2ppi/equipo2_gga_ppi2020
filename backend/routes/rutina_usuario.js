const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db');


/// contenido
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM Rutina_usuario', (err,rows,fields)=>{
    
     if(!err){
        res.json(rows);
        } else {
          console.log(err);
        }
    
    })//fin conexion consultada
  });//fin mostrar todas las Rutina

router.get('/Rutina_usuario/id:', (req, res) => {
    const {id}= req.params;
    mysqlConnection.query('SELECT * FROM Rutina_usuario WHERE id=?', [id], (err,rows,fields)=>{
      if(!err){
            res.json(rows[0]);
        } else {
            console.log(err);
        }
      
module.exports = router;
