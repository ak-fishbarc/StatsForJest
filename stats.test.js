const findMedian = require('./statistics4jest');

test('Finds median of the data set.', () => {
  var data_set = [3, 8, 8, 12, 14, 15, 20, 21, 22];
  expect(findMedian(data_set)).toBe(14);
  var data_set = [3, 5, 6, 20, 20, 21, 23];
  expect(findMedian(data_set)).toBe(20);
  var data_set = [5, 15, 12, 30, 45, 90];
  expect(findMedian(data_set)).toBe(22.5);
  var data_set = [10, 12, 16, 18, 50, 22];
  expect(findMedian(data_set)).toBe(17);
})
