'use strict'

browser.browserAction.onClicked.addListener((tab) => {
    console.log(tab);
    let result = browser.tabs.executeScript({
        file: "/helper.js",
        allFrames: true
    })
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(error);
    });
});