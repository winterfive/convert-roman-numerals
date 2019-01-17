function convertToRoman(num) {

    var remainder = 0;
    const amounts = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const letters = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var answer = [];
    const arrSize = amounts.length;

    for (var i = 0; i < arrSize; i++) {
        var temp;        

        //divide num by values in amounts[]
        temp = Math.floor(num/amounts[i]);

        //use temp to add letters to answer
        if (temp >= 1) {
            for (var j = 0; j < temp; j++) {
                answer.push(letters[i]);
            }
        }     

        //get remainder for next iteration
        remainder = num % amounts[i];
        num = remainder;
    }

    var result = answer.join("");
    console.log(result);
    return result;
}

convertToRoman(400);
