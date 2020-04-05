sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ztest_cloud.ztest_cloud.controller.xsodata", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ztest_cloud.ztest_cloud.view.xsodata
		 */
		onInit: function () {
			
		},
		_getModel:function(){
			// return this.getOwnerComponent().getModel("oModel");
			return sap.ui.getCore().getModel("oModel");
		},
		onView1Press: function () {
			this.getOwnerComponent().getRouter().navTo("RouteView1");
		},
		onGet:function(){
			var that = this;
			var oModel = that._getModel();
		oModel.read("/Employee", {
				success: function (oData) { //"do something"  
					var t = new sap.ui.model.json.JSONModel();
					// t.setData(oData);
					var data = oData.results;
					that.getView().setModel(t, "q_model");
					that.getView().getModel("q_model").setProperty("/data", data);
				},
				error: function (oError) { //"do something" 
				}
			});
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ztest_cloud.ztest_cloud.view.xsodata
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ztest_cloud.ztest_cloud.view.xsodata
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ztest_cloud.ztest_cloud.view.xsodata
		 */
		//	onExit: function() {
		//
		//	}

	});

});