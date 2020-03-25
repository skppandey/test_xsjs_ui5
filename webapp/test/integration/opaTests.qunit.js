/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ztest_cloud/ztest_cloud/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});