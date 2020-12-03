<template>
  <div class="total">
      <div class="head">
        <div class="head_box">
          不孕不育研究 | STUDY ON INFERTILITY
          <a class="login_part" @click="toLogin()">
            登录<img style="width: 30px;height:30px;float:left;margin-top:8px" src="../assets/login_top.png"/>
          </a>
        </div>
      </div>
      <div class="headLog">
        <div class="headLogBox">
          <div class="logo_part">
            <img style="width:320px;height:88px" src="../assets/logo.png"/>
          </div>
          <div class="tel_address">
            <img style="width:50px;height:50px;float: left;" src="../assets/phone.png"/>
            <div style="height:50px;width:120px;float: right;">
              <p style="margin: 0;font-size: 18px;color: darkgray;">电话：</p>
              <p style="margin: 0;font-size:13px;color: darkgray;">023-68667465</p>
            </div>
          </div>
          <div class="tel_address">
            <img style="width:50px;height:50px;float: left;" src="../assets/address.png"/>
            <div style="height:50px;width:120px;float: right;">
              <p style="margin: 0;font-size: 18px;color: darkgray;">地址：</p>
              <p style="margin: 0;font-size:13px;color: darkgray;">重庆市渝北区龙兴镇普福大道459号</p>
            </div>
          </div>
        </div>
      </div>

      <div class="school">
        <img style="width:100%;height:420px;" src="../assets/school.png"/>
      </div>

      <div class="target">
        <div class="blue_block">

        </div>
        <img style="width:1200px;height:123px" src="../assets/target.jpg">
        <div class="blue_block" style="float:right;">

        </div>
      </div>

      <div class="navigation_bar">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="rgb(30,67,152)"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1"><router-link to="/homePage">首页</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="/personInCharge">负责人介绍</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="/researchDirection">研究方向</router-link> </el-menu-item>
          <el-menu-item index="4">研究团队</el-menu-item>
          <el-menu-item index="5">研究成果</el-menu-item>
          <el-menu-item index="6">通知新闻</el-menu-item>
          <el-menu-item index="7"><router-link to="/contactUs">联系我们</router-link></el-menu-item>
          <el-menu-item index="8">友情链接</el-menu-item>
        </el-menu>
      </div>
  </div>

</template>

<script>
    export default {
        name: "TopPublic",
      data(){
          return{
            activeIndex: '1',
          }
      },
      methods:{
        toLogin(){
          this.$router.push({path:'/login'})
        }
      }
    }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  .total{
    margin: auto;
    width:1519px;
  }

  .head{
    width:1519px;
    height:50px;
    background-color:rgb(30,67,152);
    float: left;
  }
  .head_box{
    width:1000px;
    height:50px;
    margin-left: 260px;
    margin-right:260px;
    line-height: 50px;
    float: left;
    font-size: 13px;
    color: white;
  }
  .login_part{
    font-size: 15px;
    color: white;
    width:60px;
    height:40px;
    float:right;
  }

  .headLog{
    float:left;
    width:100%;
    height:125px;
  }
  .headLogBox{

    width:1000px;
    height:100px;
    margin: 0 0 260px 260px;
  }
  .logo_part{
    float: left;
    width:320px;
    height:90px;
    padding-top:10px;
  }
  .tel_address{
    float:right;
    width:185px;
    height:50px;
    padding-top:32px;
  }
  .school{
    float: left;
    width: 1519px;
    height:420px;
  }
  .navigation_bar{
    position: absolute;
    width:754px;
    margin-left: 380px;
    margin-top: 155px;
  }
  .target{
    width:1519px;
    float:left;
    margin-top:10px;
    height:123px;
  }
  .blue_block{
    background:rgb(30,67,152);
    float:left;
    width:159px;
    height:123px;
  }
</style>
