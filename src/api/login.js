import {post} from '../utils/http';

export function goLogin(params){
  return post('/login',params);
}