# Thermostat

This is an implementation of the Makers Academy Week 5 Thermostat Challenge. In this project I diverged slightly from the path of implementing a simple thermostat where the user clicks a button to increase/decrease the temperature by a degree at a time. Instead, the user selects their desired temperature from a range of values.  
  
I have used a weather API (openweathermap.org) to display the outside weather conditions and temperature for London.

* Thermostat starts at 20 degrees
* You can set the temperature to the desired degrees
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with the reset button
* The thermostat displays its current energy usage:
< 18 is low-usage  
< 25 is medium-usage  
\>= 25 is high-usage.

#### Instructions for use:
- Clone this repo
- In your browser, open ```index.html```
- Select desired temperature, set power saving mode off/on,  reset the temperature to default

![thermostat](https://github.com/rorymcgit/thermostat-JavaScript/blob/master/Thermostat_highusage.png)

#### Technologies used:
- JavaScript
- JQuery
- Jasmine
- Open Weather Map API
- (HTML/CSS)
