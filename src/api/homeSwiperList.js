import {get} from '../utils/http';

export function getHomeSwiperList(params){
  return get('/homeSwiperList',params);
}



