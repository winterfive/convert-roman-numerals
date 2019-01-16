function convertToRoman(num) {

    var remainder = 0;
    const amounts = [1000, 500, 100, 50, 10, 5, 1];
    const letters = ["M", "D", "C", "L", "X", "V", "I"];
    var answer = [];
    var result = "";

    var length = num.toString().length;

    for (var i = 0; i < length; i++) {
        var temp = 0;
        num = remainder;

        //divide num by values in amounts array
        temp = Math.floor(num/amounts[i]);

        //use temp to add letters to answer
        if (temp != 0) {
            for (var j = 0; j < temp; j++ ) {
                answer.push(letters[i]);
            }
        }        

        //get remainder for next iteration
        remainder = num % amounts[i];
    }

    console.log(answer);

    result = answer.join("");
    return result;
}

convertToRoman(36);
