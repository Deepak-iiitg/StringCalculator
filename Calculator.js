function Add(numbers) {
    if (!numbers) {
        return 0;
    }
    let delimiterArray = [];
    let delimeter = ',';
    delimiterArray.push(delimeter);
    //split the numbers with given delimeter
    const nums = numbers.split(new RegExp(`[${delimiterArray}]`));
    let sum = 0;
    
    for (let num of nums) {
        if (num.trim() !== '') {
            const n = parseInt(num);
            sum += n;
        }
    }
    return sum;
}

//(1) simple Test cases "","1","1,2"
console.log(Add(""));
console.log(Add("1"));
console.log(Add("1,2"));

//(2) Test Known amount of numbers
console.log(Add("1,2,3,10,12,188"));
console.log(Add("10,20,1,9,1,1,1,13"));
