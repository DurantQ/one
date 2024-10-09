import axios from "axios";

// 基础地址请求
const request =axios.create({
	baseURL:"https://gitee.com",
	timeout:5000,
})

export default request