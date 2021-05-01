
document.addEventListener('DOMContentLoaded', () => {
    navigator.geolocation.getCurrentPosition(position => {
        document.getElementById('ido').innerText = position.coords.latitude;
        document.getElementById('keido').innerText = position.coords.longitude;
        document.getElementById('koudo').innerText = position.coords.altitude;
        document.getElementById('ichiseido').innerText = position.coords.accuracy;
        document.getElementById('koudoseido').innerText = position.coords.altitudeAccuracy;
        document.getElementById('idouhoukou').innerText = position.coords.heading;
        document.getElementById('sokudo').innerText = position.coords.speed;
        
    },
    err => {
        document.getElementById('ido').innerText = "取得できなかった";
        document.getElementById('keido').innerText = "取得できなかった";
        document.getElementById('koudo').innerText = "取得できなかった";
        document.getElementById('ichiseido').innerText = "取得できなかった";
        document.getElementById('koudoseido').innerText = "取得できなかった";
        document.getElementById('idouhoukou').innerText = "取得できなかった";
        document.getElementById('sokudo').innerText = "取得できなかった";
    },
    {
        enableHighAccuracy: true,
        timeout: 60 * 10 * 1000,
        maximumAge: 0
    });
});
