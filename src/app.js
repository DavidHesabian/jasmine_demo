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

    $('#change_mode').on('change', function () {
        thermostat.powerSavingMode = $(this).prop('checked');
    });

    $('#reset').click(function () {
        $('#change_mode').prop('checked', true);
        thermostat.reset();
        updateDisplay();
    });
});