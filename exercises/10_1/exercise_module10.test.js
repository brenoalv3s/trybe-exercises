const sum = require('./exercise-1.js', './exercise-2.js', './exercise-3.js', './exercise-4.js', './exercise-5.js');

describe('The sum (a, b) function returns the sum of parameter a and b', () => {

	test('if the sum return (4, 5) is 9', () => {
		expect(sum(4,5)).toBe(9);
	});

	test('if the sum return (0, 0) is 0', () => {
		expect(sum(0, 0)).toBe(0);
	}); 
	
	test('if the sum function throws an error when the parameters are 4 and "5" (string 5)', () => {
		expect(() => {
			sum(4,'5');
	}).toThrow();
});

test('if the sum function throws an error when the parameters are 4 and "5" (string 5)', () => {
	expect(() => {
		sum(4,'5');
}).toThrow(/parameters must be numbers/);
});
});

const myRemove = require('./exercise-2.js');
const myRemoveWithoutCopy = require('./exercise-3.js');
const myFizzBuzz = require('./exercise-4.js');
const comparingObjects = require('./exercise-5.js');
const objects = require('./exercise-5.js');

describe('myRemove', () => {
  test('returns a new array without the item if the item belongs to it', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('returns the correct array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('does not change the passed array', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 1);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  test('returns an identical array if the item does not belong to it', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('myRemoveWithoutCopy',() => {

	it('expected return the array', () =>{
		expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
	});

	it('Does not return the expected array', () => {
		expect(myRemoveWithoutCopy([[1, 2, 3, 4], 3])).not.toEqual([[1, 2, 3, 4]]);
	});

	it('check if the array passed by parameter has changed', () => {
		const array = [1, 2, 3, 4];
		myRemoveWithoutCopy(array, 1);
		expect(array).toHaveLength(3);
	});

	it('Checks whether the function call returns the expected array', () => {
		expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
	});
});

describe('myFizzBuzz', () => {

	test('if the number is divisible by 3 and 5', () => {
		expect(myFizzBuzz(15)).toBe('fizzbuzz');
 });

 test('if the number is divisible by 3', () => {
	expect(myFizzBuzz(9)).toBe('fizz');
 });

 test('if the number is divisible by 5', () => {
	expect(myFizzBuzz(500)).toBe('buzz');
 });

 test('number that is not divisible by 3 or 5', () => {
	 const num = 14;
	expect(num % 3 === 0 && num % 5 === 0).toBeFalsy();
 });

 test('returns false if the argument is not a number', () => {
	expect(myFizzBuzz(typeof num !== 'number')).toBeFalsy();
 });
});

test("comparing objects", () => {
  expect(comparingObjects.obj1 === comparingObjects.obj3).toBeTruthy();
  expect(comparingObjects.obj1 !== comparingObjects.obj2).toBeFalsy();
});
