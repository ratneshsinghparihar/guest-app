import { column, entity } from 'nodedata/sequelizeimp/decorators';
import * as Sequelize from "sequelize";


@entity({ name: 'projects', tableName: 'projects', timestamps: false, freezeTableName: true })
export class ProjectModel {
    @column({ name: "id", type: Sequelize.INTEGER, allowNull: false, primaryKey: true,autoIncrement:true })
    _id: number;

    @column({ name: "Name", type: Sequelize.STRING })
    Name: string;

    @column({ name: "Uniqueid", type: Sequelize.UUID })
    Uniqueid: any;

    @column({ name: "ConfigSynStatus", type: Sequelize.INTEGER, allowNull: true })
    ConfigSynStatus: number;

    @column({ name: "LastConfigSyncDate", type: Sequelize.DATE, allowNull: true })
    LastConfigSyncDate: Date;

    @column({ name: "UpdateReportStatus", type: Sequelize.INTEGER, allowNull: true })
    UpdateReportStatus: number;

    @column({ name: "LastUpdateReportDate", type: Sequelize.DATE, allowNull: true })
    LastUpdateReportDate: Date;

    @column({ name: "ExecuteProcessStatus", type: Sequelize.INTEGER, allowNull: true })
    ExecuteProcessStatus: number;

    @column({ name: "LastExecuteProcessDate", type: Sequelize.DATE, allowNull: true })
    LastExecuteProcessDate: Date;

    @column({ name: "UpdateConfigStatus", type: Sequelize.INTEGER, allowNull: true })
    UpdateConfigStatus: number;

    @column({ name: "IsActive", type: Sequelize.BOOLEAN, allowNull: true })
    IsActive: boolean;

    @column({ name: "LastUpdateConfigDate", type: Sequelize.DATE, allowNull: true })
    LastUpdateConfigDate: Date;
    // constructor(){
    //     this._id=0;
    //     this.name="";
    //     this.roles=new Array<RoleModel>();
    // }
    // constructor(userDto: IUser) {
    //     this._links = {};
    //     this._id = <any>userDto._id;
    //     this.name = userDto.name;
    //     //this.age = userDto.age;
    //     //this.password = userDto.password;
    //     //this.email = userDto.email;
    //     if (userDto.roles)
    //         this.roles = userDto.roles;
    //     else
    //         this.roles = new Array<RoleModel>();
    // }
}

export default ProjectModel;