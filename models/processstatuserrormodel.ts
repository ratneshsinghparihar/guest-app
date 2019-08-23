import { column, entity } from 'nodedata/sequelizeimp/decorators';
import * as Sequelize from "sequelize";

@entity({ name: 'processstatuserror', tableName: 'processstatuserror_maitri', timestamps: false, freezeTableName: true })
export class ProcessStatusErrorModel {
    @column({ name: "id", type: Sequelize.INTEGER, allowNull: false, primaryKey: true,autoIncrement:true })
    _id: number;

    @column({ name: "projectname", type: Sequelize.STRING })
    projectname: string;

    

    @column({ name: "mainGitAnalysis", type: Sequelize.BOOLEAN, allowNull: true })
    mainGitAnalysis: string;


    @column({ name: "mainCiceroAnalysis", type: Sequelize.BOOLEAN, allowNull: true })
    mainCiceroAnalysis: string;

    @column({ name: "mainSonarAnalysis", type: Sequelize.BOOLEAN, allowNull: true })
    mainSonarAnalysis: string;

    @column({ name: "sonarAnalysis", type: Sequelize.BOOLEAN, allowNull: true })
    sonarAnalysis: string;

    @column({ name: "productivityjob", type: Sequelize.BOOLEAN, allowNull: true })
    productivityjob: string;

    @column({ name: "sonarETL", type: Sequelize.BOOLEAN, allowNull: true })
    sonarETL: string;

    @column({ name: "analytics", type: Sequelize.BOOLEAN, allowNull: true })
    analytics: string;

    @column({ name: "prepareMainStatus", type: Sequelize.BOOLEAN, allowNull: true })
    prepareMainStatus: string;

    @column({ name: "combineCeicroModelsOfall", type: Sequelize.BOOLEAN, allowNull: true })
    combineCeicroModelsOfall: string;


    static InitialValues(projectName:string){
        let processStatus:ProcessStatusErrorModel=new ProcessStatusErrorModel();
        processStatus.projectname=projectName;
        processStatus.mainGitAnalysis = "";
        processStatus.mainCiceroAnalysis = "";
        processStatus.mainSonarAnalysis = "";
        processStatus.prepareMainStatus = "";
        processStatus.combineCeicroModelsOfall = "";
        processStatus.sonarETL = "";
        processStatus.analytics = "";
        processStatus.productivityjob = "";
        processStatus.sonarAnalysis = "";
   
        return processStatus;

    }
}

export default ProcessStatusErrorModel;