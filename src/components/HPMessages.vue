<template>
  <div class="hp_messages">
    <div class="msg_img">
      <img src="../assets/message.gif"/>
    </div>
    <HPMessage v-for="(message,index) in messages" :key="index" :message="message" :inedx="index"/>


  </div>

</template>

<script>
  import HPMessage from './HPMessage'
    export default {
        name: "HPMessages",
      data(){
          return{

          }
      },
      components:{
          HPMessage
      },
      mounted(){
      },
      props:{
          messages:Array
      }
    }
</script>

<style scoped>
  .hp_messages{
    width:1519px;
    margin: auto;
    float: left;
    background: rgb(247,247,247);
  }
  .msg_img{
    margin-top:30px;
    text-align: center;
  }

</style>
