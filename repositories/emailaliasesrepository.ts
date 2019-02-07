import * as decorator from "nodedata/core/decorators/repository";
import {EmailAliasesModel} from '../models/emailaliasesmodel';
import { DynamicRepository } from "nodedata/core/dynamic/dynamic-repository";

@decorator.repository({ path: 'emailalias', model: EmailAliasesModel })
//@decorator.repository('blog', BlogModel)
export default class emailaliasRepository extends DynamicRepository {

}