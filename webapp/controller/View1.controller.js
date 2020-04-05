sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ztest_cloud.ztest_cloud.controller.View1", {
		onInit: function () {
			var that = this;
			var arr = [];
			var details = new sap.ui.model.json.JSONModel();
			that.getView().setModel(details, "d_model");
			that.getView().getModel("d_model").setProperty("/entries", arr);
		},
		Read: function () {
			var that = this;
			var str = that.getView().byId("idInput").getValue();
			var id = str.split(",");
			// var id = ["01","02"];
			var filterData = {
				"filterData": JSON.stringify({
					"ID": id
				})
			};
			var jurl = "/ztest2/test2.xsjs";
			jQuery.ajax({
				url: jurl,
				async: false,
				TYPE: 'GET',
				data: filterData,
				contentType: "application/json",
				success: function (data, textStatus, jqXHR) {
					var a = JSON.parse(data);
					that.getView().getModel("d_model").setProperty("/data", a);
				},
				error: function (xhr, status) {
					console.log("ERROR");
				}

			});
		},
		onPush: function () {
			var dataobject = {};
			var arr = this.getView().getModel("d_model").getProperty("/entries");
			dataobject.ID = Number(this.getView().byId("fID").getValue());
			dataobject.Name = this.getView().byId("fName").getValue();
			dataobject.Company = this.getView().byId("fCompany").getValue();
			dataobject.City = this.getView().byId("fCity").getValue();
			arr.push(dataobject);
			this.getView().getModel("d_model").setProperty("/entries", arr);
		},
		onCreate: function () {
			var dataobject = {};
			var finaldata = {};
			//dataobject.ID = Number(this.getView().byId("fID").getValue());
			//dataobject.Name = this.getView().byId("fName").getValue();
			//dataobject.Company = this.getView().byId("fCompany").getValue();
			//dataobject.City = this.getView().byId("fCity").getValue();
			dataobject = this.getView().getModel("d_model").getProperty("/entries");
			finaldata.data = JSON.stringify(dataobject);
			var jurl = "/ztest2/insert.xsjs";
			jQuery.ajax({
				url: jurl,
				async: false,
				TYPE: 'GET',
				data: finaldata,
				contentType: "application/json",
				success: function (data, textStatus, jqXHR) {
					var a = data;
				},
				error: function (xhr, status) {
					console.log("ERROR");
				}

			});
		},
		onxs:function(){
			 this.getOwnerComponent().getRouter().navTo("Routexsodata");
		}
	});
});