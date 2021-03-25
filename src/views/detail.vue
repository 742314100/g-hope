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
        <div class="ny-nr" v-if="hasData">
						<div class="ny-nr-tit">
							<h3>{{details.title}}</h3>
							<p> {{details.time}}</p>
						</div>
						<div class="ny-nr-txt">
							亲爱的幸存者：<br>
                <p class='indent'>{{details.info}}</p>
                更新时间：{{details.updateTime}}<br>
                更新内容：<br>
                <p v-for="(item,index) in updateContent" :key="index">{{item}}</p>
                增强如下：<br>
                <p v-for="(item,index) in des" :key="index+999">{{item}}</p>
						</div>
				</div>
        <div else class="noData">还没造数据</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDetails } from '../api/details'
export default {
  name: 'App',
  data(){
    return {
      details:{},
      updateContent:[],
      des:[],
      curId:'',
      hasData:true
    }
  },
  components: {

  },
  methods:{
    getDetails(){
      getDetails({id:this.curId}).then(res => {
        this.details=res.data.data[0] || [];
        if(this.details.updateContent){
          this.updateContent=this.details.updateContent.split('&');
          this.des=this.details.des.split('&');
        }else{
          this.hasData=false;
        }
      });
    },
  },
  mounted() {
    this.curId=this.$route.query.curId;
    this.getDetails();
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
.noData{
  font-size:20px;
  color:rgb(233, 16, 27);
  text-align: center;
  margin:100px auto;
}



</style>
