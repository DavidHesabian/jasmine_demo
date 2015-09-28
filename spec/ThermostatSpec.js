describe ('Thermostat', function() {
	var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat();
	});

	describe('thermostat start at 20 degrees', function () {

		it('starts at 20 degrees', function() {
			expect(thermostat.has(20)).toBe(20)
		});

    it('', function() {
      expect( ()).toBe ()
    }); 
	});

  describe('thermostat increase temprature with 1', function() {

    it('increase temprature with 1', function(){
      expect(thermostat.has(1)).toBe(21)
    });
  });

});