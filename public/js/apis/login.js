import {post} from './request.js';

export const login = (data) => post('/login', data);
export const register = (data) => post('/register', data);
export const sendEmail = (data) => post('/sendEmail', data);
export const changePassword = (data) => post('/changePassword', data);

