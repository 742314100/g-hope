import {get} from '../utils/http';

export function getNewsList(params){
  return get('/newsList',params);
}



