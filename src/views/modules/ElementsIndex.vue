<template>
  <el-row :gutter="20">
    <el-col :span="6"
      ><div>
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;">
            <span>手机验证码校验</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" @click="goYanzhen">查看</el-button>
            </div>
          </div>
        </el-card>
      </div></el-col
    >
    <el-col :span="6"><div></div></el-col>
    <el-col :span="6"><div></div></el-col>
    <el-col :span="6"><div></div></el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    goYanzhen() {
      this.$router.push('/yz')
    }
  }
};
</script>

<style>
.button {
  padding: 0;
  float: right;
}
.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
</style>
