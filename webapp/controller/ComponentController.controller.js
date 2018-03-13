sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("SapTest.controller.ComponentController", {
		onShowHello: function() {
			//read the message from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("appDescription", [sRecipient]);
			//show message
			MessageToast.show(sMsg);
		}

	});
});