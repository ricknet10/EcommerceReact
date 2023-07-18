import axios, { AxiosResponse } from "axios";
import { request } from "https";
import { url } from "inspector";

axios.defaults.baseURL = 'https://localhost:5003/api/'
const responseBody = (response: AxiosResponse) => response.data;

//function responseBodyFn(response:AxiosResponse){
  //  return response.data;
//}

const requests = {
    get: (url:string)=>axios.get(url).then(responseBody),
    post: (url:string,body:{})=>axios.post(url,body).then(responseBody),
    put: (url:string,body:{})=>axios.put(url,body).then(responseBody),
    delte: (url:string)=>axios.delete(url).then(responseBody),

}

const Catalog = {
    list:()=> requests.get('product'),
    details:(id:number)=>requests.get(`product/${id}`)
}

const TestErrors = {
   // get400Error: () function():Promise<any>-found'),
   get400Error:()=> requests.get('buggy/bad-request'),
   get401Error:()=> requests.get('buggy/unautorised'),
   get404Error:()=> requests.get('buggy/not-found'),
   get500Error:()=> requests.get('buggy/server-error'),
   getValidationError:()=> requests.get('buggy/validatio-error'),


}

const agent ={
    Catalog,
    TestErrors
}
export default agent;