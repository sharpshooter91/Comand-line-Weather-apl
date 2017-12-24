const http= require("http");
const query="nis";
const api= require('./api.json');

function printMessage(city, temperature , airPresure) {
  const string= `In ${city} temperature is ${Math.round(temperature/17.2222)} and air resure is ${parseFloat(airPresure).toFixed( 2 )}`;
  console.log(string);
};

function get(query) {
  const request= http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=${api.key}`, response=> {
    let body= "";
    response.on("data", data=>{
      body+= data.toString();
      //console.log(body);
    });
    response.on("end", ()=>{
      const core= JSON.parse(body);
      printMessage(query, core.list[0].main.temp, core.list[0].main.pressure);
    });
  });
};

get(query);

module.exports.get= get;
