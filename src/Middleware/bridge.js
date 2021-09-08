import { data } from 'jquery';
import { ACCESS_POINT } from '../config';

import http from "./http";

const check = async () => {
  const result = await http.get(`${ACCESS_POINT}/test/jerry`);
  return result;
};


export default {
    check,
   
}