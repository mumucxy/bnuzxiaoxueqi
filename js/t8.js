$(function(){
    $(".contain .left img").click(function(){
    	var type = $(this).data("type");
    	if(type == 0){
    		$(this).css("transform","translate(150px,140px)");	
        }else if(type == 1){
        	$(this).css("transform","translate(150px,0px)");	
        }
        else if(type == 2){
        	$(this).css("transform","translate(150px,-140px)");	
        }
        
        var arr = $(".contain .right img");
        var temp =$(arr[Math.floor(Math.random()*arr.length)]);
        var type2 = temp.data("type")
        if(type == 0){
    		$(this).css("transform","translate(150px,140px)");	
        }else if(type == 1){
        	$(this).css("transform","translate(150px,0px)");	
        }
        else if(type == 2){
        	$(this).css("transform","translate(150px,-140px)");	
        }
        var that =$(this);
        setTimeout(function(){
        	that.css("transform","translate(0px,0px)");
        	temp.css("transform","translate(0px,0px)")
        });
        
        var diff = type -type2;
        if(diff == 0){
        	$
        }
        
   });
});
