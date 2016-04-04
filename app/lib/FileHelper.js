function storeAtTempLocationAndGetPath(blob, fileName) {

    var directory = Ti.Filesystem.tempDirectory;
    var file = Titanium.Filesystem.getFile(directory, fileName);
    file.write(blob);

    Ti.API.info(file.nativePath);

    return file.nativePath;
}

exports.storeAtTempLocationAndGetPath = storeAtTempLocationAndGetPath;
