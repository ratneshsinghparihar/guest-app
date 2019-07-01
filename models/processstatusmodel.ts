import { column, entity } from 'nodedata/sequelizeimp/decorators';
import * as Sequelize from "sequelize";

@entity({ name: 'processstatus', tableName: 'processstatus_maitri', timestamps: false, freezeTableName: true })
export class ProcessStatusModel {
    @column({ name: "id", type: Sequelize.INTEGER, allowNull: false, primaryKey: true,autoIncrement:true })
    _id: number;

    @column({ name: "projectname", type: Sequelize.STRING })
    projectname: string;

    @column({ name: "checkEnvironment", type: Sequelize.BOOLEAN })
    checkEnvironment: boolean;

    @column({ name: "main", type: Sequelize.BOOLEAN, allowNull: true })
    main: boolean;

    @column({ name: "mainGitAnalysis", type: Sequelize.BOOLEAN, allowNull: true })
    mainGitAnalysis: boolean;

    @column({ name: "prepareConfigurationList", type: Sequelize.BOOLEAN, allowNull: true })
    prepareConfigurationList: boolean;

    @column({ name: "mainCiceroAnalysis", type: Sequelize.BOOLEAN, allowNull: true })
    mainCiceroAnalysis: boolean;

    @column({ name: "mainSonarAnalysis", type: Sequelize.BOOLEAN, allowNull: true })
    mainSonarAnalysis: boolean;

    @column({ name: "sonarAnalysis", type: Sequelize.BOOLEAN, allowNull: true })
    sonarAnalysis: boolean;

    @column({ name: "productivityjob", type: Sequelize.BOOLEAN, allowNull: true })
    productivityjob: boolean;

    @column({ name: "sonarETL", type: Sequelize.BOOLEAN, allowNull: true })
    sonarETL: boolean;

    @column({ name: "analytics", type: Sequelize.BOOLEAN, allowNull: true })
    analytics: boolean;

    @column({ name: "prepareMainStatus", type: Sequelize.BOOLEAN, allowNull: true })
    prepareMainStatus: boolean;

    @column({ name: "combineCeicroModelsOfall", type: Sequelize.BOOLEAN, allowNull: true })
    combineCeicroModelsOfall: boolean;

    @column({ name: "last_run_mga_date", type: Sequelize.DATE, allowNull: true })
    last_run_mga_date: Date;

    @column({ name: "last_run_mca_date", type: Sequelize.DATE, allowNull: true })
    last_run_mca_date: Date;

    @column({ name: "last_run_msa_date", type: Sequelize.DATE, allowNull: true })
    last_run_msa_date: Date;

    @column({ name: "last_run_pj_date", type: Sequelize.DATE, allowNull: true })
    last_run_pj_date: Date;

    @column({ name: "last_run_setl_date", type: Sequelize.DATE, allowNull: true })
    last_run_setl_date: Date;

    @column({ name: "last_run_analytics_date", type: Sequelize.DATE, allowNull: true })
    last_run_analytics_date: Date;

    @column({ name: "last_run_pms_date", type: Sequelize.DATE, allowNull: true })
    last_run_pms_date: Date;

    @column({ name: "last_run_ccmoa_date", type: Sequelize.DATE, allowNull: true })
    last_run_ccmoa_date: Date;

    static InitialValues(projectName:string){
        let processStatus:ProcessStatusModel=new ProcessStatusModel();
        processStatus.projectname=projectName;
        processStatus.checkEnvironment = true;
        processStatus.main = true;
        processStatus.mainGitAnalysis = false;
        processStatus.mainCiceroAnalysis = true;
        processStatus.mainSonarAnalysis = true;
        processStatus.prepareMainStatus = false;
        processStatus.combineCeicroModelsOfall = true;
        processStatus.sonarETL = true;
        processStatus.analytics = true;
        processStatus.productivityjob = true;
        processStatus.sonarAnalysis = true;
        processStatus.prepareConfigurationList = true;
        processStatus.last_run_mga_date = new Date();
        processStatus.last_run_mca_date = new Date();
        processStatus.last_run_msa_date = new Date();
        processStatus.last_run_pj_date = new Date();
        processStatus.last_run_setl_date = new Date();
        processStatus.last_run_analytics_date = new Date();
        processStatus.last_run_pms_date = new Date();
        processStatus.last_run_ccmoa_date = new Date();
   
        return processStatus;

    }
}

export default ProcessStatusModel;