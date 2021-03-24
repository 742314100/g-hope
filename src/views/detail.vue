<template>
  <div id="app">
    <div class="newsTab">
      <div class="news">
        <div class="ny-top-tit">
            <div class="ny-top-name">
              <h3>详情内容</h3>
            <span>/ CONTENT</span>
          </div>
          <p>您的位置：<a href="http://mrxz.huangxiu1.com">官网首页</a> &gt; 详情内容</p>
        </div>
        <div class="ny-nr">
						<div class="ny-nr-tit">
							<h3>《末日血战》闪断更新公告</h3>
							<p>末日血战团队 发布于 2021-03-03 18:54:12</p>
						</div>
						<div class="ny-nr-txt">
							亲爱的幸存者：<br>
                <p class='indent'>为了优化各位幸存者的游戏体验，游戏将于3月4日进行闪断更新。闪断更新期间幸存者们仍然可以正常登陆游戏，希望各位幸存者相互转告~</p>
                更新时间：3月4日早上10：00-11:00<br>
                更新内容：<br>
                1、更新周五活动资源<br>
                2、生存危机活动现在可以长按连续攻击<br>
                3、埃契奥增强<br>
                增强如下：<br>
                5星技能一伤害提升至195%。<br>
                5星技能二吸收免控率提升至6%。<br>
                6星技能一伤害提升至235%。<br>
                6星技能二降低速度提升至30，吸收速度提升至10，吸收免控率提升至15%。<br>
                6星技能三速度增加提升至30。<br>
                6星技能四伤害提升至至生命上限的15%。<br>
                10星技能一伤害提升至285%。<br>
                10星技能二降低速度提升至50，吸收速度提升至15，吸收免控率提升至25%。<br>
                10星技能三速度增加提升至40。<br>
                10星技能四伤害提升至至生命上限的20%。<br>
                反击瞬间：血量低于50%时，获得50%减伤持续2回合（只触发一次）。<br>
                蔑视：增加能量提升至25。<br>
                唯快：增加效果释放主动技能时，增加同等于已损失血量百分比的攻击力和吸血，持续一回合，并将伤害提升至速度差额*1.5%。<br>
                <br>
						</div>
				</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {

      curNewsList:{}
    }
  },
  components: {

  },
  methods:{


  },
  mounted() {

  },



}
</script>

<style scoped>
.newsTab{
  background: url(../assets/img/ny-bg.jpg) top center no-repeat;
}
.news{
  width:1200px;
  height: 1268px;
  margin:0 auto;
  background: url(../assets/img/ny-main.jpg) no-repeat;
  text-align: left;
}
.ny-top-tit {
    width: 100%;
    height: 42px;
}
.ny-top-name {
    float: left;
    margin-left: 50px;
}
.ny-top-name h3 {
    line-height: 42px;
    color: #792b2a;
    font-size: 18px;
    float: left;
    line-height: 60px;
}
.ny-top-name span {
    color: #81584f;
    margin-top: 24px;
    margin-left: 6px;
    float: left;
}
.ny-top-tit p {
    float: right;
    height: 42px;
    line-height: 60px;
    color: #472e2e;
    font-size: 14px;
    margin-right: 60px;
}
.ny-nr {
    width: 938px;
    margin: 0 auto;
}
.ny-nr .ny-nr-tit {
    height: 112px;
    text-align: center;
    padding-top: 25px;
}
.ny-nr .ny-nr-tit h3 {
    color: #8e3432;
    font-size: 24px;
    width: 100%;
    float: left;
    padding-top: 30px;
    padding-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ny-nr .ny-nr-tit p {
    width: 100%;
    float: left;
    color: #948277;
    font-size: 14px;
}
.ny-nr-txt {
    width: 100%;
    color: #7a4f4e;
    font-size: 14px;
    line-height: 26px;
    padding: 30px 0 100px;
    max-height: 800px;
    overflow-y: auto;
    padding-right: 15px;
}
.indent{
  text-indent: 16px;
}




</style>
