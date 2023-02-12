/* Merge sort as learned from:
https://medium.com/geekculture/merge-sort-an-explanation-of-it-b7c76108fc9b
*/

function mergeSet(l, h)
{
  var sorted_set = [];
  var i = 0;
  var j = 0;
  while(i < l.length && j < h.length)
  {
    if(h[j] > l[i])
    {
      sorted_set.push(l[i]);
      i += 1;
    } else {
      sorted_set.push(h[j]);
      j += 1;
    }
  }
  while(i < l.length)
  {
    sorted_set.push(l[i]);
    i += 1;
  }
  while(j < h.length)
  {
    sorted_set.push(h[j]);
    j += 1;
  }
  return sorted_set;
}

function sortMerge(data_set)
{
  if(data_set.length > 1)
  {
    var pivot = Math.floor(data_set.length/2);
    var l = sortMerge(data_set.slice(0, pivot));
    var h = sortMerge(data_set.slice(pivot));
    return mergeSet(l, h);
  } else {
    return data_set;
  }
}

module.exports = sortMerge;
