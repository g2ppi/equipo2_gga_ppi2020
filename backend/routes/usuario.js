const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db');


router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM usuario', (err,rows,fields)=>{
    
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    
    })//fin conexion consultada
    });//fin mostrar todos los usuario
    
    router.get('/usuario/nickname:', (req, res) => {
    const {nickname}= req.params;
    mysqlConnection.query('SELECT * FROM usuario WHERE nickname= ?', [nickname], (err,rows,fields)=>{
        if(!err){
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    
    })//fin conexion consultada por id 
    
    });//fin buscar usuario por su id  
        
    //Agregar un nuevo usuario
    
    router.post("/nuevo-usuario", (req, res) => {
        const { apellido, correo, nombre, telefono, contraseña, con_contraseña, tipo_usuario } = req.body;
        let usuariorray= [ apellido, correo, nombre, telefono, contraseña, con_contraseña, tipo_usuario ];
        let nuevousuario='INSERT INTO usuario { apellido, correo, nombre, telefono, contraseña, con_contraseña, tipo_usuario}VALUES(?,?,?,?,?,?)';
        mysqlConnection.query(nuevousuario, usuariorray,(err,results,fields)=>{
        
        if(err){
            return console.error(err);
        }else{
            res.json({message:nombre + 'usuario creado'})
        }
    
    })
    }); //fin guardar nuevo usuario
    
    router.put("/usuario/:nickname", (req, res) => {
        const { apellido, correo, nombre, telefono, contraseña, con_contraseña } = req.body;
        const {nickname} = req.params;
        mysqlConnection.query('UPDATE usuario set apellido=?,correo=?,nombre=?,telefono=?,contraseña=?,tipo_usuario=?,con_contraseña=? WHERE nickname=?',
        [ apellido, correo, nombre, telefono, contraseña, con_contraseña, tipo_usuario, nickname],(err, rows, fields)=>{
            if(err){
                res.json({status:'nickname' +nickname + 'actualizado'})
            }else{
                console.log(err);
            }//fin si
        })//fin consulta 
    
       
        });//fin modificar un usuario 
    
        router.delete("/usuario/:nickname", (req, res) => {
            const {nickname} = req.params;
            mysqlConnection.query('DELETE FROM usuario WHERE nickname=?',
            [nickname],(err, rows, fields)=>{
                if(err){
                    res.json({status:'usuario eliminado'})
                }else{
                    console.log(err);
                }//fin si
            });//fin elimnar
        
           
            });//fin eliminar un usuario
    
    module.exports = router
