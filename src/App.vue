<template>
  <div id="app">
    <div class="bg">
      <Header></Header>
    </div>
    <router-view />
    <Footer />
    <Download v-show="downloadShow"/>
  </div>
</template>

<script>
import './assets/css/style.css'
import Header from './components/header'
import Footer from './components/footer'
import  Download from './components/download'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  data(){
    return {
      downloadShow:false
    }
  },
  components: {
      Header,
      Footer,
      Download
  },
  methods:{

  },
  mounted() {
    if(this.getTabIndex == 2){
      this.downloadShow=false;
    }else{
      this.downloadShow=true;
    }
  },
  computed:{
    ...mapGetters({
      getTabIndex:'getTabIndex'
    }),
  },
  watch: {
    getTabIndex (newVal) {
     if(newVal == 2){
        this.downloadShow=false;
      }else{
        this.downloadShow=true;
      }
    }
  },
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

</style>
