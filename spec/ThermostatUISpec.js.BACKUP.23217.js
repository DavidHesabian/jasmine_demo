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
<<<<<<< HEAD
        $('#change_mode').each(function(){
=======
        $('#change_mode').each(function () {
>>>>>>> 9c4ed7134241b663644e2b65966ffb68461c0e56
            $(this).prop('checked', status).click();
        });
        expect('#temperature').toContainText('25');
    });
<<<<<<< HEAD

});


describe('City temperature', function () {

    it('sets temperature to 21°C on city', function () {
        thermostat.city = 21;
        expect('#city').toEqual(21);
    });
});
=======
});

describe('Weather API', function (){

    it('sets the correct city value to gothenburg when selected from drop-down menu', function (){
        $('#current_city')
            .val("gothenburg,se")
            .trigger("change");
        expect($('#city').html()).toEqual();
    });

    it('user chooses a city and the cities temperature and wind speed is shown', function(){
       $('#search')
           .val("stockholm,se")
           .trigger("blur");
        expect($('#search').html()).toEqual();
    });
});
>>>>>>> 9c4ed7134241b663644e2b65966ffb68461c0e56
