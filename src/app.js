var thermostat = new Thermostat();

function updateDisplay() {
    $('#temperature').html(thermostat.temperature);
    $('#temperature').css('color', thermostat.colorStatus());
}

$(document).ready(function () {
    updateDisplay();

    $('#increase').click(function () {
        thermostat.increaseTemperature(1);
        updateDisplay();
    });

    $('#decrease').click(function () {
        thermostat.decreaseTemperature(1);
        updateDisplay();
    });

    $('#change_mode').click(function () {
        thermostat.powerSavingMode = $(this).prop('checked') ? true : false;
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

    $('#city').click(function () {
        $('#dubai').prop('checked', true);
        thermostat.temperature(21);
        updateDisplay();
    });

});