function Add(numbers) {
    if (!numbers) {
        return 0;
    }
    let delimiterArray = [];
    // Check if custom delimiter is specified
    if (numbers.startsWith("//")) {
        const delimiterLine = numbers.split("\n")[0];
        let i=0;
        while(i<delimiterLine.length){
            if(delimiterLine[i] === '['){
                let delimiter = '';
                let j = i+1;
                while(j<delimiterLine.length && delimiterLine[j]!==']'){
                    delimiter += delimiterLine[j];
                    j++;
                }
                if(delimiter !== '')
                   delimiterArray.push(delimiter);
                i = j;
            }else{
                i++;
            }
        }
        if(delimiterArray.length == 0){
            delimiter = delimiterLine.substring(2);
            delimiterArray.push(delimiter);
        }
        numbers = numbers.substring(numbers.indexOf("\n") + 1); // Exclude the delimiter line
    }else{
        //if custom delimeter is not given
        delimiterArray.push(',');
    }
    //split the numbers with default \n and given delimeter
    const nums = numbers.split(new RegExp(`[${delimiterArray}\n]`));
    let sum = 0;
    let negatives = [];
    for (let num of nums) {
        if (num.trim() !== '') {
            const n = parseInt(num);
            if (n < 0) {
                negatives.push(n);
            } else if (n <= 1000) {
                sum += n;
            }
        }
    }

    // Throw exception for negative numbers
    
    if (negatives.length > 0) {
        throw new Error("negatives not allowed: " + negatives.join(", "));
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

//(3) Handle \n given inbetween number.
//Test Cases
console.log(Add("1\n2,3"));
console.log(Add("2\n10,4\n15"));

//(4) Handle differnt delimeter
//Test Cases
console.log(Add("//;\n1;2"));

//(5) If Number is negative throw error
//Test Cases
//console.log(Add("-19,-20,10"));

//(6) Ignore Number Greater than 1000
//Test Case
console.log(Add("1,2,3,10,12,1888"));

//(7) Handled delimeter with any length
//Test Cases
console.log(Add("//[***]\n1***2***3"));
