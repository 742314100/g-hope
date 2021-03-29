<template>
  <div class="login" v-show='loginShow'>
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <span class="close" @click="close">X</span>
      <h3 class="login-title">欢迎{{ifLogin}}</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginForm')">{{ifLogin}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { goLogin } from '../api/login'
import { mapActions } from 'vuex'
export default {
  name: "Login",
  data() {
    return {
      ifLogin:'注册',
      loginShow:true,
      random:'',
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '账号不可为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不可为空', trigger: 'blur'}
        ]
      },
    }
  },
  mounted(){
    this.loginShow=true;
    if(this.$route.query.ifLogin == 0){
      this.ifLogin='注册'
    }else{
      this.ifLogin='登录'
    }
  },
  watch: {
    $route: {
      handler() {
        this.form.username='';
        this.form.password='';
        this.loginShow=true;
        this.random=this.$route.query.random;
        if(this.$route.query.ifLogin == 0){
          this.ifLogin='注册'
        }else{
          this.ifLogin='登录'
        }
      },
      deep: true,
    },
    docData: {
      random() {
        this.loginShow=true;
      },
      deep: true
      }
  },
  methods: {
    ...mapActions({
      setHasLogin:'setHasLogin'
    }),
    close(){
      this.loginShow=false;
    },
    goLogin(){
      goLogin({userName:this.form.username,passWord:this.form.password,ifLogin:this.ifLogin}).then(res => {
        if(res.data.retCode == 'Y'){
          this.$notify({
            title: '提示',
            message: this.ifLogin+'成功'
          });
          this.loginShow = false;
          this.setHasLogin(res.data.data.userName);
        }else{
          this.$notify({
            title: '提示',
            message:res.data.msg
          });
        }
      });
    },
    onSubmit(formName) {
      // 为表单绑定验证功能
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.goLogin();
        } else {
          this.dialogVisible = true;
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.login-box {
  position:fixed;
  top:300px;
  left:50%;
  margin-left:-200px;
  background:#fff;
  border: 1px solid #DCDFE6;
  width: 400px;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}
.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
  font-size:16px;
}
.close{
  position: absolute;
  right: 20px;
  top: 10px;
  font-size: 16px;
  cursor:pointer;
  padding: 5px;
}
</style>