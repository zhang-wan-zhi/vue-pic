<template>
  <div class="home">
    <el-row :gutter="12">
      <el-col :span="12">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <img
              ref="imgHeight"
              :src="item.idView"
              class="image"
              @load="imgLoad"
            />
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          鼠标悬浮时显示
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          从不显示
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      imgList: [
        { id: 0, idView: require("../../status/image/1.jpg") },
        { id: 1, name: "详情", idView: require("../../status/image/2.jpg") },
        { id: 2, name: "推荐", idView: require("../../status/image/1.jpg") },
        { id: 3, idView: require("../../status/image/4.jpg") },
      ],
      screenWidth :0
    };
  },
  components: {},
  methods: {
    setSize: function() {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = (400 / 1920) * this.screenWidth;
    },
  },
  mounted() {
    // 首次加载时,需要调用一次
    this.screenWidth = window.innerWidth;
    this.setSize();
    // 窗口大小发生改变时,调用一次
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
      this.setSize();
    };
  },
};
</script>

<style>

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.image {
  /*设置图片宽度和浏览器宽度一致*/
  width: 100%;
  height: inherit;
}
</style>
