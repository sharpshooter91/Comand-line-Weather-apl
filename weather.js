const http= require("http");
const api= require("./api.json");
//const query="gadzin han";

function printMessage(weather) {
  const string= `It is ${Math.round( weather.list[0].main.temp-272.15 )} degrees in ${weather.city.name}`;
  console.log(string);
};

function get(query) {

  const request= http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=${api.key}`, response=> {
    let body= "";
    response.on("data", data=>{
      body+= data;
      //console.log(typeof body);
    });
    response.on("end", ()=> {
      let weather= JSON.parse(body);
      printMessage(weather);
    });
  });
};

module.exports.get= get;
//get(query);
