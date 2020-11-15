const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db');


router.get('/',(req,res)=>{
  res.send('Si funciona')
})

        // tipo_usuario
    //Petición get
router.get('/rutina',(req,res)=>{
    mysqlConnection.query('SELECT * FROM rutina',
    (err,rows,fields)=>{
      if(!err)
     {
       res.json(rows);
     }else{
       console.log(err);
     }
    })
})
//Petición post
   router.post('/rutina', (req, res) => {
    const {ID,alarma,fecha,hora} = req.body
    let rutina = [ID,alarma,fecha,hora];
    let programarNuevaRutina = `INSERT INTO rutina VALUES (?,?,?,?);`

   mysqlConnection.query(programarNuevaRutina,rutina, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`Rutina creada`})
   });
  });

//Petición put
  router.put('/rutina/:ID', (req,res) => {
  const {alarma,fecha,hora} = req.body
  const { ID } = req.params 

mysqlConnection.query(`UPDATE rutina
                       SET alarma=?,fecha=?,hora=?
                       WHERE ID = ?`,
                       [alarma,fecha,hora,ID], (err, rows,fields) => {
   if(!err){
    res.json({status: `Rutina actualizada `});
   }else{
     console.log(err);
   }
});
});

  //PETICIÓN DELETE - ELIMINACIÓN DE DATOS
  router.delete('/rutina/:ID', (req,res) => {
    const { ID } = req.params;
    mysqlConnection.query(`DELETE FROM rutina WHERE ID =?`,[ID],(err,rows,fields) => {
      if("!err"){
        res.json({status: `Rutina eliminada `})
      }else{
        console.log(err);
      }
    });
  });

/// contenido

module.exports = router;


/// contenido

module.exports = router;