import request from "./request";

// 定义第一个接口获取token 
export const getToken= (data)=>request.post("/oauth/token",data)