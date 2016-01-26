(function () {
	'use strict';

	
	cmg.contactInit = (function () {
		var _config = {};

		var _createInstance = function (initOptions) {
			_config.popUpId = initOptions.popUpId;
			_config.pageContainer = initOptions.pageContainer;

			$("#"+_config.popUpId).on('show.bs.modal', _.bind(function (a,b,c) {
				$(window).on("resize.cmgModal",_.bind(function (){
					$("#"+_config.pageContainer).height(window.innerHeight*0.75);
				},this));
			},this));
		
		$("#"+_config.popUpId).on('hide.bs.modal', _.bind(function (a,b,c) {
			$(window).off('resize.cmgModal');
		},this));			
			return publicAttribs;
		};
						
		var publicAttribs =  {
			openModal : function(){
				$("#"+_config.pageContainer).height(window.innerHeight*.75); 
				$("#"+_config.popUpId).modal("show");
			},
			closeModal : function(){

				$("#"+_config.popUpId).modal("hide");	
			}
		};
		
		// Return object with static attributes
		return {
			/**
			 * 
			 * Get the current singleton instance.
			 * 
			 * @returns {Object} The singleton instance
			 */
			getInstance: function () {
				if(!_config.instance ){
					return null;
				}
				return _config.instance;
			},			
		
			initializeInstance: function (initOptions) {
				
				if(!_config.instance && initOptions ){
					_config.instance =  _createInstance(initOptions);
				}
				return this;				
			}
		};
	})();
}());
