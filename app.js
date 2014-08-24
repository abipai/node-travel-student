var appHelper = require("./apphelper.js");

appHelper.runApp(function(app, db) {
	

	console.log("Travel application is running!");

	var myName = "Abi";
	app.get("/", function (req, resp) {
		resp.write("<html><body><h1>Welcome to "+myName+"'s first, really sweet, web app!</body></html>");
		resp.end();
	});

})