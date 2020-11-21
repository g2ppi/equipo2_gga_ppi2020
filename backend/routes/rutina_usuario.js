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
      
      })//fin conexion consultada por id 
    
    });//fin buscar rutina por su id  
        
    //Agregar una nueva rutina
      
router.post("/nueva-Rutina_usuario", (req, res) => {
        const { id_rutinas, id_usuario, calificacion} = req.body;
        let Rutinarray= [ id_rutinas, id_usuario, calificacion ];
        let nuevaRutina='INSERT INTO Rutina {id_rutinas, id_usuario, calificacion}VALUES(?,?,?)';
        mysqlConnection.query(nuevaRutina, Rutinarray,(err,results,fields)=>{

          if(err){
            return console.error(err);
        }else{
            res.json({message:nombre + 'Rutina creada'})
        }
          
          })
    }); //fin guardar nueva Rutina

router.put("/Rutina_usuario/:id", (req, res) => {
        const { id_rutinas, id_usuario, calificacion } = req.body;
        const {id} = req.params;
        mysqlConnection.query('UPDATE Rutina set id_rutinas=?,id_usuario=?,calificacion=? WHERE id=?',
        [id_rutinas, id_usuario, calificacion, id],(err, rows, fields)=>{
            if(err){
module.exports = router;
