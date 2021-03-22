<template>
  <div id="app">
    <div class="cyou_bottom" id="cyou_bottom">
      <table class="cyou_bottom_wraper">
        <tbody>
          <tr>
            <td class="cyou_bottom_cont">
              <p>
                <a href="javascript:;">重庆煌秀信息技术有限公司</a>
                <a href="javascript:;">增值电信业务经营许可证</a>
                <a href="http://www.beian.miit.gov.cn/">渝ICP备19001951号-2</a>
                <a href="javascript:;">渝网文[2019]1560-056号</a>
                 重庆市璧山区璧城街道璧渝路179号1幢1单元4-1
              </p>
              <p>游戏健康忠告:抵制不良游戏,拒绝盗版游戏。注意自我保护,谨防受骗上当。适度游戏益脑,沉迷游戏伤身。合理安排时间,享受健康生活。</p>
              <div class="footer-right">
                <a class="footer-ico footer-ico-4" target="_blank" href="http://scjgj.cq.gov.cn/" rel="nofollow">重庆工商</a>
                <a class="footer-ico footer-ico-1" target="_blank" rel="nofollow" href="http://gaj.cq.gov.cn"></a>
                <a class="footer-ico footer-ico-6" rel="nofollow" href="javascript:;" target="_self"></a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
.cyou_bottom {
    float: left;
    width: 100%;
    min-width: 1100px;
    height: 210px;
    padding: 30px 0;
    zoom: 1;
    background-color: #1D1719;
}
.cyou_bottom .cyou_bottom_wraper {
    border: none;
    border-collapse: collapse;
    padding: 0;
    margin: 0 auto;
}
.cyou_bottom .cyou_bottom_wraper td {
    height: 77px;
    vertical-align: middle;
}
.cyou_bottom .cyou_bottom_cont {
    text-align: left;
    padding: 0 10px;
}
.cyou_bottom .cyou_bottom_cont p {
    text-align: center;
    line-height: 26px;
    color: #999;
    white-space: nowrap;
}
.cyou_bottom .footer-right {
    width: 280px;
    height: 52px;
    margin: 0 auto;
    margin-bottom: 40px;
    padding-top: 20px;
}
.cyou_bottom .cyou_bottom_cont a, .footer-right a {
    color: #8e8e8e;
    text-decoration: none;
    margin-right: 10px;
}
.cyou_bottom .cyou_bottom_cont a, .footer-right a {
    color: #8e8e8e;
    text-decoration: none;
    margin-right: 10px;
}
.cyou_bottom .footer-ico-4 {
    height: 47px;
    background: url(http://image.tanwan.com/platform/2018/img/JiangxiCommerce.png) center 0 no-repeat;
    text-align: center;
    color: #000;
    line-height: 90px;
}
.cyou_bottom .footer-ico {
    background: url(//staticres.huangxiu1.com/imgCommon/footer-ico_v2.png) no-repeat 0 0;
    height: 51px;
    width: 54px;
    display: inline-block;
    margin-right: 10px;
    vertical-align: middle;
    position: static;
}
#cyou_bottom .footer-ico-6 {
    background: url(//staticres.huangxiu1.com/imgCommon/teenager.png) no-repeat 0 0;
}
#cyou_bottom .footer-ico-1 {
    width: 42px;
}
#cyou_bottom .footer-ico-4 {
    height: 47px;
    background: url(http://image.tanwan.com/platform/2018/img/JiangxiCommerce.png) center 0 no-repeat;
    text-align: center;
    color: #000;
    line-height: 90px;
}
#cyou_bottom .cyou_bottom_cont a, .footer-right a {
    color: #8e8e8e;
    text-decoration: none;
    margin-right: 10px;
}
#cyou_bottom .cyou_bottom_cont a:hover {
    color: #484848;
}


</style>
