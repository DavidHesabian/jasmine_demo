describe('Thermostat', function () {
    var thermostat;

    beforeEach(function () {
        thermostat = new Thermostat();
    });

    describe('Thermostat temperature', function () {

        it('thermostat is reset to 20 degrees', function () {
            expect(thermostat.temperature).toEqual(20);
        });

        it('is increasing 1 degrees to get 21 degrees', function () {
            thermostat.increaseTemperature(1);
            expect(thermostat.temperature).toEqual(21);
        });

        it('is subtract 1 degrees to get 19', function () {
            thermostat.decreaseTemperature(1);
            expect(thermostat.temperature).toEqual(19);
        });
    });

    describe('power saving mode', function () {

        it('is turned on by default', function () {
            expect(thermostat.powerSavingMode).toEqual(true)
        });

        it('can be turned off', function () {
            thermostat.changePowerSavingMode(false);
            expect(thermostat.powerSavingMode).toEqual(false)
        });

        it('can be turned on', function () {
            thermostat.powerSavingMode = false;
            thermostat.changePowerSavingMode(true);
            expect(thermostat.powerSavingMode).toEqual(true)
        });

        it('if power saving mode in on the maximum temperature is 24 degrees', function () {
            thermostat.powerSavingMode = true;
            thermostat.temperature = 24;
            expect(function () {
                    thermostat.increaseTemperature(1);
                }
            ).toBeTruthy()
        });

        it('if power saving mode in on the maximum temperature is 25 degrees', function () {
            thermostat.powerSavingMode = true;
            thermostat.temperature = 25;
            expect(function () {
                    thermostat.increaseTemperature(1);
                }
            ).toThrowError("No can do!");
        });


        it('if power saving mode in off the maximum temperature is 31 degrees', function () {
            thermostat.powerSavingMode = false;
            thermostat.temperature = 31;
            expect(function () {
                    thermostat.increaseTemperature(1);
                }
            ).toBeTruthy();
        });

        it('if power saving mode in off the maximum temperature is 32 degrees', function () {
            thermostat.powerSavingMode = false;
            thermostat.temperature = 32;
            expect(function () {
                    thermostat.increaseTemperature(1);
                }
            ).toThrowError("No can do!");
        });

        it('thermostat can not be decreased below 10 degrees', function () {
            thermostat.temperature = 10;
            expect(function () {
                    thermostat.decreaseTemperature(1);
                }
            ).toThrowError("No can do!");
        });

        it('reset button resets temperature to 20 degrees and the power saving mode to on', function () {
            thermostat.reset();
            expect(thermostat.powerSavingMode).toEqual(true);
            expect(thermostat.temperature).toEqual(20);
        });

        it('resets temperature to 25 if temperature is 30 degrees and power saving mode is turned on', function () {
            thermostat.powerSavingMode = false;
            thermostat.temperature = 30;
            thermostat.changePowerSavingMode(true);
            expect(thermostat.temperature).toEqual(25);
        });

        it('resets temperature to 25 if temperature is 22 degrees and power saving mode is turned on', function () {
            thermostat.powerSavingMode = false;
            thermostat.temperature = 22;
            thermostat.changePowerSavingMode(true);
            expect(thermostat.temperature).toEqual(22);
        });
    });

    describe('color status', function () {

        it('display green if less than 18', function () {
            thermostat.temperature = 16;
            expect(thermostat.colorStatus()).toEqual("Green");
        });

        it('display orange if less 25', function () {
            thermostat.temperature = 22;
            expect(thermostat.colorStatus()).toEqual("Orange");
        });

        it('display red if less 32', function () {
            thermostat.temperature = 28;
            expect(thermostat.colorStatus()).toEqual("Red")
        });
    });
});