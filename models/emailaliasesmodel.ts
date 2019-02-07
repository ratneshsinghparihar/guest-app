import { column, entity } from 'nodedata/sequelizeimp/decorators';
import * as Sequelize from "sequelize";

@entity({ name: 'emailaliases', tableName: 'emailaliases_maitri', timestamps: false, freezeTableName: true })
export class EmailAliasesModel {
    @column({ name: "id", type: Sequelize.INTEGER, allowNull: false, primaryKey: true,autoIncrement:true })
    _id: number;

    @column({ name: "projectname", type: Sequelize.STRING })
    Projectname: string;

    @column({ name: "email", type: Sequelize.STRING, allowNull: false })
    Email: string;

    @column({ name: "alias", type: Sequelize.STRING, allowNull: false })
    Alias: string;
}

export default EmailAliasesModel;