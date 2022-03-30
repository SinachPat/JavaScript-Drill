// Write a function pow(x,n) that returns x in power n . Or, in other words, multiplies x by
// itself n times and returns the result.

function pow(x, n) {
    //We first store the value of x in a variable called result
    let result = x;
    //Then loop through the multiplication provided the condition inside the loop is met
    for(let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
}

let power = pow(3,2);
console.log(power);
