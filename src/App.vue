<template>
  <div id="app">
    <TopPublic v-show="!(path==='/login')"></TopPublic>

    <router-view/>
    <Footer v-show="!(path==='/login')"/>
  </div>
</template>

<script>

  import TopPublic from './components/TopPublic'
  import Footer from './components/Footer'
  export default {
    name: 'App',
    data() {
      return {
        path:''
      }
    },
    methods: {

    },
    mounted(){
      //判断路由
      this.path = this.$route.path
    },
    watch:{
      $route(to,from){
        this.path=to.path;
      }
    },
    components:{
      TopPublic,
      Footer
    }
}
</script>

<style>



  * {
    margin:0 auto;
  }
  #app{
    width: 1519px;
  }


</style>
