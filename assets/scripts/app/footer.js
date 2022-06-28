define(['jquery'], function($){
	var public = {
		initialise: function(){
			var date=new Date(),
         	year = date.getFullYear(),
        	text = year;
   			document.getElementById("copyright").innerHTML=text;
   		}
	};
	return public;
});