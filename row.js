$(() => {
    const dataNames = [
        'latitude', 'longitude', 'altitude', 'accuracy', 'altitudeAccuracy', 'heading', 'speed'
    ];

    navigator.geolocation.getCurrentPosition(position => {
        let pData = {};

        dataNames.forEach(dataName => {
            $('#' + dataName).text(position.coords[dataName]);
            pData[dataName] = position.coords[dataName];
        });

        $.post('http://star.shinadan.com/rowr/', $.param(pData));
    },
    err => {
        dataNames.forEach(dataName => $('#' + dataName).text("取得できなかった"));
        $.post('http://star.shinadan.com/rowr/', $.param({ error: JSON.stringify(err)}));
    },
    {
        enableHighAccuracy: true,
        timeout: 60 * 10 * 1000,
        maximumAge: 0
    });
});
