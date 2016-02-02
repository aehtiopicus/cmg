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
		
		var _showSpinner = function(){
			debugger;
			var newOverlay = $("<div class='modal-backdrop in'></div>");
			newOverlay.css("z-index","1050");
			$("body").append(newOverlay);
			$(".spinnerDiv").removeClass("hidden");
		};

		var _hideSpinner = function(){
			$(".spinnerDiv").addClass("hidden");
			$($(".modal-backdrop.in")[1]).remove();
			

		};
		var _sendEmail = function(formId){
			
			_showSpinner();
			var form = document.getElementById(formId);
			var preventPost = false;
			for(var i = 0; i < form.length-1 ; i++){
				if(!form[i].checkValidity()){
					$("#"+form[i].id).addClass("invalid");
					preventPost = true;
				}else{
					$("#"+form[i].id).removeClass("invalid");
				}
			}
			var postData = {nombre: form['nombre'].value,
			telefono: form['telefono'].value,
			email: form['email'].value,
			mensaje: form['mensaje'].value,
			toemail: form['toemail'].value};
			if(!preventPost){
				$.ajax({
					type : "POST",
					url : "https://script.google.com/macros/s/AKfycbwrDeg8sJbrSGeFfED5BKcy9livNvCz1Qy2gtA0v9qxuPh2Qw4/exec",				
					data : postData,
					success : function(data,textStatus,jqXHR){
						$("#"+formId+" input:not(:hidden)").val("");
						$("#"+formId+" textarea").val("");
						_hideSpinner();
						publicAttribs.closeModal();
							
						
					},
					error : function(data,textStatus,jqXHR){
						_hideSpinner();
						debugger;
					}

				});
			}else{
				_hideSpinner();
			}

		}						
		var publicAttribs =  {
			openModal : function(){
				$("#"+_config.pageContainer).height(window.innerHeight*.75); 
				$("#"+_config.popUpId).modal("show");
			},
			closeModal : function(){

				$("#"+_config.popUpId).modal("hide");	
			},
			sendEmail : function(formId){
				_sendEmail(formId);
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