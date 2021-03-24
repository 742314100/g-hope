<template>
  <div id="app">
    <div class="download">
      <img src="../assets/img/ewm.png" height=127>
      <div class="download-img">
        <a href="javascript:alert('敬请期待')"></a>
        <a href="https://package.693975.com/shouyou/1478mrxzgwb/1478mrxzgwb_1002.apk"></a>
      </div>
    </div>
    <div class="bottom">
      <div class="main">
        <div class="mr-bt-top">
          <div class="news" >
            <div>
              <div class="news-tab">
                <a :class="cur == index ? 'cur':''" href="javascript:;" @click="switchNav('zx')" @mouseover="changebg(index)"  v-for="(item,index) in swiperNews" :key="index">
                  {{item.title}}</a>
              </div>
              <div class="swiper-news">
                <el-carousel height="240px" direction="vertical" :autoplay="false" ref="carousel" indicator-position="outside" >
                    <el-carousel-item v-for="(item,index) in swiperNews" :key="index">
                      <p class="recommend" v-for="(item1,index1) in item.content" :key="index1">
                        <a @click="detail(item1)">{{item1}}</a>
                      </p>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
          <div class="banner-box">
              <div class="swiper-banner">
                <el-carousel height="287px" :autoplay="false">
                  <el-carousel-item v-for="(item,index) in swiperNewsImg" :key="index">
                    <img :src="item">
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
        </div>
        <div class="five-img">
          <div class="swiper-fimg">
            <el-carousel height="388px" :autoplay="false">
              <el-carousel-item v-for="(item,index) in bottomSwiperImg" :key="index">
                <img :src="item">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHomeSwiperList } from "../api/homeSwiperList";
export default {
  name: 'App',
  data(){
    return {
      cur:0,
      swiperNews:[
                    {"title":"最新资讯",
                      "content":[
                                  {"new_content":"[最新] 《末日血战》3月10日停服更新公告"},
                                  {"new_content":"《末日血战》闪断更新公告"},
                                  {"new_content":"《末日血战》合服公告（s136-s145）"},
                                  {"new_content":"《末日血战》2021年名人堂第二期，s100大神..."},
                                  {"new_content":"《末日血战》“金牛贺岁”春节限时活动"},
                                  {"new_content":"《末日血战》2月4日停服更新"}
                                ]
                    },
                    {"title":"公告",
                      "content":[
                                  {"new_content":"[最新] 《末日血战》3月10日停服更新公告"},
                                  {"new_content":"《末日血战》闪断更新公告"},
                                  {"new_content":"《末日血战》合服公告（s136-s145）"},
                                  {"new_content":"《末日血战》2月4日停服更新"},
                                  {"new_content":"《末日血战》1月28日停服更新公告"},
                                  {"new_content":"《末日血战》1月14日停服更新公告"}
                                ]
                    },
                    {"title":"活动",
                      "content":[
                                  {"new_content":"[最新] 《末日血战》2021年名人堂第二期，s100大神..."},
                                  {"new_content":"《末日血战》“金牛贺岁”春节限时活"},
                                  {"new_content":"《末日血战》2021年名人堂第一期——尼古拉..."},
                                  {"new_content":"《末日血战》名人堂第七期——s82黑龙1982"},
                                  {"new_content":"《末日血战》黑水晶活动"},
                                  {"new_content":"《末日血战》名人堂第六期——s102去征服"}
                                ]
                    },
                    {"title":"攻略",
                      "content":[
                                  {"new_content":"[最新] 《末日血战》英雄强度排行榜"},
                                  {"new_content":"《末日血战》英雄攻略-玛瑟伊尔"},
                                  {"new_content":"《末日血战》英雄攻略-墨绯斯脱"},
                                  {"new_content":"《末日血战》英雄攻略-维塔斯博士"},
                                  {"new_content":"《末日血战》英雄攻略-德拉卡"},
                                  {"new_content":"《末日血战》英雄攻略-拦路者"}
                                ]
                    }
                  ],
      swiperNewsImg:[
                      "//staticres.huangxiu1.com//resource/mrxz/h007/h47/img202012101613560.jpg",
                      "//staticres.huangxiu1.com//resource/mrxz/h007/h44/img202011121840550.jpg",
                      "//staticres.huangxiu1.com//resource/mrxz/h007/h41/img202010151424150.jpg",
                      "//staticres.huangxiu1.com//resource/mrxz/h007/h39/img202009181903490.jpg",
                      "//staticres.huangxiu1.com//resource/mrxz/h007/h65/img202102241434100.jpg"
                    ],
      bottomSwiperImg:[
                        "//staticres.huangxiu1.com//resource/mrxz/h007/h30/img202004021631230.jpg",
                        "//staticres.huangxiu1.com//resource/mrxz/h007/h30/img202004021633010.jpg",
                        "//staticres.huangxiu1.com//resource/mrxz/h007/h30/img202004021632460.jpg",
                        "//staticres.huangxiu1.com//resource/mrxz/h007/h30/img202004021632270.jpg",
                        "//staticres.huangxiu1.com//resource/mrxz/h007/h30/img202004021632080.jpg",
                        "//staticres.huangxiu1.com//resource/mrxz/h007/h30/img202004021631230.jpg",
                        "//staticres.huangxiu1.com//resource/mrxz/h007/h30/img202004021633010.jpg"
                      ]

    }
  },
  components: {

  },
  methods:{
    changebg(index){
      this.cur = index;
      this.$refs.carousel.setActiveItem(index);
    },
    switchNav(str){
      console.log(str);
    },
    getSwiperList(){
      getHomeSwiperList().then(res => {
        console.log(res.data.data)
        this.swiperNews=res.data.data;
      });
    },
    detail(item){
      console.log(item);
      this.$router.push('/detail');
    }
  },
  mounted() {
    this.getSwiperList();
  },
  computed: {},

}
</script>

<style scoped>

.download{
  display: flex;
  position: absolute;
  top: 550px;
  right: 500px;
}
.download-img{
  height:127px;
  width:168px;
  margin-left: 10px;
  background: url(../assets/img/download-btn.png) no-repeat;
}
.download-img a{
  display: inline-block;
  height: 60px;
  width: 100%;
}
.bottom{
  background: url(../assets/img/mr-bottom.jpg) top center no-repeat;
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
    background: url(../assets/img/cur.png) no-repeat;
    color: #fff;
}
.swiper-news {
    width: 400px;
    overflow: hidden;
    margin-left: 22px;
    float: left;
    height: 240px;
}

.recommend{
  width: 100%;

  text-align: center;
  margin: 8px 0 4px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
}
.recommend:first-child a {
    height: 38px;
    line-height: 38px;
    color: #9f3734;
    font-size: 18px;
    font-weight: bold;
}
.recommend a {
    color: #000;
    font-size: 16px;
    line-height: 25px;
    cursor:pointer;
}
.news-info{
    color: #8a645d;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 400px;
    height:35px;
    font-size:16px;
    text-align: left;
}
.news-info a{
  color: #8a645d;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 340px;
  display: inline-block;

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
.five-img {
    height: 430px;
    position: absolute;
    top: 500px;
    left: 0;
    width: 100%;
}
.five-img {
    height: 430px;
    position: absolute;
    top: 500px;
    left: 0;
    width: 100%;
}

</style>
