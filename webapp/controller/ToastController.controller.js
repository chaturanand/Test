sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller,MessageToast) {
		"use strict";

	return Controller.extend("SapTest.controller.ToastController", {
		onShowHello : function(){
			MessageToast.show("Hello World From Toast");
		}

	});
});