<template>
  <div id="app">
    <div class="newsTab">
      <div class="news">
        <div class="ny-wrap">
          <div class="ny-top-tit">
            <div class="ny-top-name">
              <h3>礼包中心</h3>
              <span>/ GIFT</span>
            </div>
            <p>您的位置：<a>官网首页</a> &gt; 礼包中心</p>
          </div>
          <div class="gift-list">
						<ul class="gift-lb">
              <li v-for="(item,index) in giftList" :key='index'>
                <div class="gift-way">
                  <strong class="game-gift-name">{{item.name}}</strong>
                  <div class="info">{{item.info}}</div>
                  <div class="surplus">
                    <a class="ling-gift-btn"  target="_self">领取</a>
                  </div>
                </div>
              </li>
            </ul>
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
      cur:0,
      giftList:[
                {name:'手机绑定礼包',info:'【钻石】x200、【强化药】x1000、【啤酒】x2、【转盘币】x5'},
                {name:'实名认证礼包',info:'【钻石】*200、【啤酒】*2、【转盘币】*3、【竞技场门票】*2'},
                ]
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
}
.ny-wrap {
  padding-top: 12px;
  width: 1098px;
  margin: 0 auto;
}
.ny-top-tit {
  width: 100%;
  height: 42px;
}
.ny-top-name {
  float: left;
}
.ny-top-name h3 {
  line-height: 42px;
  color: #792b2a;
  font-size: 18px;
  float: left;
}
.ny-top-name span {
  color: #81584f;
  margin-top: 16px;
  margin-left: 6px;
  float: left;
}
.ny-top-tit p {
  float: right;
  height: 42px;
  line-height: 42px;
  color: #472e2e;
  font-size: 14px;
}
.ny-tab {
  background: url(../assets/img/ny-tab.jpg) bottom center no-repeat;
  width: 100%;
  height: 48px;
  text-align: center;
  padding-top: 58px;
}
.gift-list {
    width: 100%;
    overflow: hidden;
}
.gift-lb {
    width: 981px;
    margin: 0 auto;
    padding-top: 54px;
    overflow: hidden;
}
.gift-lb li {
    width: 297px;
    height: 175px;
    float: left;
    background: url(../assets/img/gift-lb.png) no-repeat;
    margin: 15px;
}
.gift-way {
    margin: 24px;
}
.game-gift-name {
    color: #884e4d;
    width: 100%;
    margin-bottom: 6px;
    display: block;
    line-height: 25px;
    font-size: 18px;
    overflow: hidden;
    font-weight: bold;
}
.info {
    height: 48px;
    line-height: 20px;
    overflow: hidden;
    color: #927372;
}
.surplus {
    position: relative;
    margin-top: 10px;
    color: #b69e8b;
    line-height: 35px;
}
.ling-gift-btn {
    position: absolute;
    top: 0;
    right: 0;
    background: url(../assets/img/ling-gift-btn.png) no-repeat;
    font-size: 14px;
    display: block;
    color: #fff;
    text-align: center;
    line-height: 32px;
    height: 32px;
    border-radius: 3px;
    width: 84px;
}



</style>
