define(["backbone"], function(Backbone){
	var Router = Backbone.Router.extend({
		routes:{
			home_a: "home",
			market_a: "market",
			order_a: "order",
			mine_a: "mine",
			"":"home"
		},
		home: function(){
			require(["modules/home/home.js"],function(home){
				home.init();				
				home.lunbo();
				home.shuju();
			});
		},
		market: function(){
			require(["modules/market/market.js"],function(market){
				market.init();
				market.marketLeft();
				market.marketRight();
//				market.lazy();
			});
		},
		order: function(){
			require(["modules/order/order.js"],function(order){
				order.init();
				order.cart();
			});
		},
		mine: function(){
			require(["modules/mine/mine.js"],function(mine){
				mine.init();
			});
		},
	});
	return new Router();
});