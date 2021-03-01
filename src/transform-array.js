const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  var array = [];
  for(let i = 0; i < arr.length - 1; i++){
    if (arr[i] === '--discard-prev'){
      array.splice(i-1, i-1);
    }
    else if(arr[i] === '--discard-next'){
      i++;
    }
    else if(arr[i] === '--double-next'){
      array.push(arr[i+1]);
    }
    else if(arr[i] === '--double-next'){
      array.push(arr[i-1]);
    }
    else{
      array.push(arr[i]);
    }
  }
  return array;
};
