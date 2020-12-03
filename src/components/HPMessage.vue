<template>
  <div class="hp_message">
    <div class="hp_message_time">
      <span>{{this.formatDate(this.message['sendTime'])}}</span>
    </div>
    <div class="hp_message_title">
      <p class="hp_message_titleText">
        <a style="text-decoration: none;color: black;" href="">{{message['title']}}</a>
      </p>
    </div>
  </div>

</template>

<script>
    export default {
        name: "HPMessage",
      data(){
          return{
            time:'2020年06月23日',
            title:'段春迎教授团队在限域超分子拟酶催化领域取得突破性进展'
          }
      },
      methods:{
        formatDate(value) {
          let date = new Date(value);
          let y = date.getFullYear();
          let MM = date.getMonth() + 1;
          MM = MM < 10 ? "0" + MM : MM;
          let d = date.getDate();
          d = d < 10 ? "0" + d : d;
          return y + "年" + MM + "月" + d + "日";
        }
      },
      mounted(){

      },
      props:{
        message:Object
      }
    }
</script>

<style scoped>

  .hp_message{
    width:1000px;
    height:70px;
    margin: 20px 259.6px 5px 259.6px;
    float: left;
    background: orange;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

  }
  .hp_message_time{
    width:80px;
    height:60px;
    padding:10px 10px 0 10px;
    float:left;
    background:rgb(30,67,152);
    font-size: 18px;
    text-align: center;
    color: white;
  }
  .hp_message_title{
    float: left;
    width:880px;
    height:50px;
    padding:10px;
    background: white;
  }
  .hp_message_titleText{
    font-size: 18px;
    padding-left:10px;
    padding-top:10px;
    margin-bottom:10px;
    height:30px;
  }
</style>
