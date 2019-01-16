function convertToRoman(num) {

    var remainder = (num, amount) => num % amount;
    var amounts = [1000, 500, 100, 50, 10, 5, 1];
    var letters = ["M", "D", "C", "L", "X", "V", "I"];
    var answer;

    var number = num.toString();

    for (var i = 0; i < number.length; i++) {
        var temp;

        //divide num by values in amounts array
        temp = Math.floor(num/amounts[i]);

        //use temp to add letters to answer
        if (temp != 0) {
            for (var j = 0; j < temp; j++ ) {
                answer.push(letters[i]);
            }
        }        

        //get remainder for next iteration
        remainder(num, amounts[i]);
    }

    console.log(answer);
    return answer;
}

convertToRoman(36);
