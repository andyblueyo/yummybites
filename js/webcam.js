"use strict";

var video = document.querySelector("video");
var canvas = document.getElementById("cnvs1");
var ctx = canvas.getContext("2d");
var canvas2 = document.getElementById("layer1");
var ctx2 = canvas2.getContext("2d");
var filterSel = document.querySelector("#filter-select");



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
                ctx.drawImage(video, 0, 0, video.clientWidth, video.clientHeight);

                

            

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

// to download an canvas as a png 
// http://weworkweplay.com/play/saving-html5-canvas-as-image/

// mirror.addEventListener('contextmenu', function (e) {
//     var dataURL = canvas.toDataURL('image/png');
//     mirror.src = dataURL;
// });
// var button = document.getElementById('btn-download');
// button.addEventListener('click', function (e) {
//     var dataURL = canvas.toDataURL('image/png');
//     button.href = dataURL;
// });





