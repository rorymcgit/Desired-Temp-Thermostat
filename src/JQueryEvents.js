var thermostat = new Thermostat();

$(document).ready(function() {
  $("#temperature-reset").click(function(event) {
    thermostat.reset();
    console.log("Thermostat has been reset to " + thermostat.currentTemp);
    $("#current-temperature").html(thermostat.currentTemp);
  });

  $("#powersaving-status").click(function(event) {
    thermostat.setPowerSavingMode();
    console.log(thermostat.powerSavingMode);
    $("#powersaving-status").html("PSM is " + thermostat.powerSavingMode);
  });

});
