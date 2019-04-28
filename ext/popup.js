let recordButton = document.getElementById("record");

recordButton.onclick = startRecording();

function startRecording() {
    chrome.tabCapture.capture({
        video: false, audio: true
    },
        function (stream) {
            console.log("idk");
    });
}
