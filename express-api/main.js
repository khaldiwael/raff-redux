const express = require('express');
let app = express();
const helmet = require('helmet');
const cors = require('cors')
const morgan = require('morgan');
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(cors())
app.use(morgan());
app.use(helmet());
app.get('/', function (req, res) {return res.send('hello weal');});
app.get('/contacts', function (req, res) {
    return res.status(200).json([
        {id:1,name:'wael',cin:33665544,phone:93211035,img:'../img/img1.jpg'},
        {id:2,name:'raouf',cin:77996622,phone:54888999,img:'../img/img2.jpg'}
    ]);
});
const http = require('http');
let server = http.createServer(app);
server.listen(3500 , function () {
    console.log('server is running');
});