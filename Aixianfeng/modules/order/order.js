
define(["text!./order.html", "$css!css/order.css","js/baiduTemplate.js", "js/common.js"], function(orderPage){
	return{
			init:function(){
				//if($(".order_a").children().size()>0)return;
				$(".order_a").html(orderPage).show().siblings("div").hide();
			},
			cart:function(){
				/*postRequest("GET", "fruit.json", true, {
					name: "phone"
				}, function(responseData) {
					$("#list_3").load("templates/fruit.html", function() {
						var htmlStr = baidu.template("fruitTmp", responseData);
						$("#list_3").html(htmlStr);
					})
				});*/
				$("#list_3").append(localStorage.list);
				
				
				
				
				
				$(function(){
							if (localStorage.count > 0) {
									$("#count").html(localStorage.count);
									$("#count").show();
								}else{
									$("#count").hide();
								}
						})
			}
			
			
			
		}
});