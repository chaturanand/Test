sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";

	return Controller.extend("SapTest.controller.TransLatableController", {
		onInit: function() {
			//set data model on the view
			var oData = {
				recipient: {
					name: "Chaturanand"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			//set i18n model to the view
			var i18nModel = new ResourceModel({
				bundleName: "SapTest.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n")
		},
		onShowHello: function() {
			//read the message from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			//show message
			MessageToast.show(sMsg);
		}

	});
});