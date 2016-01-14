var singlePage = (function(changeBody){
	var sp ={
	prevLocation : location.href,
	changeBody : changeBody,
	hashName : location.hash.substring(1),
	locationChange : function(){
		if(sp.prevLocation !== location.href){
			sp.hashLocation = location.href;
			sp.hashName = location.hash.substring(1);
			  $("#"+sp.changeBody).load(sp.hashName+".html",function(page,simpleStatus,petition){
			  	if(typeof petition !== "undefined" && petition.status != 200){
			  			$("#"+sp.changeBody).html("404 - No hay carton");
			  	}
			  });
		}
		
	}};
	$(window).bind('hashchange', sp.locationChange);
	return sp;
})("cmgbody");