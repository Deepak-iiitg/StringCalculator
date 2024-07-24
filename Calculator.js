function Add(numbers) {
    if (!numbers) {
        return 0;
    }
    let delimiterArray = [];
    if (numbers.startsWith("//")) {
        const delimiterLine = numbers.split("\n")[0];
        let delimeter = delimiterLine.substring(2);
        delimiterArray.push(delimeter);
        numbers = numbers.substring(numbers.indexOf("\n") + 1); // Exclude the delimiter line
    }
    //split the numbers with given delimeter
    const nums = numbers.split(new RegExp(`[${delimiterArray}\n]`));
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

//(3) Test case for delimeter \n and comma
console.log(Add("1\n2,3"));
console.log(Add("1\n2,3\n5"));

//(4) Test different delimeter
console.log(Add("//;\n1;2"));