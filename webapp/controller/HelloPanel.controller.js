sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("SapTest.controller.HelloPanel", {

		onShowHello: function() {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
		},

		onOpenDialog: function() {
			/*var oView = this.getView();
			var oDialog = oView.byId("helloDialog");

			//create dialog lazily
			if (!oDialog) {
				//create the Dialog via fragement factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "SapTest.view.HelloDialog", this);
				oView.addDependent(oDialog);
			}
			oDialog.open();*/
		
		/*onCloseDialog: function() {
			this.byId("helloDialog").close();
		}*/
		
			this.getOwnerComponent().openHelloDialog();
		}
	});

});