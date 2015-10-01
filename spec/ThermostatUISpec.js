describe('ThermostatUI', function () {

    beforeEach(function () {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
    });

    it('update thermostat with default temperature', function () {
        expect('#temperature').toContainText('20')
    });

    it('up button to increase temperature', function () {
        $('#increase').click();
        expect('#temperature').toContainText('21')
    });

    it('down button to decrease temperature', function () {
        $('#decrease').click();
        expect('#temperature').toContainText('19')
    });

    it('power saving mode on by default', function () {
        expect($('#change_mode')).toBeChecked();
    });

    it('reset button resets temperature to 20 degrees and the power saving mode to on', function () {
        $('#reset').click();
        expect(thermostat.powerSavingMode).toEqual(true);
        expect(thermostat.temperature).toEqual(20);
    });

    it('power saving mode turn on reset to 25', function () {
        $('#change_mode').attr('checked', false);
        thermostat.powerSavingMode = false;
        thermostat.temperature = 32;
        $('#change_mode').each(function () {
            $(this).prop('checked', status).click();
        });
        expect('#temperature').toContainText('25');
    });
});

describe('set temperature to specific city', function() {

    it('set temperature to 21 degrees on gothenburg', function () {
        $('#gothenburg_se').click();
        expect('#temperature').toContainText('21');
    });
});