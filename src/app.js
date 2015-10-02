var thermostat = new Thermostat();

function updateDisplay() {
    $('#temperature').html(thermostat.temperature);
    $('#temperature').css('color', thermostat.colorStatus());
}

function getWeather(location, callback) {
    var api_url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric';
    $.ajax({
        dataType: "jsonp",
        url: api_url,
        success: callback
    });
}

function getWeatherForSelectedCity(location) {
    getWeather(location, function (response) {
        $('#city').html(response.name);
        $('#city_temp').html(response.main.temp);
        $('#city_wind').html(response.wind.speed);
    });
}

$(document).ready(function () {
    updateDisplay();
    getWeatherForSelectedCity($('#current_city').val());

    $('#increase').click(function () {
        thermostat.increaseTemperature(1);
        updateDisplay();
    });

    $('#decrease').click(function () {
        thermostat.decreaseTemperature(1);
        updateDisplay();
    });

    $('#change_mode').click(function () {
        var state = $(this).prop('checked') ? true : false;
        thermostat.changePowerSavingMode(state);
        updateDisplay();
    });

    $('#reset').click(function () {
        $('#change_mode').prop('checked', true);
        thermostat.reset();
        updateDisplay();
    });

    $('#current_city').change(function () {
        getWeatherForSelectedCity($(this).val());
    });
});