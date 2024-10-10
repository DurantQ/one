<template>
  <div class="w-[1920px] h-[1080px]">
    <el-container>
      <el-aside class="w-[80px] h-[1080px] bg-yellow-300">
        <div>工作台</div>
        <div>项目</div>
        <div>事项</div>
        <div>代码</div>
        <div>制品</div>
        <div>洞察</div>
        <div>知识</div>
        <div>自动化</div>
      </el-aside>
      <el-container>
        <el-header class="w-[1600px] h-[50px] bg-green-500">
          <h2>代码仓库</h2>
        </el-header>
        <el-main class="w-[1600px] h-[705px]">
          <el-tabs
            v-model="activeName"
            class="demo-tabs"
            @tab-click="handleClick"
          >
            <el-tab-pane label="最近访问" name="first">
              <div class="flex flex-rol justify-center">
                <img src="../assets/4.png" />
                <p class="w-[64px] h-[40px] ml-10px">暂无数据</p>
              </div>
            </el-tab-pane>
            <el-tab-pane label="全部仓库" name="second">
              <h1>欢迎使用代码仓库</h1>
            </el-tab-pane>
            <el-tab-pane label="开源仓库" name="third">开源仓库</el-tab-pane>
            <el-button type="primary">创建代码仓库</el-button>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
</script>

<style>
</style>