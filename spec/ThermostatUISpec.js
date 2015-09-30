describe('ThermostatUI', function () {

    beforeEach(function () {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
    })

    it('update current temp with current temp', function () {
        expect('#current').toContainText(20)

    });

});
