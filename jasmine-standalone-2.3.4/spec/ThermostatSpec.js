describe('Thermostat', function() {
	 var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat();
	});
	
	it("is reset at 20degrees", function () {
		expect(thermostat.temp).toEqual(20)
	});

	describe("max temp", function () {
		
		it("max temperature = 35 degrees", function () {
			expect(thermostat.maxtemp).toEqual(35)
		});
	});
	
	describe("min temp", function () {
	});

	it("min temperature = 10 degrees", function () {
		expect(thermostat.mintemp).toEqual(10)
	});
});


