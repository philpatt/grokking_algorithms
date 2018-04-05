'use strict';

function binary_search(list, item) {
  let low = 0;
  let high = list.length - 1;
  console.log('item is', item)
  while (low <= high) {
    console.log('low',low,'high',high);
    let mid = Math.floor((low + high) / 2); //mid index stars at [ 2 ] for this example
    console.log('mid is low + high / 2 =',mid);
    
    let guess = list[mid]; // since mid starts at 5, guess is 5
    console.log('new guess is list['+mid+'] = ',guess)
    if (guess === item) {
      console.log('guess matches item',guess,'===',item);
      return 'exit';
    }
    if (guess > item) {
      high = mid - 1;
      console.log('guess of',guess, '> the item', item,'change high to mid - 1, high =',high);      
    } else {
      low = mid + 1;
      console.log('guess of', guess, '< the item', item,'change low to mid + 1, low =',low);            
      
    }
  }
  
  return null;
}

const my_list = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 3)); // 1
// console.log(binary_search(my_list, -1)); // null
