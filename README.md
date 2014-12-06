ReverseGeoJS
============
A small and easy way to reverse geocode (Get information like city,country, and state from a latitude/longitude pair) in pure javascript, using either Google Maps API or Nominatim, an open search API for Open Street Map.

| File | Description          |
| ------------- | ----------- |
| <a href='https://github.com/ironmig/ReverseGeoJS/blob/master/OpenStreetMapAPI.js'>OpenStreetMapAPI.js</a>|Javacript function for easily using Nominatim to reverse geocode|
| <a href='https://github.com/ironmig/ReverseGeoJS/blob/master/OpenStreetMapAPI..html'>OpenStreetMapAPI.html</a>|An example implementation of the OpenStreetMapAPI.js in html|
| <a href='https://github.com/ironmig/ReverseGeoJS/blob/master/googleAPI.js'>googleAPI.js</a>|Javacript function for easily using google maps API to reverse geocode|
| <a href='https://github.com/ironmig/ReverseGeoJS/blob/master/googleAPI.html'>googleAPI.html</a>| An example implementation of the googleAPI.js in html|


Usage:

```js
openGeo(latiude,longitude,callback,searchArray,server);

 //Finds city,country, and zip code at 12 degrees south, 77 degrees west and sets html objects to response data
openGeo (-12.0433,-77.0283, function (response) {
  $('city').html = response.city || response.village || response.town;;
  $('country').html = response.country;
  $('Zip').html = response.postcode;
});

```
