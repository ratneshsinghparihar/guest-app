import * as decorator from "nodedata/core/decorators/repository";
import {GitLogAnamolyModel} from '../models/gitloganamolymodel';
import { DynamicRepository } from "nodedata/core/dynamic/dynamic-repository";

@decorator.repository({ path: 'gitloganamoly', model: GitLogAnamolyModel })
//@decorator.repository('blog', BlogModel)
export default class GitLogAnamolyRepository extends DynamicRepository {

}