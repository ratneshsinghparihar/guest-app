// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE.txt in the project root for license information.


// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE.txt in the project root for license information.
var express = require('express');
var router = express.Router();
var authHelper = require('../helpers/auth');
var UsersRepository = require('../repositories/userrepository');
var UserProjectAssociationRepository = require('../repositories/userprojectassociationrepository');
var ProjectsRepository = require('../repositories/projectrepository');
var container = require('nodedata/di')

const userrepo = new UsersRepository();
const prjrepo = new ProjectsRepository();
/* GET home page. */
router.get('/', async function (req, res, next) {
  let parms = { title: 'Home', active: { home: true } };

  const accessToken = await authHelper.getAccessToken(req.cookies, res);
  const userName = req.cookies.graph_user_name;
  let validUsers = [];

  if (accessToken && userName) {
    let userLowerName = userName.toLowerCase();
    
    validUsers = await userrepo.doGetUser(userName.toLowerCase())
    let curUser;
    if (validUsers && validUsers.length) {
      parms.user = userLowerName;
      //parms.projectAccess = {};
      curUser = validUsers[0].dataValues.UserEmail;
      curUserId = validUsers[0].dataValues.UserID;
      //console.log(`userid:${curUserId}`)
      let repo = new UserProjectAssociationRepository();
      console.log("fetching projects for user id " + curUserId);

      let projects = await repo.doGetProjectsForUser(curUserId);
      console.log("projects are ");
      console.log(JSON.stringify(projects));
      
      let ProjName, ProjUuid;
      let ProjObj = {};
      let projArray = []
      parms.projectAccess=[]
      if (projects && projects.length) {
        
        for (let element of projects) {
          //console.log('inside for each')
          let projId = element.dataValues.ProjectID;
          //TO-D0 - uuid
          console.log("fetching project for project id " + projId);
          let projObj = await prjrepo.doGetProject(projId)
          console.log("projects is ");
          console.log(JSON.stringify(projObj));
          ProjName = projObj.Name
          ProjUuid = projObj.Uniqueid;
          ProjObj = { "projectname": ProjName, "projectuuid": ProjUuid }
          projArray.push(ProjObj)
        }
        parms.projectAccess = projArray;
      }
      else {
        let res= await prjrepo.doGetProjects()
         
            let projects = [];
            for (let obj of res) {
              Object.keys(obj).forEach(key => {
                // console.log(`key:${key}`)
                if (key == "Name") {
                  ProjName = obj[key];
                  // projects.push(obj[key]);
                }
                else if (key == "Uniqueid") {
                  ProjUuid = obj[key]
                }
                ProjObj = { "projectname": ProjName, "projectuuid": ProjUuid }
                
              })
              projArray.push(ProjObj)
            }
            
             //console.log(`result1:${JSON.stringify(projArray)}`)
        
          parms.projectAccess = projArray;
          // console.log(`result2:${JSON.stringify(projArray)}`)
          // console.log(`result3:${JSON.stringify(parms.projectAccess)}`)
      }
    }
    else {
      parms.signInUrl = authHelper.getAuthUrl();
      parms.debug = "Not Authorize to access reports , Please contact ratneshp@talentica.com"
    }
    // parms.debug = `User: ${userName}\nAccess Token: ${accessToken}`;
  } else {
    parms.signInUrl = authHelper.getAuthUrl();
    parms.debug = parms.signInUrl;
  }
  console.log(parms);
  res.cookie("context",JSON.stringify(parms));
  res.render('index', parms);
});


router.get('/alphasense-productivity', async function (req, res, next) {
  let parms = { title: 'Home', active: { home: true } };

  const accessToken = await authHelper.getAccessToken(req.cookies, res);
  const userName = req.cookies.graph_user_name;
 

  if (accessToken && userName) {
    parms.user = userName;
    parms.debug = `User: ${userName}\nAccess Token: ${accessToken}`;
  } else {
    parms.signInUrl = authHelper.getAuthUrl();
    parms.debug = parms.signInUrl;
  }

  res.render('reports/alphasense-productivity', parms);
});


router.get('/productivityscore', async function (req, res, next) {
  console.log('xyz')
});

module.exports = router;
