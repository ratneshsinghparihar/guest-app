import * as decorator from "nodedata/core/decorators/repository";
import {RepoTypeModel} from '../models/repotypemodel';
import { DynamicRepository } from "nodedata/core/dynamic/dynamic-repository";

@decorator.repository({ path: 'repotype', model: RepoTypeModel })
//@decorator.repository('blog', BlogModel)
export default class RepoTypeRepository extends DynamicRepository {

}