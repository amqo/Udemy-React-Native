import _ from 'lodash';

var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=f3372a01184a640f574219c51aa346e1';

var kelvinToC = function(kelvin) {
  return Math.round(kelvin - 273.15) + ' ˚C';
}

module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}&lang=es`;

  return fetch(url)
    .then(response => {
      return response.json()
    }).then((json) => {
      return {
        city: json.name,
        temperature: kelvinToC(json.main.temp),
        description: _.capitalize(json.weather[0].description)
      }
    });
}
