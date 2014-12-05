//solution by ironmig to Google-code in 2014
function openGeo (lat,lon,callback,find,server) {
    var req = new XMLHttpRequest;
    var server = server || 'http://open.mapquestapi.com/nominatim/v1/reverse.php'; //A valid nominatim reverse geocoding server
    var find = find || ['city','country','postcode','state'];
    var res = {};
    req.open('GET',server+'/reverse?format=json&lat='+lat+'&lon='+lon,true);
    req.send();
    req.onreadystatechange = function () {
        if (req.readyState===4 && req.status===200) {
            data = JSON.parse(req.responseText).address;
            for (var i=0;i<find.length;i++) res[find[i]]=data[find[i]];
            if (callback) callback(res);
        }
    };
}