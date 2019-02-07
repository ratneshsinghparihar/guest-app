import * as decorator from "nodedata/core/decorators/repository";
import { UsersModel } from '../models/usersmodel';
import { DynamicRepository } from "nodedata/core/dynamic/dynamic-repository";

@decorator.repository({ path: 'Users', model: UsersModel })
//@decorator.repository('blog', BlogModel)
export class UsersRepository extends DynamicRepository {
    constructor(){
        super()
    }
    doGetUser(useremail) {
        console.log("doGetAllProjects")
        let users: UsersModel = new UsersModel();
        let input={
            "UserEmail":useremail
        }
        return this.findWhere(input)
            .then(res => {
                return res;
            })
    }
}
module.exports=UsersRepository;