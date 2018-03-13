sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"SapTest/controller/HelloDialog"
], function(UIComponent,JSONModel,HelloDialog) {
	"use strict";

	return UIComponent.extend("SapTest.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			var oData = {
				
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			// set the device model
			this.setModel(oModel);
			
			//set Dialog
		this._helloDialog = new HelloDialog(this.getRootControl());
		},
		exit : function(){
			this._helloDialog.destroy();
			delete this._helloDialog;
		},
		openHelloDialog : function () {
			this._helloDialog.open();
		}
	});
});