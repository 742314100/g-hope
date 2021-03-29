<template>
  <div id="app">
    <div class="newsTab">
      <div class="news">
        <div class="ny-wrap">
          <div class="ny-top-tit">
            <div class="ny-top-name">
              <h3>最新资讯</h3>
              <span>/ NEWS</span>
            </div>
            <p>您的位置：<a>官网首页</a> &gt; 新闻中心</p>
          </div>
          <div class="ny-tab">
            <a :class="cur ==index ? 'cur':''" @click="tab(index)" v-for="(item,index) in newsList" :key="index">{{item.title}}</a>
					</div>
          <ul class="news-list">
            <li v-for="(item,index) in curNewsList" :key="index" @click="detail(index)">
							<span class="list-tit">{{item.tit}}</span>
							<div class="list-txt">
								<a>
									<h3>{{item.info}} </h3>
									<span>{{item.des}}</span>
								</a>
							</div>
            </li>
					</ul>
				</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getNewsList } from "../api/newsList";
export default {
  name: 'App',
  data(){
    return {
      cur:0,
      newsList:[],
      curNewsList:{}
    }
  },
  components: {

  },
  methods:{
    tab(i){
      this.cur=i;
      switch(i){
        case 0:
          this.curNewsList=this.newsList[0].content;
          break;
        case 1:
          this.curNewsList=this.newsList[1].content;
          break;
        case 2:
          this.curNewsList=this.newsList[2].content;
          break;
        case 3:
          this.curNewsList=this.newsList[3].content;
          break;
      }
    },
    getNewsList(){
      getNewsList().then(res => {
        this.newsList=res.data.data;
        if(this.getTabIndex == 0){
          this.cur=0;
          this.curNewsList=this.newsList[0].content;
        }else if(this.getTabIndex == 1){
          this.cur=3;
          this.curNewsList=this.newsList[3].content;
        }
      });
    },
    detail(i){
      let curId=this.cur*5+i; //这里 不定
      this.$router.push({
        path: '/detail',
        query: {
          curId: curId
        }});
    }
  },
  mounted() {
    this.getNewsList();
  },
  computed:{
    ...mapGetters({
      getTabIndex:'getTabIndex'
    }),
  },
  watch: {
    getTabIndex (newVal) {
     if(newVal == 0){
      this.cur=0;
      this.curNewsList=this.newsList[0].content;
    }else if(newVal == 1){
      this.cur=3;
      this.curNewsList=this.newsList[3].content;
    }
    }
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
.news .news-tab a.cur, .ny-tab a.cur {
  background: url(../assets/img/cur.png) no-repeat;
  color: #fff;
}
.ny-tab a {
  display: inline-block;
  width: 111px;
  height: 48px;
  color: #8e3432;
  font-size: 22px;
  line-height: 48px;
  margin: 0 10px;
  cursor: pointer;
}
.news-list li {
  border-bottom: 1px dashed #928576;
  padding: 10px 0 0 34px;
  width: 100%;
  float: left;
}
.list-tit {
  float: left;
  color: #884e4d;
  font-size: 18px;
  width: 74px;
}
.list-txt {
    width: 1020px;
    float: left;
    text-align: left;
}
.news-list li a {
    float: left;
    width: 100%;
}
.list-txt h3 {
    width: 100%;
    float: left;
    color: #884e4d;
    font-size: 18px;
    font-weight: normal;
}
.list-txt span {
    width: 100%;
    float: left;
    color: #927372;
    font-size: 16px;
    line-height: 24px;
    margin-top: 10px;
    height: 48px;
    overflow: hidden;
}

</style>
