<template>
  <div id="app">
    <div class="top">
        <div class="tab">
          <div @click="tab(index)" v-for="(item,index) in tabContent" :key="index">
            <img src="../assets/img/logo.png" height=80 v-show="index == 2">
            <span v-show="index != 2">{{item}}</span>
          </div>
        </div>
        <div class="login">登录</div>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'App',
  data(){
    return {
      tabContent:['新闻信息','游戏攻略','','礼包领取','客服中心'],
    }
  },
  methods:{
    ...mapActions({
      setTabIndex:'setTabIndex'
    }),
    tab(i){
      switch(i){
        case 0:
          this.$router.push('/news');
          this.setTabIndex(0);
          break;
        case 1:
          this.$router.push('/news');
          this.setTabIndex(1);
          break;
        case 2:
          this.$router.push('/');
          this.setTabIndex(2);
          break;
        case 3:
          this.$router.push('/giftCenter');
          this.setTabIndex(3);
          break;
        case 4:
          this.$router.push('/server');
          this.setTabIndex(4);
          break;
      }
    }

  },
  mounted() {

  },
  computed: {

  }

}
</script>

<style scoped>
.bg{
  width:100%;
  height: 750px;
  background:url(../assets/img/mr-top.jpg) no-repeat 100%;
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

</style>
