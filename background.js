// fuction click() {
// 	chrome.tab.executeScript(null,
// 		{code:"document.getElementById('time')"});
// 	window.close();
// }

chrome.runtime.onInstalled.addListener(handleInstalled); 
// Add a method what to happen when browser starts 
chrome.runtime.onStartup.addListener(handleStartup);

console.log("in background script")

	chrome.alaram.create("time to logout",{delayInMinutes : 1.0});

	chrome.alaram.onAlaram.addListener(function (alaram){
		console.log(alaram)
	});