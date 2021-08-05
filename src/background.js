    chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
    var act = chrome.tabs.getSelected(null, function(tab){
        //How to set the value of response to active input in page????
    });
});