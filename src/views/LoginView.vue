<template>
  <div class="flex items-center">
    <div class="w-[610px] h-[859px]">
      <Carousel autoplay="true">
        <img src="../assets/app9KTBmXHMK2mtI9RHyzPDs-h0NXne1.png" />
        <img src="../assets/appm3V1L6Y3C3podIGShCo686dXRRY4i.png" />
        <img src="../assets/appzx4bpYR9rpFdZULrF9EFycs2l-416.png" />
      </Carousel>
    </div>
    <!-- flex-col 垂直排列 -->
    <div class="flex-1 h-[100vh] flex justify-center items-center">
      <div class="w-[500px] flex flex-col justify-center items-center">
        <h1 class="text-[35px] mb-[60px]">登录，即可创造您的应用</h1>
        <Space class="w-full" direction="vertical" ref="userLoginInfoRef">
          <Input
            class="h-[60px]"
            size="large"
            v-model:value="userLoginInfo.user"
            placeholder="请输入邮箱"
          />
          <Input.Password
            class="h-[60px]"
            size="large"
            v-model:value.lazy="userLoginInfo.password"
            autofocus
            placeholder="请输入密码"
          />
        </Space>
        <checkbox class="mt-[5px]" v-model:="checked"
          >我已经阅读并同意<Button class="[w-50px]" type="link">服务协议</Button
          >和<Button type="link">隐私政策</Button>
        </checkbox>
        <Button
          @click="AuthorizationCode(userLoginInfo.user, userLoginInfo.password)"
          class="w-full h-[50px] mt-[15px]"
          type="primary"
          >登录</Button
        >
        <p class="text-sm">还未注册<Button type="link">立即注册</Button></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Carousel, Space, Input, Button, Checkbox } from "ant-design-vue";

import router from "../router/index.js";
import { AuthorizationCode } from "../api";

// 实例化数据
const userLoginInfo = ref({
  user: "3213868796@qq.com",
  password: "Fyw666666..",
  checked: false,
  loginLoding: false,
});
let loginStatus = AuthorizationCode(
  userLoginInfo.value.user,
  userLoginInfo.value.password
);
if (loginStatus === 200) {
  router.push("/");
} else {
  alert("请重新登录");
}
// const submitForm = async () => {
//   // console.log(await formRef.value.validate());
//   // if (!formRef()) { return }

//   if (await userLoginInfoRef()) {
//     if (userLoginInfo.checked != true) {
//       ElMessage({
//         message: "请同意服务协议和隐私政策",
//         type: "error",
//         plain: true,
//       });
//       return;
//     }

//     let userToken = await AuthorizationCode(
//       userLoginInfo.user,
//       userLoginInfo.password
//     );
//     userLoginInfo.loginLoding = true;

//     if (userToken.status === 200) {
//       store.$patch((state) => {
//         state.access_token = userToken.data.access_token;
//         state.refresh_token = userToken.data.refresh_token;
//       });
//       userLoginInfo.loginLoding = false;
//       ElMessage({
//         message: "登录成功",
//         type: "success",
//         plain: true,
//       });
//       setTimeout(() => {
//         router.push("/Home/workbench");
//       }, 1000);
//     }
//   } else {
//     ElMessage({
//       message: "请输入正确的邮箱",
//       type: "error",
//       plain: true,
//     });
//   }
// };
</script>

<style>
</style>