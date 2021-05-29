import axios from "axios";

export const signup = (body)=>{
    return axios.post('/api/1.0/users',body);
}
export  const chamgeLanguage = language =>{
    axios.defaults.headers['accept-language'] = language;
}

export const login = creds =>{
    return axios.post('/api/1.0/auth',{},creds);
}