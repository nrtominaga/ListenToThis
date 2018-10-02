let record = document.getElementById('record');

record.onclick = function() {
    chrome.tabCapture.capture({
        video:false,
        audio:true
    },
    function(stream){

    });
};