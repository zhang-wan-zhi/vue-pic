<template>
  <div class="center">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="10px"
      class="demo-ruleForm"
    >
      <el-form-item prop="age">
        <el-input
          v-model.number="ruleForm.age"
          @focus="showVerification = true"
          @blur="blurPhoneInput"
          placeholder="请输入手机号码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="verificationCode" v-show="showVerification">
        <el-input
          v-model.number="ruleForm.verificationCode"
          style="width: 150px; float: left"
          placeholder="验证码"
        ></el-input>
        <el-button
          style="float: right; width: 300px"
          @click="sendMsg"
          :disabled="ruleForm.age === '' ? true : false"
          type="primary"
          >发送短信</el-button
        >
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空不能为空"));
      }
      setTimeout(() => {
        if (!/^1[0123456789]\d{9}$/.test(value)) {
          callback(new Error("请输入正确的手机号"));
        } else {
          callback();
        }
      }, 500);
    };

    return {
      ruleForm: {
        verificationCode: "",
        age: "",
      },
      showVerification: false,
      rules: {
        age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    sendMsg() {
      this.$refs.ruleForm.validateField("age", (phoneError) => {
        if (phoneError) {
          this.$message({
            message: "手机号格式错误",
            type: "warning",
          })
        } else {
          this.$message({
            message: "短信发送成功",
            type: "success",
          })
        }
      });
    },
    blurPhoneInput() {
      if (this.ruleForm.age === "") {
        this.showVerification = false;
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style>
.center {
  width: 500px;
  margin: 0 auto;
}
.clear {
  clear: both;
}
</style>