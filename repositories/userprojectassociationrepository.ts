import * as decorator from "nodedata/core/decorators/repository";
import { UserProjectAssociationModel } from '../models/userprojectassociationmodel';
import { DynamicRepository } from "nodedata/core/dynamic/dynamic-repository";
import { inject } from 'nodedata/di/decorators';
import * as userrepository from './userrepository';

@decorator.repository({ path: 'users_project', model: UserProjectAssociationModel })
//@decorator.repository('blog', BlogModel)
export class UserProjectAssociationRepository extends DynamicRepository {

@inject(userrepository)
_userrepository: userrepository.UsersRepository;

constructor() {
super()
}
doGetProjectsForUser(userId: number) {
console.log("doGetAllProjects")
let users: UserProjectAssociationModel = new UserProjectAssociationModel();
let input = {
"UserID": userId
}
return this.findWhere(input)
.then(res => {
return res;
})
}

doAddAssocation(userEmail: string, projectId) {
return this._userrepository.findWhere({ UserEmail: userEmail })
.then(res => {
if (res && res.length > 0) {
return this.post({ UserID: res[0].dataValues.UserID, ProjectID: projectId })
} else {
return this._userrepository.post({ UserEmail: userEmail })
.then(userObj => {
if (userObj && userObj.length > 0) {
return this.post({ UserID: userObj[0].dataValues.UserID, ProjectID: projectId })
}
})
}
})
}
}
module.exports = UserProjectAssociationRepository;