import {get} from './request.js';

export const getHomeList = (category) => get('/homeList/' + category);
