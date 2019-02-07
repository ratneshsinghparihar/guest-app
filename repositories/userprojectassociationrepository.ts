import * as decorator from "nodedata/core/decorators/repository";
import { UserProjectAssociationModel } from '../models/userprojectassociationmodel';
import { DynamicRepository } from "nodedata/core/dynamic/dynamic-repository";

@decorator.repository({ path: 'users_project', model: UserProjectAssociationModel })
//@decorator.repository('blog', BlogModel)
export class UserProjectAssociationRepository extends DynamicRepository {
    constructor(){
        super()
    }
    doGetProjectsForUser(userId:number) {
        console.log("doGetAllProjects")
        let users: UserProjectAssociationModel = new UserProjectAssociationModel();
        let input = {
            "UserID" :userId
        }
        return this.findWhere(input)
            .then(res => {
                return res;
            })
    }
}
module.exports=UserProjectAssociationRepository;