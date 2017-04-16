var thermostat = new Thermostat();

$(document).ready(function() {

  $("#current-temperature").fadeOut(10);
  $("#current-temperature").fadeIn(1000);

  $("#energy-bar").attr('class', thermostat.currentEnergyUsage());

  $("#temperature-reset").click(function(event) {
    thermostat.reset();
    updateTemp();
  });

  $("#powersaving-status").click(function(event) {
    thermostat.setPowerSavingMode();
    $("#powersaving-status").html("Power Saving Mode: " + checkPowerSavingMode());
  });

  function checkPowerSavingMode() {
    if (thermostat.powerSavingMode) {
      return "on";
    } else {
      return "off";
    }
  }

  $("#set-temp").click(function() {
    var selectedTemp = $('input[type="radio"]:checked');
    if(selectedTemp.length > 0) {
      thermostat.adjustTemp(selectedTemp.val());
      $(selectedTemp).prop('checked', false);
      updateTemp();
    } else {
      alert("No temperature selected");
    }
  });

  function updateTemp() {
    $("#current-temperature").html(thermostat.currentTemp + "&#176;");
    $("#energy-bar").html(thermostat.currentEnergyUsage());
    $("#energy-bar").attr('class', thermostat.currentEnergyUsage());
  }

  $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ef8f6131668f4df4ab40159758f399c2&units=metric", function(result) {
    var weather = result.weather[0].description;
    var temperature = result.main.temp;
    $('#city').html(result.name);
    $('#weather').append(weather, ".");
    $('#outside-temp').append(temperature, "&#176;C.");
  });
});
