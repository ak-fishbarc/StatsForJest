const statFn = require('./statistics4jest');
const sortMerge = require('./sortMerge');

findMedian = statFn.findMedian;
findMean = statFn.findMean;
enumerateSet = statFn.enumerateSet;
findMode = statFn.findMode;
findStandardDeviation = statFn.findStandardDeviation;


test('Sorts data set.', () =>
{

  var data_set = [5, 18, 9, 22, 30, 1, 8, 2];
  var sorted_set = sortMerge(data_set);
  expect(sorted_set).toStrictEqual([1, 2, 5, 8, 9, 18, 22, 30]);

  var data_set = [11, 5, 6, 18, 17, 2];
  var sorted_set = sortMerge(data_set);
  expect(sorted_set).toStrictEqual([2, 5, 6, 11, 17, 18]);

})

test('Finds median of the data set.', () =>
{

  var data_set = [3, 8, 8, 12, 14, 15, 20, 21, 22];
  expect(findMedian(data_set)).toBe(14);

  var data_set = [3, 5, 6, 20, 20, 21, 23];
  expect(findMedian(data_set)).toBe(20);

  var data_set = [5, 15, 12, 30, 45, 90];
  expect(findMedian(data_set)).toBe(22.5);

  var data_set = [10, 12, 16, 18, 50, 22];
  expect(findMedian(data_set)).toBe(17);

})

test('Finds mean of the data set.', () =>
{

  var data_set = [3, 5, 5, 4];
  expect(findMean(data_set)).toBe(4.25);

  var data_set = [15, 22, 35, 70, 82, 90];
  expect(findMean(data_set).toFixed(2)).toEqual("52.33");

})

test('Finds mode of the data set.', () =>
{

  var data_set = [3, 5, 5, 8, 8, 8, 2, 2];
  expect(findMode(data_set)).toEqual([8]);

  var data_set = [3, 3, 3, 5, 5, 5, 6, 6, 7, 9];
  expect(findMode(data_set)).toEqual([3, 5]);

  var data_set = [2, 2, 4, 4, 4, 5, 5, 5, 5, 2, 2, 2];
  expect(findMode(data_set)).toStrictEqual([2]);

})

test('Find standard deviation of the data set.', () =>
{
  var data_set = [3, 5, 6, 7];
  expect(findStandardDeviation(data_set)).toEqual(1.479019945774904);

  var data_set = [5, 5, 7, 8, 9, 22, 34]
  expect(findStandardDeviation(data_set)).toEqual(10.190031142929719);
})
