import { column, entity } from 'nodedata/sequelizeimp/decorators';
import * as Sequelize from "sequelize";


@entity({ name: 'repotype', tableName: 'repotype_maitri', timestamps: false, freezeTableName: true })
export class RepoTypeModel {
    @column({ name: "Id", type: Sequelize.INTEGER, allowNull: false, primaryKey: true,autoIncrement:true })
    _id: number;

    @column({ name: "projectname", type: Sequelize.STRING })
    Projectname: string;

    @column({ name: "reponame", type: Sequelize.STRING })
    Reponame: string;

    @column({ name: "repotype", type: Sequelize.STRING, allowNull: true })
    Repotype: string;
}

export default RepoTypeModel;