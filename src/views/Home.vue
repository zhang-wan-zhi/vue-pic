<template>
  <div class="home">
    <el-card class="box-card">
      <div v-for="item in blogList" :key="item._id" class="item">
        <div class="item-main" @click="skipArticle($event, item._id)">
          <el-image
            style="width: 100%; height: 100%;"
            :src="item.pic"
          >
          </el-image>
          <div
            class="__cov-ripple"
            :id="item._id"
            :class="{ animate: repple_button.animate }"
          ></div>

          <h1>{{ item.title }}</h1>
        </div>

        <div class="item-tags">
          <span class="tag-time"
            ><i class="el-icon-s-cooperation" style="margin-right:5px"></i
            >{{ item.date }}</span
          >
          <span class="tag-classify"><i class="el-icon-s-promotion" style="margin-right:5px"></i>{{ item.classify }}</span>
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
      repple_button: {
        animate: false,
        toggle: false,
      },
    };
  },
  components: {},
  methods: {
    goTo() {
      var hd = document.getElementById("header");
      var headerwid = hd.offsetHeight;
      window.scrollTo(0, headerwid);
    },
    skipArticle(e, value) {
      console.log(e);
      console.log(value);
      setTimeout(() => {
        this.$router.push("/detail/" + value);
      }, 400);
      this.addRippleEffect(e, value);
    },
    addRippleEffect(e, value) {
      console.log("e", e);
      this.repple_button.animate = true;
      let button = e.target;
      console.log("button", button);
      let ripple = document.getElementById(value);
      console.log("ripple", ripple);
      if (ripple) {
        let d = Math.max(button.offsetHeight, button.offsetWidth);
        let x = e.layerX - d / 2;
        let y = e.layerY - d / 2;
        console.log(d, x, y);
        ripple.setAttribute(
          "style",
          "height: " +
            d +
            "px; width: " +
            d +
            "px; top: " +
            y +
            "px; left: " +
            x +
            "px;"
        );
      }
      this.$nextTick(() => {
        setTimeout(() => {
          this.repple_button.animate = false;
        }, 660);
      });
    },
  },
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
  cursor: pointer;
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
  background-color: rgba(255, 185, 0, 0.1);
  color: #ffb900;
  margin-right: 20px;
  text-align: center;
  line-height: 36px;
  overflow: hidden;
}
.item .item-tags .tag-classify {
  background-color: rgba(255, 78, 106, 0.1);
  color: #ff4e6a;
}

.item p {
  text-align: start;
  margin: 15px 0;
}

.__cov-ripple {
  display: block;
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 100%;
  transform: scale(0);
}
.__cov-ripple.animate {
  animation: ripple 0.8s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}
</style>
