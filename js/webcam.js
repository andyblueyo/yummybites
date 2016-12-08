"use strict";

var video = document.querySelector("video");
var canvas = document.getElementById("bg");
var ctx = canvas.getContext("2d");
// var canvas2 = document.getElementById("fg");
// var ctx2 = canvas2.getContext("2d");
var filterSel = document.querySelector("#filter-select");
var image = document.getElementById("imgCanvas");

var downloadButton = document.getElementById("btn-download");
downloadButton.disabled = true;





function evtToCanvas(evt) {
    return {
        x: evt.clientX - canvas.offsetLeft + window.scrollX,
        y: evt.clientY - canvas.offsetTop + window.scrollY
    };
}

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video: true})
        .then(function(stream) {
            video.src = window.URL.createObjectURL(stream);

            document.getElementById("snap").addEventListener("click", function() {
                canvas.width = video.clientWidth;
                canvas.height = video.clientHeight;
                // erase the picture
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // create the picture
                ctx.drawImage(video, 0, 0, video.clientWidth, video.clientHeight);
                ctx.drawImage(image, 50, 50);
            });
            
            filterSel.addEventListener("change", function() {
                var filterName = filterSel.options.item(filterSel.selectedIndex).value;
                canvas.className = filterName;
            });
            document.getElementById("")
    

        })
        .catch(function(err) {
            console.error(err);
            alert(err.message);
        });

} else {
    alert("Sorry, your browser doesn't allow turning on the web cam, use Chrome or Firefox");
}



// to download a canvas as a png 
// http://weworkweplay.com/play/saving-html5-canvas-as-image/

mirror.addEventListener('contextmenu', function (e) {
    var dataURL = canvas.toDataURL('image/png');
    mirror.src = dataURL;
});

downloadButton.addEventListener('click', function (e) {
    var dataURL = canvas.toDataURL('image/png');
    downloadButton.href = dataURL;
});





