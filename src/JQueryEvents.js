var thermostat = new Thermostat();

$(document).ready(function() {
  $("#temperature-reset").click(function(event) {
    thermostat.reset();
    console.log("Thermostat has been reset to " + thermostat.currentTemp);
    updateTemp();
  });

  $("#powersaving-status").click(function(event) {
    thermostat.setPowerSavingMode();
    console.log(thermostat.powerSavingMode);
    $("#powersaving-status").html("PSM is " + thermostat.powerSavingMode);
  });

  $("#set-temp").click(function() {
    var selectedTemp = $('input[type="radio"]:checked');
    if(selectedTemp.length > 0) {
      thermostat.adjustTemp(selectedTemp.val());
      updateTemp();
    } else {
      alert("No temperature selected");
    };
  });

  function updateTemp() {
    $("#current-temperature").html(thermostat.currentTemp);
    $("#energy-bar").html(thermostat.currentEnergyUsage());
    $("#energy-bar").attr('class', thermostat.currentEnergyUsage());
  }

});
