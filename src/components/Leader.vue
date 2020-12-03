<template>
    <div class="total">
      <div class="leader_part">
        <div class="leader">
          <img src="../assets/leader.png">
        </div>
      </div>
      <div class="leader_block">
        <div class="leader_img">
          <img style="width:252px;height:291px" src="../assets/ywj.jpg"/>
        </div>
        <div class="block2ar">
          <p class="blue_word">重庆理工大学</p>
          <p class="blue_word">{{degree}}</p>
          <p class="gray_word">{{name}}团支书</p>
          <p class="gray_word">乡村味道总代理</p>
          <p class="gray_word">代记烧烤校园代理</p>
        </div>
        <div class="resume_content">
          <p>{{resume1}}</p>
          <p>{{resume2}}</p>
        </div>

      </div>

    </div>
</template>

<script>
    export default {
        name: "Leader",
      data(){
          return{
            name:"袁文俊",
            degree:"团支书",
            resume1:"1986年、1989年吉林大学先后获学士与硕士学位，1992年南京大学获博士学位并留校工作。" +
              "曾在香港中文大学和英国诺丁汉大学做访问学者。" +
              "2005年入选教育部“新世纪优秀人才”，2010年获国家杰出青年基金资助，2014年入选教育部“长江学者”特聘教授。",
            resume2:"段春迎教授主要从事功能配位化学研究。研究内容聚焦于金属有机限域空间的可控组装、仿生识别与不对催化等。" +
              "提出的利用构建富含酰胺基团的金属有机笼状结构的组装策略，广泛用于多种拟酶体系的可控合成与功能强化；" +
              "利用非手性单元组装的催化材料被Chem. Rev.评价为MOFs不对称催化的重要进展之一(Milestones)，将染料分子组装金属-有机超分子体系的思路，已经用于新型能源材料的拓展与研制。" +
              "近年来，在J. Am. Chem. Soc., Angew. Chem. Int. Ed., Nat. Commun.等期刊上发表论文300余篇，论文他引15000余次，获国家自然科学二等奖一项、辽宁省、教育部自然科学一等奖四项。"
          }
      }
    }
</script>

<style scoped>

  .total{
    margin: auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    float:left;
    width:1000px;
    height:640px;
    margin: 20px 259.6px 44px 259.6px;
  }
  .leader_part{
    width:1000px;
    height:55px;
    margin-top:30px;
    margin-bottom:40px;
  }

  .leader{
    text-align: center;

  }
  .leader_block{
    margin:0 35px 0 35px;
    width:930px;
    height: 500px;
  }
  .leader_img{
    float: left;
    width:252px;
    height:294px;
    margin-right: 72px;
  }
  .block2ar{
    float:left;
    width:215px;
    height:165px;
  }
  .blue_word{
    color: rgb(30,67,152);
    font-size:16px;
    font-weight: bold;
    padding: 7px 0 0 0;
  }
  .gray_word{
    color: dimgray;
    font-size:16px;
    padding: 10px 0 0 0;
  }
  .resume_content{
    width:930px;
    height:195px;
    float:left;
    margin-top:10px;
    text-indent:2em;
    color: gray;
    font-size: 15px;
    line-height: 25px;
  }

</style>
