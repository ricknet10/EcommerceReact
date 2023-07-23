import axios, { AxiosError, AxiosResponse } from "axios";
import { error } from "console";
import { request } from "https";
import { url } from "inspector";
import { toast } from "react-toastify";
import { router } from "../router/Routes";

const speep = () => new Promise(resolve=> setTimeout(resolve,500));

axios.defaults.baseURL = 'https://localhost:5003/api/';
const responseBody = (response: AxiosResponse) => response.data;

//function responseBodyFn(response:AxiosResponse){
  //  return response.data;
//}

axios.interceptors.response.use(async response => {
    await sleep();
    return response
},(error:AxiosError) =>{
    //console.log('caught by interceptor');
    const{data,status} = error.response as AxiosResponse;
   // return Promise.reject(error.response);
   switch (status){
    case 400:
       // toast.error(data.title);
       if(data.errors){
        const modelStateErrors:string[]=[];
        for (const key in data.errors){
            if(data.erros[key]){
                modelStateErrors.push(data.errors[key])
            }
        }
        throw modelStateErrors.flat();
       }
        break;
        case 401:toast.error(data.title);
        break;
        case 500:
          router.navigate('/server-error') ,{state:{error: data}};
       break;
        default:break;
   }
   return Promise.reject(error.response);
}
)

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