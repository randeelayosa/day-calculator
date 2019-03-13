import { letRun, calcDay } from './../src/date.js';

describe('letRun', function() {

  it('should fail if user inputs a non-valid date', function() {
    const ran = letRun('asdf','03','99');
    expect(ran).toEqual(false);
  });

  it('should pass if user inputs a valid date', function() {
    const ran = letRun('2019','03','13');
    expect(ran).toEqual(true);
  });

});

describe('calcDay', function() {

  const date = new Date('2019-03-13');

  it('should return the day of the week for a date', function() {
    const day = calcDay(date);
    expect(day).toEqual("Wednesday");
  });

});
