const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db');

router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM Rutina', (err,rows,fields)=>{
  
      if(!err){
          res.json(rows);
      } else {
          console.log(err);
      }
  
