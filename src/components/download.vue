<template>
  <div id="app">
    <div class="rt-xz">
        <img src="//staticres.huangxiu1.com/static/mrxz/img/ewm.png" class="download-ewm download_qcode">
        <div class="download-btn">
            <a href="javascript:alert('敬请期待');" class="download-ios ios_pc">苹果下载</a>
            <a href="https://package.693975.com/shouyou/1478mrxzgwb/1478mrxzgwb_1002.apk" class="download-android android_pc">安卓下载</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {

    }
  },


}
</script>

<style scoped>
.rt-xz {

    width: 168px;
    position: fixed;
    right: 32px;
    top: 50%;
    margin-top: -157px;
    padding: 15px 13px;
}
.rt-xz .download-ewm {
    width: 168px;
    height: 168px;
    margin-bottom: 14px;
}
.download-btn {
    float: right;
    width: 168px;
    height: 127px;
}
.download-btn .download-ios {
    margin-bottom: 7px;
}
.download-btn .download-android {
    background-position: 0 -68px;
}
.download-btn a {
    height: 60px;
    width: 100%;
    background: url(../assets/img/download-btn.png) no-repeat;
    float: left;
    overflow: hidden;
    text-indent: -9999px;
}



</style>
