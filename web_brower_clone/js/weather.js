

function onGeoOk() {
    
}

function onGeoError() {
    alert("Can't find location.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);