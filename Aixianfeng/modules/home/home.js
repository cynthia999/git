define(["text!./home.html", "$css!css/home.css", "js/swiper.min.js", "$css!css/swiper.min.css", "js/baiduTemplate.js", "js/common.js", "js/jquery.fly.min.js"], function(homePage) {
	return {
		init: function() {
			//if($(".home_a").children().size()>0)return;
			$(".home_a").html(homePage).show().siblings("div").hide();
		},
		//请求轮播图数据
		lunbo: function() {
			postRequest("GET", "banner.json", true, {
				name: "phone"
			}, function(responseData) {
				$("#banner_1").load("templates/banner.html", function() {
					var htmlStr = baidu.template("bannerTmp", responseData);
					$("#banner_1").html(htmlStr);
					var mySwiper = new Swiper('.swiper-container', {
						autoplay: 2000, //可选选项，自动滑动(时间:毫秒)
						loop: true, //循环
						pagination: '.swiper-pagination', //分页器
					})
				})
			})
		},
		//获取优选水果数据
		shuju: function() {
				postRequest("GET", "fruit.json", true, {
					name: "phone"
				}, function(responseData) {
					$("#price_1").load("templates/fruit.html", function() {
						var htmlStr = baidu.template("fruitTmp", responseData);
						$("#price_1").html(htmlStr);
					})
				});

				postRequest("GET", "fruit.json", true, {
					name: "phone"
				}, function(responseData) {
					$("#milk_1").load("templates/milk.html", function() {
						var htmlStr = baidu.template("milkTmp", responseData);
						$("#milk_1").html(htmlStr);
						for (var n = 0; n < $("#milk_1 b").length; n++) {
							//console.log($("#milk_1 b").eq(n).html().length);
							if ($("#milk_1 b").eq(n).html().length < 16) {
								$("#milk_1 b").eq(n).hide();
							}
						}
					})
				});

				postRequest("GET", "fruit.json", true, {
						name: "hotfood"
					},
					function(responseData) {
						$("#hotfood_1").load("templates/hotfood.html", function() {
							var htmlStr = baidu.template("hotTmp", responseData);
							$("#hotfood_1").html(htmlStr);
						})
					});

				postRequest("GET", "fruit.json", true, {
						name: "hotfood"
					},
					function(responseData) {
						$("#home_drink").load("templates/drink.html", function() {
							var htmlStr = baidu.template("drinkTmp", responseData);
							$("#home_drink").html(htmlStr);
						})
					});

				postRequest("GET", "fruit.json", true, {
						name: "hotfood"
					},
					function(responseData) {
						$("#home_lingshi").load("templates/lingshi.html", function() {
							var htmlStr = baidu.template("lingshiTmp", responseData);
							$("#home_lingshi").html(htmlStr);
						})
					});

				postRequest("GET", "fruit.json", true, {
						name: "hotfood"
					},
					function(responseData) {
						$("#home_sushi").load("templates/sushi.html", function() {
							var htmlStr = baidu.template("sushiTmp", responseData);
							$("#home_sushi").html(htmlStr);
							//商品飞入购物车

							var offset = $("#end").offset();
							$(function() {
								if (localStorage.count > 0) {
									$("#count").html(localStorage.count);
									$("#count").show();
								}else{
									$("#count").hide();
								}
							})

							$(".addcar").click(function(event) {
								var addcar = $(this);
								var img = addcar.parent().find('img').attr('src');
								var flyer = $('<img class="u-flyer" src="' + img + '" style="border-radius:50%">');
								var id=$(this).parent();
								console.log(id);
								$(".footer_a span").show();
								flyer.fly({
									start: {
										left: event.clientX, //开始位置（必填）#fly元素会被设置成position: fixed 
										top: event.clientY //开始位置（必填） 
									},
									end: {
										left: offset.left + 10, //结束位置（必填） 
										top: offset.top + 10, //结束位置（必填） 
										width: 0, //结束时宽度 
										height: 0 //结束时高度                
									}

								});

								if (typeof Storage !== "undefined") {
									//存count数据
									localStorage.count ? (localStorage.count = parseInt(localStorage.count) + 1) : localStorage.count = 1;
								localStorage.list=$(this).parent().html();
								console.log(localStorage.list);
									$("#count").html(localStorage.count);
								} else {
									console.log("您的浏览器不支持本地存储");
								}
							});



						})
					});
			}
			/*--------------------------------------------------------------------*/




	}
});