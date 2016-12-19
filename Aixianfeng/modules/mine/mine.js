define(["text!./mine.html", "$css!css/mine.css"], function(minePage){
	return{
			init:function(){
				//if($(".mine_a").children().size()>0)return;
				$(".mine_a").html(minePage).show().siblings("div").hide();
			}
		}
	
});