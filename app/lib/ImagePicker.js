function openGallery(params) {

    Ti.Media.openPhotoGallery({
        mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO],
        success: function(item) {
            if (params && params.onSelection) {
                params.onSelection(item.media);
            }
        }
    });
}

exports.openGallery = openGallery;