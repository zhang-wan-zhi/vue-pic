<template>
  <div id="app">
    <div class="header">
      <div class="nav">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="rgba(242, 244, 248, 0)"
        text-color="#000000"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">组件</template>
          <el-menu-item index="2-1">Element</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"
          ><a href="https://www.ele.me" target="_blank"
            >订单管理</a
          ></el-menu-item
        >
      </el-menu>
    </div>
    <!-- 导航栏结束 -->
    
    </div>
    <div class="banner"></div>
    <div class="center">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.center {
  width: 1000px;
  margin: 0 auto;
}

.nav {
  width: 1000px;
  margin: 0 auto;

}

.banner {
    width: 100%;
    height: 220px;
    background: url(../status/image/nav.png) no-repeat center top;
    background-color: #fff;
    background-size: cover;
    display: block;
    position: relative;
}

.header {
  width: 100%;
  background-color: rgba(242, 244, 248, 0.7);
  margin-bottom: 10px;
  box-shadow: 0 2px 6px rgba(50,50,93,.11);
  border-right: solid 1px #e6e6e6;
  position:absolute;
  z-index: 999;

}

.el-menu.el-menu--horizontal {
  border-bottom: none!important
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
