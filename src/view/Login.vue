<template>
    <div class="login_container">
      <div class="login_box">
        <!--头像区域-->
        <div class="avatar_box">
          <img src="../assets/avatar.png" alt="">
        </div>
        <!-- 登录表单区域 -->
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入登录用户名">
              <i slot="prefix" style="display: flex; align-items: center;">
                <img style="width:16px; height:16px; margin-top: 13px"
                  src="../assets/iconfont-user.png"
                  alt/>
              </i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" :type="typePwd" placeholder="请输入登录密码">
              <i slot="prefix" style="display: flex;align-items: center;">
                <img
                  style="width:16px; height:16px; margin-top: 13px"
                  src="../assets/iconfont-password.png"
                  alt/>
              </i>
              <i slot="suffix" style="display: flex; align-items: center;" @click="showPwd">
                <img style="width:16px; height:16px; margin: 15px 5px 15px"
                     src="../assets/view-password.png"
                     alt/>
              </i>
            </el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetLoginForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                typePwd:'password',
                loginForm: {
                    username: '',
                    password: ''
                },
                loginFormRules: {
                    username: [
                        { required: true, message: '请输入登录用户名', trigger: 'blur' },
                        {
                            required: true,
                            pattern: /^1[3456789]\d{9}$/,
                            message: "请输入正确的登录用户名",
                            trigger: "blur"
                        }
                    ],
                    password: [
                        { required: true, message: '请输入登录密码', trigger: 'blur' },
                        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            resetLoginForm() {
                this.$refs.loginFormRef.resetFields();
            },
            login() {
                this.$refs.loginFormRef.validate(valid => {
                    if(!valid) return;

                })
            },
            showPwd() {
                this.typePwd = this.typePwd === 'password' ? 'text' : 'password';
            },
        }
    }
</script>

<style lang="less" scoped>

  html, body {
    height: 100%;

  }

  .login_container {
    margin:auto;
    padding: 0;
    background-color: #2b4b6b;
    width:1519px;
    height:720px;
  }
  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar_box {
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .btns {
    width:160px;
    height:40px;
    padding: 0 80px 0 80px;
    display: flex;
    justify-content: flex-end;
  }
</style>
