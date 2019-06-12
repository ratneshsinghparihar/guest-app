// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE.txt in the project root for license information.
var express = require('express');
var router = express.Router();
var authHelper = require('../helpers/auth');
var UsersRepository = require('../repositories/userrepository');
var UserProjectAssociationRepository = require('../repositories/userprojectassociationrepository');
var ProjectsRepository = require('../repositories/projectrepository');
var container = require('nodedata/di')
var hbs = require('hbs');

const userrepo = new UsersRepository();
const prjrepo = new ProjectsRepository();

/* GET /mail */
router.get('/', async function (req, res, next) {


  let parms = { title: 'Home', active: { home: true } };

  const accessToken = await authHelper.getAccessToken(req.cookies, res);
  const userName = req.cookies.graph_user_name;
  const projectName = req.query.projectname;
  const spName = req.query.spname;

  console.log(req.cookies.context);
  var context ;
  try{
  context= JSON.parse(req.cookies.context);
  }catch(ex){}
  if (context) {
    parms = context;
    console.log(context);
  }

  if (accessToken && userName) {
    parms.user = userName;
    parms.debug = `User: ${userName}\nAccess Token: ${accessToken}`;

    console.log("calling productivityscore");
    let productivityscore = await prjrepo.doExecuteSPDashboard(spName, projectName);

    //console.log(JSON.stringify(productivityscore));

    parms.productivityscore = productivityscore;



  } else {
    parms.signInUrl = authHelper.getAuthUrl();
    parms.debug = parms.signInUrl;
  }
  hbs.registerHelper('json', function (context) {
    return JSON.stringify(context);
  });

  if (spName == "getProductivityScore") {
    res.render('productivity', parms);
  }
  if (spName == "getQualityScore") {
    res.render('quality', parms);
  }

});

module.exports = router;