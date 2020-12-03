<template>
    <div class="contactUsLabel">
      <div class="contactUsLabel_top">
        <img src="../assets/lxwm.jpg"/>
      </div>
      <div class="contactUsLabel_content">
        <p>{{address1}}</p>
        <p>{{address2}}</p>
        <p>邮编：{{postcode}}</p>
        <p>Email：{{email}}</p>
        <p>Tel：{{tel}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ContactUsLabel",
      data(){
          return{
            address1:'重庆市巴南区花溪街道红光大道69号',
            address2:'重庆市渝北区龙兴镇普福大道459号',
            postcode:'400054 ',
            email:'cqut@.com',
            tel:'023-68822995  023-62565017'
          }
      }
    }
</script>

<style scoped>
  .contactUsLabel{
    width:1000px;
    height:360px;
    float:left;
    margin: 20px 259.6px 30px 259.6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  .contactUsLabel_top{
    float:left;
    width:930px;
    height:54px;
    padding-top: 21px;
    margin: 0 35px 55px 35px;
  }
  .contactUsLabel_content{
    float:left;
    width:930px;
    height:220px;
    margin:0 35px 0 35px;
    line-height: 35px;
    color:dimgray;
    font-size:15px;
  }
</style>
