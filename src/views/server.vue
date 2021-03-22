<template>
  <div id="app">
    <div class="kfMain">
			    <div class="kfTop">
				    <a href="javascript:;" class="act">常见功能</a>
				    <a href="javascript:alert('敬请期待~');">自助服务</a>
				</div>
				<div class="kfDh">
				    <!------公众号------->
				    <div class="accountBox">
					    <a href="javascript:;" class="qqBtn">QQ公众号</a>
					    <a href="javascript:;" class="wxBtn">微信公众号</a>
					</div>

					<!------四大问题------->
				    <div class="fourProblem">
					    <a href="http://mrxz.huangxiu1.com/bdss">被盗申诉</a>
					    <a href="http://mrxz.huangxiu1.com/czwt">充值问题</a>
						<a href="javascript:alert('敬请期待~');">外挂举报</a>
					    <a href="javascript:alert('敬请期待~');">常见问题</a>
					</div>

					<!------底部三个问题------->
				    <div class="threeProblem">
					    <a href="http://mrxz.huangxiu1.com/tcjy">提出建议</a>
						<a href="http://mrxz.huangxiu1.com/tsqd">投诉渠道</a>
					    <a href="http://mrxz.huangxiu1.com/wtcx">我的问题</a>
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
.kfMain {
    width: 1100px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}
.kfTop {
    width: 100%;
    line-height: 40px;
    text-align: right;
}
.kfDh {
    background: url(../assets/img/kfDh.png) no-repeat;
    width: 1100px;
    height: 440px;
    position: relative;
}
.kfTop a.act {
    color: #EB0B0F;
    font-weight: bold;
    border-bottom: 2px solid #eb0b0f;
    padding-bottom: 2px;
}
.kfTop a {
    color: #333;
    font-size: 16px;
    margin-left: 15px;
}
.accountBox {
    width: 120px;
    position: absolute;
    top: 205px;
    left: 120px;
}
.fourProblem {
    position: absolute;
    top: 0;
    right: 0;
    width: 740px;
}
.kfDh {
    background: url(../assets/img/kfDh.png) no-repeat;
    width: 1100px;
    height: 440px;
    position: relative;
}
.accountBox a, .fourProblem a, .threeProblem a, .kfBoxNav a {
    overflow: hidden;
    text-indent: -9999px;
}
.accountBox a, .fourProblem a, .threeProblem a, .kfBoxNav a {
    overflow: hidden;
    text-indent: -9999px;
}
.fourProblem a {
    float: left;
    margin-left: 10px;
    margin-bottom: 10px;
    width: 360px;
    height: 160px;
}
.threeProblem a {
    float: left;
    height: 100px;
    margin: 0 5px;
    width: 356px;
}



</style>
