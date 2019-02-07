import { column, entity } from 'nodedata/sequelizeimp/decorators';
import * as Sequelize from "sequelize";


@entity({ name: 'Users', tableName: 'Users', timestamps: false, freezeTableName: true })
export class UsersModel {
    @column({ name: "UserID", type: Sequelize.INTEGER, allowNull: false, primaryKey: true,autoIncrement:true })
    _id: number;

    @column({ name: "UserEmail", type: Sequelize.STRING })
    UserEmail: string;   
}

export default UsersModel;