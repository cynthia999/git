define(["text!./market.html", "$css!css/market.css", "js/baiduTemplate.js", "js/common.js", "js/jquery.lazyload.min.js", "js/jquery.fly.min.js"], function(marketPage) {
	return {
		init: function() {
			//if($(".market_a").children().size()>0)return;
			$(".market_a").html(marketPage).show().siblings("div").hide();

		},
		//闪送超市 左侧
		marketLeft: function() {
			postRequest("GET", "market.json", true, {
					name: "hotfood"
				},
				function(responseData) {
					$("#left_2").load("templates/market_left.html", function() {
						var htmlStr = baidu.template("marketTmp1", responseData);
						$("#left_2").html(htmlStr);
						$("#left_2 ul").on("click", "li", function() {
							$("li span").hide();
							$(this).children().show();
							/*	if($(this).attr("index1")==$("#list_2 figure").attr("index2")){
									$("#list_2 figure").show();
								}*/
							/*dianji();*/

						})
					})
				})
		},
		marketRight: function() {
			postRequest("GET", "market.json", true, {
					name: "hotfood"
				},
				function(responseData) {
					$("#list_2").load("templates/market_right.html", function() {
						var htmlStr = baidu.template("marketTmp2", responseData);
						$("#list_2").html(htmlStr);
						$("#list_2 figure[index2=104749]").show();
						//console.log($("#list_2 figure").attr("index2","104749"));
						$("#left_2 ul").on("click", "li", function() {
								$("#list_2 figure").hide();
								var i = $(this).index();
								for (var n = 0; n < $("#list_2 figure").length; n++) {
									//console.log("000");				
									if ($("#list_2 figure").eq(n).attr("index2") == $("#left_2 li").eq(i).attr("index1")) {
										//console.log("1111");							
										$("#list_2 figure").eq(n).show();
										//							console.log($("#list_2 figure").eq(n).attr("index2"));
										//							console.log($("#left_2 li").eq(i).attr("index1"));
									}
								}

							})
							//懒加载
						$(function() {
							$("img.lazy").lazyload({
								container: $(".list_2")
							});
						});

						/*if(typeof Storage !== "undefined"){
								$(".addcar").on("click",function(){
									//存count数据
									localStorage.count? (localStorage.count=parseInt(localStorage.count)+1):localStorage.count=1;
								})
							}else{
								console.log("您的浏览器不支持本地存储");
							}*/
						//商品加入购物车
						var offset = $("#end").offset();
						// var count = localStorage.count;
						//当数量大于零的时候，购物车数量一直显示
						$(function(){
							if (localStorage.count > 0) {
									$("#count").html(localStorage.count);
									$("#count").show();
								}else{
									$("#count").hide();
								}
						})
						$(".addcar").click(function(event) {
							console.log(1);
							var addcar = $(this);
							var img = addcar.parent().find('img').attr('src');
							var flyer = $('<img class="u-flyer" src="' + img + '" style="border-radius:50%">');
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
							/*count++;*/

							if (typeof Storage !== "undefined") {
								//存count数据
								localStorage.count ? (localStorage.count = parseInt(localStorage.count) + 1) : localStorage.count = 1;
								
								$("#count").html(localStorage.count);

							} else {
								console.log("您的浏览器不支持本地存储");
							}
						});
					})
				})
		}



	}

});