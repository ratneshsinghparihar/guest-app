import * as decorator from "nodedata/core/decorators/repository";
import {ProcessStatusModel} from '../models/processstatusmodel';
import { DynamicRepository } from "nodedata/core/dynamic/dynamic-repository";

@decorator.repository({ path: 'processstatus', model: ProcessStatusModel })
export  class ProcessStatusRepository extends DynamicRepository {

}
export default ProcessStatusRepository;