describe('Thermostat', function () {

	var thermostat;

	beforeEach(function () {
		thermostat = new Thermostat();
	});

	describe('Thermostat temperature', function () {

		it("thermostat is 20°C on default", function () {
			expect(thermostat.temp).toEqual(20);
		});

		it("thermostat increase temperature with 1°C to get 21°C", function () {
			thermostat.increaseTemp(1);
			expect(thermostat.temp).toEqual(21);
		});

		it("thermostat decrease temperature with 1°C to get 19°C", function () {
			thermostat.decreaseTemp(1);
			expect(thermostat.temp).toEqual(19);
		});
	});

	describe('power saving mode', function () {

		it('is on by default', function () {
			expect(thermostat.powerSavingMode).toEqual(true);
		});

		it('can be turned off', function () {
			thermostat.changePowerSavingMode(false);
			expect(thermostat.powerSavingMode).toEqual(false);
		});

		it('can be turned on', function () {
			thermostat.powerSavingMode = false;
			thermostat.changePowerSavingMode(true);
			expect(thermostat.powerSavingMode).toEqual(true);
		});

		it('if power saving mode is on = 24°C max', function () {
			thermostat.powerSavingMode = true;
			thermostat.temp = 24;
			expect(function () {
					thermostat.increaseTemp(1);
				}
			).toBeTruthy()
		});

		it('if power saving mode is on = 25°C max', function () {
			thermostat.powerSavingMode = true;
			thermostat.temp = 25;
			expect(function () {
					thermostat.increaseTemp(1);
				}
			).toThrowError('you cant do that')
		});

		it('if power saving mode is off = 31°C', function () {
			thermostat.powerSavingMode = false;
			thermostat.temp = 31;
			expect(function () {
					thermostat.increaseTemp(1);
				}
			).toBeTruthy()
		});

		it('if power saving mode is off = 32°C', function () {
			thermostat.powerSavingMode = false;
			thermostat.temp = 32;
			expect(function () {
					thermostat.increaseTemp(1);
				}
			).toThrowError('you cant do that')
		});

		it('minimum temperature on 10°C', function () {
			thermostat.temp = 10;
			expect(function () {
				thermostat.decreaseTemp(1);

				).
				toThrowError('you cant do that')
			});

		});


	});





//	describe("it has a psm button", function () {
//
//		it("ON by reset", function(){
//			expect(thermostat.psm).toEqual(true)
//		});
//
//		it("can be turned off", function (){
//			thermostat.psm = false;
//			expect(thermostat.psm).toEqual(false)
//		});
//	});
//	describe("max temp", function () {
//
//		it("max temperature = 35°C", function () {
//			expect(thermostat.maxtemp).toEqual(35)
//		});
//	});
//
//	describe("min temp", function () {
//	});
//
//	it("min temperature = 10°C", function () {
//		expect(thermostat.mintemp).toEqual(10)
//	});
});


	



//describe('color status according to temp' , function ()){
//
//	it('shows green if temp less than 18', function ()) {
//		expect(thermostat.colorStatus()).toEqual("green");
//	});
//
//
//	it('shows orange if temp less than 25', function ()) {
//		expect(thermostat.colorStatus()).toEqual("Orange");
//	});
//
//	it('shows red if temp less than 32', function ()) {
//		expect(thermostat.colorStatus()).toEqual("red");
//	});
//thermostat.prototype.colorStatus = function
//if(this.currentTemp < 18 ) {
//return blue etc.

