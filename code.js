function convertToRoman(num) {

    var remainder = (num, amount) => num % amount;
    var amounts = [1000, 500, 100, 50, 10, 5, 1];
    var letters = ["M", "D", "C", "L", "X", "V", "I"];
    var answer;

    var number = num.toString();

    for (var i = 0; i < number.length; i++) {
        var temp;
        //divide num by array roman amounts
        temp = Math.floor(num/amounts[i]);
        //assign amount to temp var
        //use temp to add letters to answer
    }
    






 return num;
}

convertToRoman(36);
