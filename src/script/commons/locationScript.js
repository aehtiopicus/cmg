var cmg = {
	locationScript : (function(changeBody,homePage){
		var sp = {
			prevLocation : location.href,
			changeBody : changeBody,
			hashName : location.hash.substring(1),	
			locationChange : function(){				
				if(location.hash.substring(1) !== "location" &&sp.prevLocation !== location.href){
					sp.prevLocation = location.href;
					sp.hashName = location.hash.substring(1);			
					if(sp.hashName.length == 0){
						sp.hashName = homePage;
					};
					newPath = "html/"+sp.hashName+".html";
					$("#"+sp.changeBody).load(newPath,function(page,simpleStatus,petition){
			  			if(typeof petition !== "undefined" && petition.status != 200){
			  				$("#"+sp.changeBody).html("404 - No hay carton");
			  			}
			  		});
				}		
			},
			home : function(){
				$("<a href='#'></a>")[0].click();
			}
		};
	sp.home();
	$(window).bind('hashchange', sp.locationChange);
	
	return sp;
	})("cmgbody","home")
};