describe ('Thermostat', function() {
	var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat();
	});

	describe('thermostat start at 20 degrees', function () {

		it('is reset to 20 degrees', function() {
			expect(thermostat.has(20)).toBe(20);
		});
  });

  describe('thermostat temprature increased to 21', function() {

    it('is add 1 degrees to get 21 degrees', function() {
      expect(thermostat.add(1)).toEqual(21);
    }); 
  });



  // describe('thermostat increase temprature with 1', function() {

  //   it('increase temprature with 1', function(){
  //     expect(thermostat.has(1)).toBe(21)
  //   });
  // });
});