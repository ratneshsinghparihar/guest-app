import { column, entity } from 'nodedata/sequelizeimp/decorators';
import * as Sequelize from "sequelize";


@entity({ name: 'user_project_association', tableName: 'User_Project_association', timestamps: false, freezeTableName: true })
export class UserProjectAssociationModel {
    @column({ name: "UserID", type: Sequelize.INTEGER })
    UserID: number;

    @column({ name: "ProjectID", type: Sequelize.INTEGER })
    ProjectID: number;   
}

export default UserProjectAssociationModel;