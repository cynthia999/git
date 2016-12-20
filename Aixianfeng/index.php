<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wx6dd9934f43cae490", "7a3207104c06ab936cd88fe80ede9cd2");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name = "viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
		<script src=" https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
		<script data-main ="app.js" type="text/javascript" src = "js/require.js"></script>
		<title></title>
		<style>
			*{
				margin:0;
				padding:0;
				box-sizing:border-box;
			}
			html{
				font-size:100px;
			}
			body{	
				font-family:微软雅黑,microsoft yahei;
				font-size:16px;
				width: 100%;
			}
			a{
				text-decoration:none;
				color:#777777;
			}
			img{
				border:none;	
				}			
			.footer_a img{
					width:25%;
					height: 0.22rem;
				}
			.footer_a{
				display: flex;
				width: 100%;
				position: fixed;
				bottom: 0;
				background: #f5f5f5;
			}
			.footer_a figure{
				flex: 1;
				text-align: center;
				margin: 0.06rem 0 0.06rem 0;
				color: #777777;
			}
			.footer_a span{
					display: block;
					/*display: none;*/
					height: 0.18rem;
					line-height:0.18rem;
					text-align: center;
					width: 0.18rem;
					border-radius: 50%;
					background: red;
					color:#fff;
					position: absolute;
					right:30%;
					bottom:65%;
					font-size: 0.14rem;
				}
			.footer_a figure:nth-child(3){
				position: relative;
			}
			.k{
				height: 0.5rem;
			}
		</style>
	</head>
	<body>	
			<!-- <button onclick="getLocation()">获取地理位置</button>
			<button onclick="getPosition()">查看位置</button>	 -->
			 <div class="main_a">
				<div class = "home_a"></div>
				<div class = "market_a"></div>
				<div class = "order_a"></div>
				<div class = "mine_a"></div>
			</div>
			<div class="k"></div>
			<div class="footer_a">
			<figure>
				<img src="img/f1.png" alt="" />
				<p><a href="#home_a" onclick="getLocation()" >首页</a></p>
			</figure>
			<figure>
				<img src="img/f2.png" alt="" />
				<p><a href="#market_a" onclick="getPosition()" >闪送超市</a></p>
			</figure>
			<figure>
				<img src="img/f3.png" alt="" id="end"/>
				<p><a href="#order_a">购物车</a></p>
				<span id="count"></span>
			</figure>
			<figure>
				<img src="img/f4.png" alt="" />
				<p><a href="#mine_a">我的</a></p>
			</figure>
					</div> 
	</body>
	<!--<script type="text/javascript">
		(function(window){
		    var winW=document.documentElement.clientWidth||document.body.clientWidth;
		    document.documentElement.style.fontSize=winW/10+"px";
		    window.onresize=function(){
		        var winW=document.documentElement.clientWidth||document.body.clientWidth;
		        document.documentElement.style.fontSize=winW/10+"px";
		    }
		})(window);
	</script>-->
	<script>


		wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
     jsApiList: [
     		'checkJsApi',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'

     ]
  });



function getLocation(){
	wx.getLocation({
    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    success: function (res) {
         latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
         longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        var speed = res.speed; // 速度，以米/每秒计
        var accuracy = res.accuracy; // 位置精度       
        alert('经度'+longitude);
        alert('纬度'+latitude);
    }
});
}
	var latitude=0;
	var longitude=0;
	function getPosition(){
	wx.openLocation({
    latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
    longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
    name: '', // 位置名
    address: '', // 地址详情说明
    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
});
	}
	</script>
</html>
