<template>
  <div class="direction_total">
    <div class="direction_top">
      <div class="direction">
        <img src="../assets/direction.jpg"/>
      </div>
    </div>

    <div class="direction_word">
      <p class="direction_title">
        {{title1}}
      </p>
      <p class="direction_content">
        {{content1}}
      </p>
      <p class="direction_content">
        {{content2}}
      </p>
      <p class="direction_title">
        {{title2}}
      </p>
      <p class="direction_content">
        {{content3}}
      </p>
      <p class="direction_title">
        {{title3}}
      </p>
      <p class="direction_content">
        {{content4}}
      </p>
    </div>

  </div>
    
</template>

<script>
    export default {
        name: "Direction",
        data(){
          return{
            title1:"1 仿生智能超分子材料的制备与催化研究: Preparation and Catalysis of Bionic Supramolecular Materials",
            title2:"2. 手性MOFs的构筑与不对称催化研究: Construction of Chiral MOFs and Asymmetric Catalysis",
            title3:"3. 超分子体系的分子识别与活体荧光成像研究：Molecular recognition of supramolecular system and fluorescence imaging in vivo",
            content1:"生物酶催化是生物界物质代谢的基础，是规模庞大的“生物工厂”。" +
              "模拟酶的催化研究具有非常重要的研究价值。" +
              "课题组聚焦于酶活性中心的人工模拟，通过设计金属离子和有机配体的有序组装，构筑具有限域空腔的金属-有机多面体结构。" +
              "通过限域空腔和多面体活性中心的协同作用，实现常温常压下催化反应的发生。" +
              "包括通过模拟光合作用，构建系列光催化体系；" +
              "通过模拟固氮酶催化过程，制备系列温和条件下的氮循环催化体系。多个独立催化反应的智能协同是由基础化工原料通过多步化学反应形成精细化工中间体的重要研究课题。" +
              "独立催化活性中心在复合材料中的结构耦合，独立催化反应间的动力学速率匹配以及不同亲/疏水性物种在反应体系中的快速扩散控制在实现多步串联反应的高效协同与转化过程中至关重要。" +
              "发挥仿生智能超分子限域结构可控的优势，将生物辅酶活性位点分布于仿生智能超分子限域空间表面，" +
              "畅通超分子限域空间内外部质子和电子传递通道，通过光敏中心和底物的选择性包覆以及生物酶催化过程的耦合，" +
              "利用主客体结构匹配和反应中间体的共用，实现从仿生超分子催化材料智能制备到精细化学品智能制造的全链条创新研究",
            content2:"通过模拟酶的催化过程为绿色化学化工制备提供理想的模型。",
            content3:"手性是物质的固有属性，手性催化是构筑单一手性物质的理想途径。" +
              "针对目前手性催化制备存在的催化剂成本昂贵，贵金属残留，难分离等问题。课题组创新性的通过构筑系列手性的金属-有机框架材料来实现非均相条件下的不对称催化制备。" +
              "其中通过非手性单元，自发拆分构筑手性催化剂的系列研究独具特色，获得国际国内的高度评价。" +
              "代表非均相金属-有机框架手性催化新的发展方向。",
            content4:"肿瘤的早期诊断和早期治疗是提高生存率和改善预后与生活质量的关键，对靶分子的特异性成像能够提高其诊断的准确性和可靠性，" +
              "通过构建肿瘤靶向荧光传感器，实现对受体酪氨酸激酶等肿瘤标志物的靶向识别，拓展系列新型材料；" +
              "利用荧光基团标记反应底物，结合金属-有机多面体独特的空间限域，实现活体中肿瘤形成发展过程的生物示踪。"

          }
        }
    }
</script>

<style scoped>
  .direction_total{
    width:1000px;
    height:800px;
    float:left;
    margin: 20px 259.6px 30px 259.6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  .direction_top{
    width:1000px;
    height:55px;
    margin-top:30px;
    margin-bottom:40px;
  }
  .direction{
    text-align: center;
  }
  .direction_word{
    width:996px;
    padding:0 2px 0 2px;
    height:600px;
    float: left;
    margin-top:20px;
    line-height: 28px;
  }
  .direction_title{
    font-weight: bold;
    text-indent:5em;
    color: #A9A9A9;
    font-size: 17px;
  }
  .direction_content{
    color: #A9A9A9;
    text-indent:6em;
    font-size: 16px;
  }

</style>
