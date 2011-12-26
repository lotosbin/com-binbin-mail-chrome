// A generic onclick callback function.
function genericOnClick(info, tab) {
	//alert(JSON.stringify(info));
	window.open("https://mail.google.com/mail/u/0/?shva=1#apps/"+info.selectionText)
	console.log("item " + info.menuItemId + " was clicked");
	console.log("info: " + JSON.stringify(info));
	console.log("tab: " + JSON.stringify(tab));
}

// Create one test item for each context type.
//var contexts = [ "page", "selection", "link", "editable", "image", "video","audio" ];
var contexts = ["selection","editable"];
for ( var i = 0; i < contexts.length; i++) {
	var context = contexts[i];
	var title = "Search '" + context + "' in google mail";
	var id = chrome.contextMenus.create({
		"title" : title,
		"contexts" : [ context ],
		"onclick" : genericOnClick
	});
	console.log("'" + context + "' item:" + id);
}