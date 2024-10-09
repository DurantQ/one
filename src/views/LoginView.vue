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
        <Space class="w-full" direction="vertical">
          <Input
            class="h-[60px]"
            size="large"
            v-model:value="value"
            placeholder="请输入邮箱"
          />
          <Input
            class="h-[60px]"
            size="large"
            v-model:value.lazy="value1"
            autofocus
            placeholder="请输入密码"
          />
        </Space>
        <checkbox class="mt-[5px]" v-model:checked="checked"
          >我已经阅读并同意<Button class="[w-50px]" type="link">服务协议</Button
          >和<Button type="link">隐私政策</Button>
        </checkbox>
        <Button class="w-full h-[50px] mt-[15px]" type="primary">登录</Button>
        <p class="text-sm">还未注册<Button type="link">立即注册</Button></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Carousel, Space, Input, Button, Checkbox } from "ant-design-vue";
</script>

<style>
</style>