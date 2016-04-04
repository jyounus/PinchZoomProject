var ImagePicker = require("ImagePicker");
var FileHelper = require("FileHelper");

function doClick(e) {
    ImagePicker.openGallery({
        onSelection: imageSelected
    });
}

function imageSelected(blob) {
    Ti.API.info("imageSelected: " + blob);
    var path = FileHelper.storeAtTempLocationAndGetPath(blob, "tempImage.png");

    var fullscreen = Alloy.createController("fullscreenImage", {url: path});
    fullscreen.getView().open();
}

$.index.open();
