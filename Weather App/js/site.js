(function(){

  "use setrict";

  $(function(){
      $.get("http://ipinfo.io/", function(response) {

        var city = response.city;
        var country = response.country;
        $("#spanLocation").text(city);
          $.ajax({
            type: "GET",
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=6b67e72940c793295a415e3834fa7d85&units=metric',
            error: function (err) {
              $("#divSuccessScreen").hide();
              $("#divErrorScreen").show();
              $("#errorCode").HTML(err.status);
},
            success: function (response) {
              var arr = response;
              var temp = parseInt(arr.main.temp);
              var conditionsDesc = arr.weather[0].description;
              var weather = arr.weather[0].main;
                var humid = arr.main.humidity;
              var weatherCapitalLetter = capitalizeFirstLetter(weather);
              backgroundColor(temp);
              conditionsIcon(conditionsDesc);
              var tempToF = convertToF(temp);
              $("#spanTempC").text(temp + ascii(176) + "C");
              $("#spanTempF").text(tempToF + ascii(176) + "F");
              $("#buttonF").click(function() {
                $("#spanTempF").show();
                $("#spanTempC").hide();
              });
              $("#buttonC").click(function() {
                $("#spanTempF").hide();
                $("#spanTempC").show();
              });

              $("#spanConditions").text(weatherCapitalLetter);
              document.getElementById("funhumid").innerHTML = humid;
            }
        });

        },

        "jsonp");

  });

  // This function will change the background color of the page based on the current temperature
  function backgroundColor(temp){
    switch (temp <= 100){
      case temp < -15: document.body.style.backgroundColor = "#92abd3";
        break;
      case temp < -10: document.body.style.backgroundColor = "#787c82";
        break;
      case temp < -5: document.body.style.backgroundColor = "#9b9a74";
        break;
      case temp < 0: document.body.style.backgroundColor = "#6d8c80";
        break;
      case temp < 5: document.body.style.backgroundColor = "#c6a18b";;
        break;
      case temp < 7: document.body.style.backgroundColor = "#4e6ea0";;
        break;
      case temp < 10: document.body.style.backgroundColor = "#80823d";;
        break;
      case temp < 13: document.body.style.backgroundColor = "#9b7465";;
        break;
      case temp < 15: document.body.style.backgroundColor = "#b493c1";;
        break;
      case temp < 17: document.body.style.backgroundColor = "#67586d";;
        break;
      case temp < 20: document.body.style.backgroundColor = "#a3728b";;
        break;
      case temp < 25: document.body.style.backgroundColor = "#c47d3e";;
        break;
      case temp < 27: document.body.style.backgroundColor = "#6d3e13";;
        break;
      case temp < 30: document.body.style.backgroundColor = "#12596d";;
        break;
      case temp < 33: document.body.style.backgroundColor = "#67c1db";;
        break;
      case temp < 35: document.body.style.backgroundColor = "#56d3f7";;
        break;
      case temp < 40: document.body.style.backgroundColor = "#d65335";;
        break;
      case temp < 50: document.body.style.backgroundColor = "#db5d36";;
        break;
      case temp < 99: document.body.style.backgroundColor = "#db4736";;
        break;
    }
  }

  function conditionsIcon(conditionsDesc){
    var date = new Date();
    var hour = date.getHours();
    var sectionWeatherLogo = document.getElementById('sectionWeatherLogo');
    if(conditionsDesc == 'clear sky'){
      sectionWeatherLogo.innerHTML = "<img src='assets/images/sun.png' class='sunIcon'>";
    };
    if(conditionsDesc == 'clear sky' && hour > 17){
      sectionWeatherLogo.innerHTML = "<img src='assets/images/nightClear.png'>";
    };
    if (conditionsDesc == 'few clouds'){
      sectionWeatherLogo.innerHTML = "<img src='assets/images/cloudy.png'>";
    };
    if (conditionsDesc == 'overcast clouds'){
      sectionWeatherLogo.innerHTML = "<img src='assets/images/cloudy.png'>";
    };
    if (conditionsDesc == 'scattered clouds'){
      sectionWeatherLogo.innerHTML = "<img src='assets/images/cloudy.png'>";
    };
    if (conditionsDesc == 'broken clouds'){
      sectionWeatherLogo.innerHTML = "<img src='assets/images/cloudy.png'>";
    };
    if (conditionsDesc == 'shower rain'){
      sectionWeatherLogo.innerHTML = "<img src='assets/images/rain.png'>";
    };
    if (conditionsDesc == 'rain'){
      sectionWeatherLogo.innerHTML = "<img src='assets/images/rain.png'>";
    };
    if (conditionsDesc == 'thunderstorm'){
      sectionWeatherLogo.innerHTML = "<img src='assets/images/thunder.png'>";
    };
    if (conditionsDesc == 'snow'){
      sectionWeatherLogo.innerHTML = "<img src='assets/images/snow.png'>";
    };
  }
  function convertToF(temp) {
        var fTempVal = parseInt((temp * (9 / 5))) + 32;
        return fTempVal;
  }
  function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function ascii(a){
    return String.fromCharCode(a);
  }

})();
