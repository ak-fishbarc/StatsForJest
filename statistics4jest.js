const sortMerge = require('./sortMerge');

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

function findMean(data_set)
{
  var sorted_data = sortMerge(data_set);
  var sum_up = 0;
  var d_mean = 0;
  for(value of sorted_data)
  {
    sum_up += value;
  }
  d_mean = sum_up / sorted_data.length;
  return d_mean;
}

// Count how many times specific numbers occur in the set.
function enumerateSet(data_set)
{
  var enumerated = new Map();
  for(value of data_set)
  {
    if(enumerated.get(value))
    {
      var num = enumerated.get(value);
      num += 1;
      enumerated.set(value, num)
    } else {
      enumerated.set(value, 1);
    }
  }
  return enumerated;
}

function findMode(data_set)
{
  var sorted_data = data_set;
  var enum_data = enumerateSet(data_set);

  var mode = 0;
  var pointer = 0;
  var mode = [];

  /* Look at each number in enumerated data.
  If the number's count is higher than current pointer
  make it a new pointer; If there are any numbers in mode,
  clear it as they are no longer the most occuring numbers
  in the data set. Add new value to an empty mode list. */
  for(key of enum_data)
  {
    if(pointer === 0)
    {
        pointer = key;
        mode.push(key[0]);
    } else {
        if(key[1] > pointer[1])
        {
            if(mode.length > 0)
            {
                mode = [];
            }
            pointer = key;
            mode.push(key[0]);
        } else if(key[1] === pointer[1]) {
            mode.push(key[0]);
        }
    }
  }
  return mode;
}

module.exports = { findMedian, findMean, findMode, enumerateSet }
