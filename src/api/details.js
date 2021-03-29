import {get} from '../utils/http';

export function getDetails(params){
  return get('/details',params);
}
