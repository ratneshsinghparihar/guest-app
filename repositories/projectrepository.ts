import * as decorator from "nodedata/core/decorators/repository";
import { ProjectModel } from '../models/projectsmodel';
import { DynamicRepository } from "nodedata/core/dynamic/dynamic-repository";
import { service, inject } from 'nodedata/di/decorators';
import { ProcessStatusModel } from '../models/processstatusmodel';
import * as processstatuspreo from './processstatusrepository';
import * as configrepo from './configrepository';
import { ConfigModel } from '../models/configmodel';
import { sequelizeService } from 'nodedata/sequelizeimp/sequelizeService';
const uuidv4 = require('uuid/v4');

@decorator.repository({ path: 'projects', model: ProjectModel })
export default class ProjectsRepository extends DynamicRepository {
    @inject(processstatuspreo)
    private _processstatuspreo: processstatuspreo.ProcessStatusRepository;
    @inject(configrepo)
    private _configrepo: configrepo.ConfigRepository;
    doCreateNewProject(param: any) {
        let proj: ProjectModel = new ProjectModel();
        proj.Name = param;
        proj.Uniqueid = uuidv4();
        return this.post(proj)
            .then(res => {
                let processStatus: ProcessStatusModel = ProcessStatusModel.InitialValues(param);;
                return this._processstatuspreo.post(processStatus)
                    .then((processStatus) => {
                        let config: ConfigModel = ConfigModel.InitialValues(param);
                        return this._configrepo.post(config).then((successConfig) => {
                            return { sucess: true };
                        })
                    });
            })
            .catch(err => {
                return err;
            })
    }

    doExecuteSPDashboard(spName: any, param?: any) {
        let sequelize = sequelizeService.getSqlContext();
        return sequelize.query(
            "exec " + spName +";"
        ).then((result) => {
            return result;
        }).catch((err) => {
            return err;
        })
    }

    doExecuteSPProjectsForProcess(spName: any, param: any) {
        let sequelize = sequelizeService.getSqlContext();
        return sequelize.query(
            "declare @projectNames varchar(2000)= '" + param["projectNames"] + "',@mainGitAnalysis bit="+param["mainGitAnalysis"]+",@prepareMainStatus bit="+param["prepareMainStatus"]+",@mainCiceroAnalysis bit="+param["mainCiceroAnalysis"]+",@mainSonarAnalysis bit="+param["mainSonarAnalysis"]+",@productivityjob bit="+param["productivityjob"]+",@SonarETL bit="+param["SonarETL"]+",@analytics bit="+param["analytics"]+",@combineCeicroModelsOfall bit="+param["combineCeicroModelsOfall"]+";exec " + spName+" @projectNames,@mainGitAnalysis,@prepareMainStatus,@mainCiceroAnalysis,@mainSonarAnalysis,@productivityjob,@SonarETL,@analytics,@combineCeicroModelsOfall;"
            )
        //     .then((result) => {
        //     return {result:"success"};
        // }).catch((err) => {
        //     return err;
        // })
    }

    doGetProcessStatus(){
        let sequelize = sequelizeService.getSqlContext();
        return sequelize.q
    }

    doGetProject(projid){
        return this.findOne(projid)
        .then(res=>{
            return res;
        })
        .catch(err=>{
            console.log(err);
            return err;
        })
    }

    doGetProjects(){
        return this.findAll()
        .then(res=>{
            return res;
        })
        .catch(err=>{
            console.log(err);
            return err;
        })
    }

}
module.exports =ProjectsRepository;