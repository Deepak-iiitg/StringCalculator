function Add(numbers){
    if(!numbers){
        return 0;
    }
    let delimiterArray = [];
    let delimiter = ',';
    delimiterArray.push(delimiter);
    const nums = numbers.split(new RegExp(`[${delimiterArray}]`));
    let sum = 0;
    for(let num of nums){
        if(num !== ''){
           sum += parseInt(num);
        }
    }
    return sum;
}
// (1) Test cases :- "", "1" , "1,2"
console.log(Add(""));
console.log(Add("1"));
console.log(Add("1,2"));