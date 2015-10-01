// describe ('Javabuzz', function() {
//   var javabuzz;

//     beforeEach(function() {
//       javabuzz = new Javabuzz();
//     });

//     describe('knows when a number is', function () {

//       it('is divisable by 3', function() {
//         expect(javabuzz.isDivisibleByThree(3)).toBe(true)
//       });

//       it('is divisable by 3', function() {
//         expect(javabuzz.isDivisibleByThree(5)).toBe(false)
//       });

//       it('is divisable by 5', function() {
//         expect(javabuzz.isDivisibleByFive(5)).toBe(true)
//       });

//       it('is divisable by 5', function() {
//         expect(javabuzz.isDivisibleByFive(6)).toBe(false)
//       });

//       it('is divisable by 15', function() {
//         expect(javabuzz.isDivisibleByFifteen(15)).toBe(true)
//       });

//       it('is divisable by 15', function() {
//         expect(javabuzz.isDivisibleByFifteen(16)).toBe(false)
//       });
//     });

//     describe('When playing it returns', function() {

//       it('"JavaBuzz" when number is divisable by 15', function() {
//         expect(javabuzz.says(15)).toEqual("JavaBuzz");
//       });

//       it('"Java" when number is divisable by 3', function() {
//         expect(javabuzz.says(3)).toEqual("Java");
//       });

//       it('"Buzz" when number is divisable by 5', function() {
//         expect(javabuzz.says(5)).toEqual("Buzz");
//       });

//       it('Returns number when no condotions are met', function() {
//         expect(javabuzz.says(1)).toEqual(1)
//       });
//     });
// });