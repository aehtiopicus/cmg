/*
cmg.cmgHome = {
	carousel : {	
				options : {
            			$BulletNavigatorOptions: {
                			$Class: $JssorBulletNavigator$,
                			$ChanceToShow: 1                
            			},
            			$AutoPlay: true
        		},
				carouselInstall : function(homeCarrousel1){		
					
					var ic = new $JssorSlider$(homeCarrousel1, this.options);
					this.installedCarousels.push({carousel : ic, component : homeCarrousel1});
					return ic;
				},
				installedCarousels : [],

				responsiveCarousel :    function (carousel) {
					debugger;
                	var refSize = carousel.$Elmt.parentNode.clientWidth;
                	refSize = parseFloat(window.getComputedStyle(carousel.$Elmt.parentNode).width) - 
                	(parseFloat(window.getComputedStyle(carousel.$Elmt.parentNode).paddingLeft) + 
                	parseFloat(window.getComputedStyle(carousel.$Elmt.parentNode).paddingRight));
                	
                	if (refSize) {
                    	refSize = Math.min(refSize, 1920);
                    	carousel.$ScaleWidth(refSize);
                	}
                	else {
                    	window.setTimeout(this.responsiveCarousel, 30);
                	}

            	},
            
            
			}
}        
        */
