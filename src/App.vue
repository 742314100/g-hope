<template>
  <div id="app">
    <div class="bg">
      <Header></Header>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import './assets/css/style.css'
import Header from './components/header'
import Footer from './components/footer'

export default {
  name: 'App',
  data(){
    return {}
  },
  components: {
      Header,
      Footer
  },
  methods:{

  },
  mounted() {

  },
  computed: {

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
