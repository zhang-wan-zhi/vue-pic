<template>
  <div class="home">
    <el-card class="box-card">
      <div v-for="item in blogList" :key="item._id" class="item">
          <router-link :to="'/detail/' + item._id">
            <div class="item-main">
              <el-image
                style="width: 100%; height: 100%"
                :src="item.pic"
              ></el-image>
              <h1>{{ item.title }}</h1>
            </div>
          </router-link>
        
        <div class="item-tags">
          <span class="tag-time"
            ><i class="el-icon-s-cooperation" style="margin-right:5px"></i
            >{{ item.date }}</span
          >
          <span>{{ item.classify }}</span>
        </div>
        <p>{{ item.gist }}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      blogList: [],
    };
  },
  components: {},
  methods: {},
  mounted() {
    //获取首页文章列表
    this.$http({
      method: "post",
      url: "articleList",
    }).then((e) => {
      this.blogList = e.data;
      console.log("bloglist", this.blogList);
      console.log(e);
    });
  },
};
</script>

<style>
.home {
  height: 100%;
  width: 100%;
}
.item {
  margin-bottom: 40px;
}
.item-main {
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  min-height: 95px;
  background-color: #eee;
}
.item-main h1 {
  color: #fff;
  font-size: 2.5em;
  font-weight: 400;
  margin: 0;
  margin-top: 10px;
  padding-left: 1px;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  text-transform: none;
  z-index: 1;
  padding: 25px;
  text-align: left;
}
.item .item-tags {
  display: flex;
  justify-content: start;
  margin-top: 10px;
}
.item .item-tags span {
  width: 150px;
  height: 36px;
  border-radius: 20px;
  background: yellow;
  margin-right: 20px;
  text-align: center;
  line-height: 36px;
  overflow: hidden;
}
.item p {
  text-align: start;
  margin: 15px 0;
}
</style>
