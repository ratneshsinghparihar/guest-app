//import { DataTypeUUIDv4 } from "sequelize";

export interface IProject {
    Name: string;
    Uniqueid: any;
    ConfigSynStatus?: number;
    LastConfigSyncDate?: Date;
    UpdateReportStatus?: number;
    LastUpdateReportDate?: Date;
    ExecuteProcessStatus?: number;
    LastExecuteProcessDate?: Date;
    UpdateConfigStatus?: number;
    LastUpdateConfigDate?: Date;
}
 
 
 