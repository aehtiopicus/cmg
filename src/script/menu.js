
cmg.cmgMenu = (function(){

var menu = {
	menuItems : $("#cssmenu >ul li"),
	bindMenu : function(){
		$.each($(menu.menuItems),function(index,component){
			$(component).on("click",function(){
				$(menu.menuItems).removeClass("active");
				$(this).addClass("active");
			});
		});
	}
}

menu.bindMenu();
return menu;
})();



	var nuskinPm = (function(iframeData){

	  var pm = {};
	  pm.parentUrl = iframeData.iframeServer;
	  pm.iframeId = "#"+iframeData.iframeId;  
	  
	  pm.sendMessage = function(message){
	    $(pm.iframeId)[0].contentWindow.postMessage(message,pm.parentUrl);
	  };

	  pm.callback = function(data){
	    var response = data.data;
	    response.origin = data.origin;
	    if(!_.isUndefined(response) && !_.isUndefined(response.status) && response.status == 200){
	    	
	    	if(typeof pm.communicationFn === "function"){
	     	 	pm.communicationFn(response);
	  		}
	    }else{
	    	console.log("not supported");
	    }
	  };

	  pm.aCallBack  = function(e) {
	      if ((e.origin !== pm.parentUrl)
	                || (Object.prototype.toString.call(pm.parentUrl) === "[object Function]" && pm.parentUrl(e.origin) === !1)) {
	                   return !1;
	      }
	      pm.callback(e);
	   };
	   (function(){
	    
	     if (window['addEventListener']) {
	           window[pm.callback ? 'addEventListener' : 'removeEventListener']('message', pm.aCallBack, !1);
	       } else {
	           window[pm.callback ? 'attachEvent' : 'detachEvent']('onmessage', pm.aCallBack);
	       }
	  })();
	  return pm;
	})({iframeServer : "https://nuskin.postclickmarketing.com/", iframeId : "mywhyquiz"});
	
	nuskinPm.communicationFn = function(response){
		console.log(response);
	};
	