import * as decorator from "nodedata/core/decorators/repository";
import {ProcessStatusModel} from '../models/processstatusmodel';
import { DynamicRepository } from "nodedata/core/dynamic/dynamic-repository";
import ProcessStatusErrorModel from "../models/processstatuserrormodel";

@decorator.repository({ path: 'processstatuserror', model: ProcessStatusErrorModel })
export  class ProcessStatusErrorRepository extends DynamicRepository {

}
export default ProcessStatusErrorRepository;