/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ztest_cloud/ztest_cloud/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});