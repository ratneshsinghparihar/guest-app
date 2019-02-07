import { column, entity } from 'nodedata/sequelizeimp/decorators';
import * as Sequelize from "sequelize";

@entity({ name: 'gitloganamoly', tableName: 'gitloganamoly_maitri', timestamps: false, freezeTableName: true })
export class GitLogAnamolyModel {
    @column({ name: "id", type: Sequelize.INTEGER, allowNull: false, primaryKey: true,autoIncrement:true })
    _id: number;

    @column({ name: "projectname", type: Sequelize.STRING })
    Projectname: string;

    @column({ name: "author", type: Sequelize.STRING })
    Author: any;

    @column({ name: "commit", type: Sequelize.STRING, allowNull: false })
    Commit: string;

    @column({ name: "date", type: Sequelize.DATE, allowNull: false })
    Date: Date;

    @column({ name: "deletions", type: Sequelize.INTEGER, allowNull: false })
    Deletions: number;

    @column({ name: "insertions", type: Sequelize.INTEGER, allowNull: false })
    Insertions: Date;

    @column({ name: "isAnamoly", type: Sequelize.BOOLEAN, allowNull: false })
    IsAnamoly: boolean;

    @column({ name: "message", type: Sequelize.STRING, allowNull: false })
    Message: string;

    @column({ name: "paths_insertion", type: Sequelize.STRING, allowNull: false })
    Paths_insertion: string;

    @column({ name: "paths_deletion", type: Sequelize.STRING, allowNull: false })
    Paths_deletion: string;

    @column({ name: "paths_path", type: Sequelize.STRING, allowNull: false })
    Paths_path: string;

    @column({ name: "paths_isAnamoly", type: Sequelize.BOOLEAN, allowNull: false })
    Paths_isAnamoly: boolean;

    @column({ name: "reponame", type: Sequelize.STRING, allowNull: false })
    Reponame: string;

    // @column({ name: "isAnamolyInStat", type: Sequelize.BOOLEAN, allowNull: false })
    // IsAnamolyInStatisAnamolyInStat: boolean;
}

export default GitLogAnamolyModel;