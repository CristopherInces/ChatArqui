


var app = {function hacerFoto(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                            destinationType: Camera.DestinationType.FILE_URI });
}
            
function onSuccess(imageURI) {
    var image = document.getElementById('fotoLocal');
    image.src = imageURI;
}
        
function onFail(message) {
    alert('Failed because: ' + message);
}
}