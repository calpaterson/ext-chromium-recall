chrome.browserAction.onClicked.addListener(
    function(tab){
	open(
	    "https://recall.calpaterson.com/" +
		"bookmarklet.html?version=1&title=" +
		encodeURIComponent(tab.title) +
		"&url=" +
		encodeURIComponent(tab.url),
	    "Mark this",
	    "toolbar=no, width=470, height=300"
	)
    }
);