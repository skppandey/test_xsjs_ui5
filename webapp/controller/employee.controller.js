sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ztest_cloud.ztest_cloud.controller.employee", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ztest_cloud.ztest_cloud.view.employee
		 */
		onInit: function () {
			this.getOwnerComponent().getRouter().attachRoutePatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			if (oEvent.getParameter("name") == "employee") {
				var ID = oEvent.getParameter("arguments").employeeID;
				var that = this;
				var oModel = that._getModel();
				oModel.read("/Employee", {
					success: function (oData) { //"do something"  
						var t = new sap.ui.model.json.JSONModel();
						var data = {};
						// t.setData(oData);
						for (var i = 0; i < oData.results.length; i++) {
							if (oData.results[i].ID == Number(ID) ){
								data.ID = oData.results[i].ID;
								data.NAME = oData.results[i].NAME;
								data.COMPANY = oData.results[i].COMPANY;
								data.CITY = oData.results[i].CITY;
							}
						}
						that.getView().setModel(t, "x_model");
						that.getView().getModel("x_model").setProperty("/data", data);
					},
					error: function (oError) { //"do something" 
					}
				});
			}
		},
		_getModel: function () {
			// return this.getOwnerComponent().getModel("oModel");
			return sap.ui.getCore().getModel("oModel");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ztest_cloud.ztest_cloud.view.employee
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ztest_cloud.ztest_cloud.view.employee
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ztest_cloud.ztest_cloud.view.employee
		 */
		//	onExit: function() {
		//
		//	}

	});

});