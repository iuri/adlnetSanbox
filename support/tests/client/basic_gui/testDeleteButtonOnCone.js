//Test delete button
//This is simplified down to create a cone
//verify the cone
//delete the cone
//verify the deletion
//leave and have a good day
module.exports = {
	'Test delete button (A10)': function(browser, finished) {
		global.browser = browser;
		var testUtils = require('../../utils/testutils.js');
		var passed = true;
		var outStr = "";
		browser.loadBlankScene()

		//Create cone from menu
		.nextGUID('testCone')
		.click('#MenuCreate')
		.waitForVisible('#MenuPrimitives', 1500)
		.click('#MenuPrimitives')
		.waitForVisible('#MenuCreateCone', 1500)
		.click('#MenuCreateCone')
		//Verify cone
		.pause(6000).then(function() {
			testUtils.assertNodeExists("testCone", function(assertStatus, msg){
				passed = passed && !!assertStatus;
				outStr += "Cone first time (exists): " + msg + "; ";
				
			});
		})
		//Pause and then delete cone by delete button
		.pause(2000).$click('#MenuDeleteicon')
		//Verify deletion of cone
		.pause(2000).then(function() {
			testUtils.assertNodeExists("testCone", function(assertStatus, msg){
				passed = passed && !assertStatus;
				outStr += "Cone second time (deleted): " + msg + "; ";
				finished(passed, outStr);
			});
			
		})
	}
};