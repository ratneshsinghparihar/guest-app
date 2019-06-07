// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE.txt in the project root for license information.
var fs = require('fs')
var Main = require('nodedata/core');
var seqData = require("nodedata/sequelizeimp");
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var schedule = require('node-schedule');
var http = require('http');
var https = require('https');
var Stream = require('stream').Transform;
//var express = require("express");
var router = require('nodedata/core/exports').router;
// import { MetaUtils } from "nodedata/core/metadata/utils";
const config = require('./config');
const securityConfig = require('./security-config');
// import * as fs from "fs";
// import * as data from 'nodedata/mongoose';
require('dotenv').config();
// var key = fs.readFileSync('server.key');
// var cert = fs.readFileSync( 'server.cert' );
// var options = {
//     key: key,
//     cert: cert,
//     };
var mail = require('./routes/mail');
var calendar = require('./routes/calendar');
var contacts = require('./routes/contacts');
var productivityscore=require('./routes/productivityscore');
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
config.passportSet.setPassport(passport);
// import { Container } from 'nodedata/di';

Main(config, securityConfig, __dirname, null, seqData.sequelizeService);
// import * as Enumerable from 'linq';
//data.connect();
//data.generateSchema();
seqData.sequelizeService.connect();
seqData.generateSchema();
require('reflect-metadata/Reflect');
// var bodyParser = require("body-parser");
process.env.APP_ROOT = "hello";
var app = express();
Main.register(app);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
var index = require('./routes/index');
var authorize = require('./routes/authorize');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/index', index);
app.use('/authorize', authorize);
app.use('/mail', mail);
app.use('/productivityscore', productivityscore);
app.use('/contacts', contacts);
//server.js
var path = require('path');
app.use(require('morgan')('combined'));
// app.use(require('cookie-parser')());
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
var expressSession = require('express-session');
app.use(expressSession({ secret: 'mySecretKey', resave: false, saveUninitialized: false }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, dd, RequestVerificationToken,UserExecutionContext");
    res.header("Access-Control-Allow-Credentials", "true");
    res.removeHeader("x-powered-by");
    if ('OPTIONS' === req.method) {
        res.send(200);
    }
    else {
        next();
    }
});

  
passport.serializeUser((user, cb) => {
    cb(null, user._id);
});
passport.deserializeUser((id, cb) => {
    this.userDetailService.loadUserById(id).
        then((user) => {
        cb(null, user.getUserObject());
    }, (err) => {
        return cb(err);
    });
});
app.use(passport.initialize());
app.use(passport.session());
app.use("/", router);
//app.use("/data", express.static(path.join(__dirname, 'public')));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
var server = https.createServer({
    key: fs.readFileSync( './localhost.key' ),
    cert: fs.readFileSync( './localhost.cert' ),
},app);
    console.log(server);
server.listen(process.env.PORT || '3333',()=>{
    console.log("connected")
})
// module.exports = app;
// var app = express();
// Main.register(app);
// app.get("/extract", function (req, res) {
//     fs.readFile("./imageurls.json", function (err, data) {
//         let dataStr = data.toString();
//         let allImageUrls = JSON.parse(dataStr);
//         allImageUrls = allImageUrls.imageurls;
//         allImageUrls.forEach((url,index) => {
//             https.request(url, function (response) {
//                 var data = new Stream();
//                 response.on('data', function (chunk) {
//                     data.push(chunk);
//                 });
//                 response.on('end', function () {
//                     var str = url;
//                     var final = str.substr(str.lastIndexOf('/') + 1);
//                     let filePath = './public/images/' + final;
//                     fs.writeFileSync(filePath, data.read());
//                 });
//             }).end();
//         });
//     });
// });
// app.get('/auth/facebook', passport.authenticate('facebook', { 
//     scope : ['public_profile', 'email']
//   }));
/*Facebook Login Page */
// app.get('/login/facebook', function (req, res) {
//     res.render('fbLogin');
// });
// app.get('/data/response/payment', function (req, res) {
//     console.log('payment page requested');
//     res.render('payment');
// });
// app.post('/data/response/failure', function (req, res) {
//     console.log('failure url payment page');
//     res.render('payment');
// });
// app.post('/data/response/success', function (req, res) {
//     console.log('succes url payment page');
//     res.render('payment');
// });
// var server = http.createServer(app);
// server.listen(9900);
//# sourceMappingURL=app.js.map

//# sourceMappingURL=app.js.map
