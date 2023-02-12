const sortMerge = require('./sortMerge');

// Median calculator.
function findMedian(data_set)
{
  var sorted_data = sortMerge(data_set);
  var data_len = sorted_data.length;
  if(data_len % 2 === 1)
  {
    var median = sorted_data[Math.floor(data_len/2)];
  } else {
    var value1 = sorted_data[Math.floor(data_len/2)-1];
    var value2 = sorted_data[Math.floor(data_len/2)];
    var median = ((value1 + value2)/2);
  }
  return median;
}

// To do: Mean calculator.
module.exports = findMedian;
