<template>
  <div id="app">
    <div class="bg">
      <div class="top">
        <div class="tab">
          <div>新闻信息</div>
          <div>游戏攻略</div>
          <div><img src="./assets/img/logo.png" height=80></div>
          <div>礼包领取</div>
          <div>客服中心</div>
        </div>
        <div class="login">登录</div>
      </div>
      <div class="download">
        <img src="./assets/img/ewm.png" height=127>
        <div class="download-img">
          <a href="javascript:alert('敬请期待')"></a>
          <a href="https://package.693975.com/shouyou/1478mrxzgwb/1478mrxzgwb_1002.apk"></a>
        </div>

      </div>
    </div>
    <div class="bottom">
      <div class="main">
        <div class="mr-bt-top">
          <div class="news">
            <div class="news-tab">
              <a :class="cur == 0 ? 'cur':''" href="javascript:;" @click="switchNav('zx')" @mouseover="changebg(0)">最新资讯</a>
              <a :class="cur == 1 ? 'cur':''" href="javascript:;" @click="switchNav('gg')" @mouseover="changebg(1)">公告</a>
              <a :class="cur == 2 ? 'cur':''" href="javascript:;" @click="switchNav('hd')" @mouseover="changebg(2)">活动</a>
              <a :class="cur == 3 ? 'cur':''" href="javascript:;" @click="switchNav('gba')" @mouseover="changebg(3)">攻略</a>
            </div>
            <div class="swiper-news">
              <swiper class="swiper" :options="swiperOptions" ref="mySwiper">
                <swiper-slide>
                  <p class="recommend" style="text-align: left;"><a href="//mrxz.huangxiu1.com/gg/144015.html">[最新] 《末日血战》闪断更新公告</a></p>
                  <p class="news-info">
                    <span>03/02</span>
                    <a href="//mrxz.huangxiu1.com/gg/143944.html">《末日血战》合服公告（s136-s145）</a>
                  </p>
                  <p class="news-info">
                    <span>03/02</span>
                    <a href="https://mp.weixin.qq.com/s/Q1x1n0tNAON4-4_eN-VqwA">《末日血战》2021年名人堂第二期，s100大神...</a>
                  </p>
                </swiper-slide>
                <swiper-slide>
                  <p class="recommend" style="text-align: left;"><a href="//mrxz.huangxiu1.com/gg/144015.html">[最新] 《末日血战》闪断更新公告</a></p>
                  <p class="news-info">
                    <span>03/01</span>
                    <a href="//mrxz.huangxiu1.com/gg/143944.html">《末日血战》合服公告（s136-s145）</a>
                  </p>
                  <p class="news-info">
                    <span>03/03</span>
                    <a href="https://mp.weixin.qq.com/s/Q1x1n0tNAON4-4_eN-VqwA">《末日血战》2021年名人堂第二期，s100大神...</a>
                  </p>
                </swiper-slide>
                <swiper-slide>31111111111</swiper-slide>
                <swiper-slide>44444444444444</swiper-slide>
              </swiper>

						</div>

          </div>
          <div class="banner-box">
              <div class="swiper-banner">
                <swiper class="swiper" :options="swiperOptions1">
                  <swiper-slide>
                    <a href="//mrxz.huangxiu1.com/hd/141118.html">
											<img src="//staticres.huangxiu1.com//resource/mrxz/h007/h59/img202101142149460.jpeg" alt="">
										</a>
                  </swiper-slide>
                  <swiper-slide>
                    <a href="//mrxz.huangxiu1.com/hd/141118.html">
											<img src="//staticres.huangxiu1.com//resource/mrxz/h007/h59/img202101142149460.jpeg" alt="">
										</a>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import './assets/css/style.css'

import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css'

export default {
  name: 'App',
  data(){
    return {
      cur:0,
      swiperOptions: {
        direction: "vertical",
        pagination:{         //分页器
            el:'.swiper-pagination',
            clickable:true
        },
        loop:true,     //循环
        autoplay:{      //自动播放
            delay:1500,
            disableOnInteraction:false
        },
        speed:1500
      },
      swiperOptions1: {
        pagination:{         //分页器
            el:'.swiper-pagination',
            clickable:true
        },
        loop:true,     //循环
        autoplay:{      //自动播放
            delay:1500,
            disableOnInteraction:false
        },
        speed:1500
      }

    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods:{
    changebg(index){
      this.cur = index;
      this.swiper.slideTo(index, 1000, false);
      console.log(index)
    },
    switchNav(str){
      console.log(str);
    }
  },
  mounted() {

  },
  computed:{
    swiper(){
      return this.$refs.mySwiper.$swiper
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.bg{
  width:100%;
  height: 750px;
  background:url(./assets/img/mr-top.jpg) no-repeat 100%;
}
.top{
  margin:0 auto;
}
.tab{
  margin:0 auto;
  width:800px;
  display: flex;
  justify-content: space-around;
  color:#fff;
  font-size:16px;
  line-height: 100px;
}
.tab div{
  cursor: pointer;
}
.login{
  position:absolute;
  color:#fff;
  font-size:16px;
  right:100px;
  top:40px;
}
.download{
  display: flex;
  position: absolute;
  top: 550px;
  right: 500px;
}
.download-img{
  height:127px;
  width:168px;
  background: url(./assets/img/download-btn.png) no-repeat;
}
.download-img a{
  display: inline-block;
  height: 60px;
  width: 100%;
}
.bottom{
  background: url(./assets/img/mr-bottom.jpg) top center no-repeat;
}
.main{
  height: 1152px;
  width:1200px;
  margin:0 auto;
  position: relative;
}
.mr-bt-top {
  width: 1119px;
  height: 287px;
  position: absolute;
  left: 32px;
  top: 54px;
}
.news {
  float: left;
  height: 287px;
  width: 534px;
}
.news-tab{
  width: 111px;
  padding-top: 17px;
  overflow: hidden;
  float: left;
  height: 270px;
}
.news-tab a{
  width: 100%;
  height: 48px;
  text-align: center;
  line-height: 48px;
  color: #472525;
  font-size: 14px;
  float: left;
}
.news .news-tab a.cur, .ny-tab a.cur {
    background: url(./assets/img/cur.png) no-repeat;
    color: #fff;
}
.swiper-news {
    width: 400px;
    overflow: hidden;
    margin-left: 22px;
    float: left;
    height: 240px;
}
.swiper-slide{
  width: 400px;
  height: 240px;
}
.swiper-slide .recommend{
  width: 100%;
  height: 38px;
  line-height: 38px;
  text-align: center;
  margin: 8px 0 4px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.swiper-news .recommend a {
    color: #9f3734;
    font-size: 18px;
    font-weight: bold;
}
.news-info{
    color: #8a645d;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 400px;
    height:35px;
    font-size:16px;
}
.news-info a{
  color: #8a645d;
  float: left;
}
.news-info span{
  float:right;
  font-size:16px;
}
.banner-box {
    width: 505px;
    height: 287px;
    float: right;
    position: relative;
}
.banner-box .swiper-banner {
    width: 505px;
    height: 287px;
    overflow: hidden;
}
</style>
