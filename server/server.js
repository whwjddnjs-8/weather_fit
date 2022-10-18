const fs = require('fs');
const express = require('express');
const app =express();
const port = process.env.port || 3001;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//디비연동 코드
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');
const connection = mysql.createConnection({
  host : conf.host,
  user : conf.user,
  password : conf.password,
  port : conf.port,
  database : conf.database
});

connection.connect();

const cors = require('cors');
app.use(cors());

app.get('/api/board/homeList', (req,res) => {
    connection.query(
      "SELECT * from weather_board WHERE reg_dtm > CURRENT_DATE() ORDER BY reg_dtm desc LIMIT 5;",
      (err, rows, fields)=>{
        res.send(rows);
      }
    );
});

app.get('/api/board/list', (req,res) => {
    connection.query(
      "SELECT * from weather_board ORDER BY reg_dtm desc;",
      (err, rows, fields) => {
        res.send(rows);
      }
    );
});

app.listen(port, () => console.log('Node.js Server is running on port 3001...'));