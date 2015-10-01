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

    it('reset button resets temperature to 20 degrees and the power saving mode to on', function () {
        $('#reset').click();
        expect(thermostat.powerSavingMode).toEqual(true);
        expect(thermostat.temperature).toEqual(20);
    });
});