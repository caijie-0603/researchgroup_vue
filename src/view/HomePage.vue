<template>
    <div class="homePageTotal">
      <Leader/>
      <HPMessages :messages="messages"/>


    </div>
</template>

<script>
  import Leader from '../components/Leader'
  import Footer from '../components/Footer'
  import HPMessages from '../components/HPMessages'

    export default {
        name: "HomePage",
        data(){
          return{
            messages:[

            ]
          }
      },
      methods:{

      },
      mounted(){
          var that = this
        this.$axios.get("http://localhost:10086/message/findAllMessages")
          .then(function (response) {
            for(var i=0;i<response.data.length;i++)
            {
              that.messages.push(response.data[i])
            }
          }).catch(function (err) {
          console.log(err)
        })
      },
      components: {
          Leader,
          Footer,
          HPMessages
      },

    }
</script>

<style scoped>
  .homePageTotal{
    margin: auto;
  }
</style>
