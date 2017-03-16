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

  $("#set-temp").click(function() {
    var temp = $('input[type="radio"]:checked');
    if(temp.length > 0) {
      $("#current-temperature").html(temp.val());
    } else {
      alert("No temperature selected");
    }
  });

  // $("#set-temp").click(function(event) {
    // $(".temp-value").each(function() {
    //   console.log($(".temp-value").val());
    // });


      // if($(".temp-value").is(':checked')) {

        // var temp = $(".temp-value").val();
        // console.log(temp);
      // };

    // if($(".temp-value").is(':checked')) {
    //   var temp = $(".temp-value").val();
    //   console.log(temp);
    // } else {
    //   console.log("nothing checked");
    // });
    // console.log("hello");

  // });

});
