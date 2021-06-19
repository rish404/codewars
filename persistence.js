// Question:
// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit

// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//  1*2*6 = 12, and finally 1*2 = 2

// persistence(4) === 0 // because 4 is already a one-digit number



//Solution 1
//Solution 1
function persistence(num) {
    var arr = num.toString().split('');
    console.log(arr)
    var count = 0;
    var product;
    
    while (arr.length > 1) {
      product = arr.reduce(function(a, b) {
        return a * b;
      });
      console.log(product)
      
      count++;
      arr = product.toString().split('');
      
      console.log(arr)
    }
    
    return count;
  }
    console.log(persistence(39))



    // Solution 2
function persistence(num, counter = 0) {
    if(num.toString().length === 1) return counter;
        num = num.toString().split('').reduce((x,y) => x * y)
       counter++;
       return persistence(num, counter)
     }
    
     console.log(persistence(39))