sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("at.clouddna.training06.zhoui5.controller.App", {
            onInit: function () {

            },
            onSavePressed: function(){
                let oView = this.getView();
                let oModel = oView.getModel();
                let oData = oModel.getData();

                MessageBox.success("Ihre Daten: " + JSON.stringify(oData), {
                    title: "Hallo " + oData.firstname + " " + oData.lastname
                });
            },

            genderFormatter: function(sKey){
                let oView = this.getView();
                let oI18nModel = oView.getModel("i18n");
                let oResourceBundle = oI18nModel.getResourceBundle();
                let sText = oResourceBundle.getText(sKey);
                return sText;
            }
        });
    });
