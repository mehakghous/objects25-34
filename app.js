// MATH METHODS

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = prompt("enter any decimal number");
// alert("number :"+num);
// var round1 = Math.round(num);
// alert("round of value :"+round1);
// var round2 = Math.floor(num);
// alert("floor value :"+round2);
// var round3 = Math.ceil(num);
// alert("ceil value :"+round3);

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = prompt("enter any negative decimal number");
// alert("number : "+num);
// var round1 = Math.round(num);
// alert("round of value : "+round1);
// var round2 = Math.floor(num);
// alert("floor value : "+round2);
// var round3 = Math.ceil(num);
// alert("ceil value : "+round3);



// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// var absolute = prompt("inter an integer");
// var absValue = Math.abs(absolute);
// alert("the absolute value of " + absolute +" is " + absValue)


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var dice = Math.random();
// var actualDice = dice*6 +1;
// var printDice = Math.floor(actualDice);
// alert(printDice);

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var coinFlip =  Math.random() +1  ;
// coinFlip = Math.round(coinFlip);
// var choosed = prompt("Heads or Tails?");
// if (coinFlip == 1) {
//    var flipResult = "heads"
// } else {
//     var flipResult = "tails"  
// }

// if (flipResult == choosed) {
//     if (flipResult == "heads") {
//         alert("you chose heads the coin is heads you won")
//     } else {
//         alert("you chose tails the coin is tails you won")
//     }

// } else {
//     if (flipResult == "heads") {
//         alert("you chose heads the coin is tails you looose!")
//     } else {
//         alert("you chose tails the coin is heads you loose!")
//     }
// }
   

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var randomNo = Math.random();
// var betweenOneAndHundred = randomNo*100 +1;
// betweenOneAndHundred = Math.round(betweenOneAndHundred);
// alert(betweenOneAndHundred);


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight = prompt("enter your weight in kilograms");
// var match = false;
// for (let i = 0; i< weight.length; i++) {
    
//     if (weight[i] == "k") {
//         weight = parseFloat(weight);
//         alert("your weight is "+weight + " kilograms");
//         match = true;
//      break;
//     }
  
// }
// if (match !=true) {
//     alert("enter weight in 'kgs'");
// }


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
// var userInput = parseInt(prompt("enter a no. between 1 to 10 "))
//  var randomNo = Math.random();
//  randomNo = randomNo*10 +1;
//  randomNo = Math.round(randomNo);
//  if (randomNo == userInput) {
//      alert("yayy!! you made it");
//  } else {
//     alert("OOPPSS!! Try Again")
// }

// DATE METHODS

// var date = new Date();
// alert(date);

// 2. Write a program that alerts the current month in words.
// For example December. 
// var twelveMonths = ['january','february','march','april','may','june','july','august','september','october','november','december']
// var rightnow = new Date()
// var month = rightnow.getMonth()
// var monthMatch = twelveMonths[month]
// alert("Current month: " + monthMatch);


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
// var days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
// var rightnow = new Date();
// var today = rightnow.getDay();
// var dayMatch = days[today];
// var firstThree = dayMatch.slice(0,3);
// alert("Today is "+firstThree);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// var rightnow = new Date();
// var today = rightnow.getDay();
// if (today == 5 || today == 6) {
//     alert("It's a FunDay!!!")
// }
// else{
//     alert("Plan your weekend to enjoy when it comes:)")

// }


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16 th of the month
// else shows “Last days of the month”.

// var rightnow= new Date();
// var date = rightnow.getDate();
// if (date < 16) {
    // alert("first fifteen days of the month");
// 
// } else {
    // alert("last days of the month");
    // 
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var rightNow = new Date();
// var sec = rightNow/1000;
// var min = sec/60;
// alert("the no of minutes are : "+Math.round(min));



// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
// var rightnow = new Date();
// var time = rightnow.getHours();
// if (time <12) {
//     alert("it's AM")
// }else{
//     alert("it's PM")

// }


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
// var laterDate = new Date("Dec 31,2021");
// alert(laterDate);


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1 st Ramadan?
// Note: 1 st Ramadan was on June 18, 2015


// var ramadanDate = new Date("april 14, 2021");
// var today = new Date();
// var noOfDays = Math.round((today - ramadanDate) / (1000*60*60*24));
// alert("no of days passed from first ramadan is :" + noOfDays);



// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
// var previous = new Date("jan 1, 2015");
// var today = new Date();
// var secs = (today-previous)/1000;
// alert("on reference to date "+ today +" "+ Math.round(secs) + " seconds have passed");


// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
// var rightNow = new Date();
// var after = new Date()
// var a = after.getHours()+1;
// after.setHours(a)

// alert("time rightNow is " + rightNow+ " time after an hour will be: " +after);



// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var today = new Date();
// var backThen = new Date();
// backThen.setYear(1921);
// alert("current date "+today+" date hundred years back "+backThen)


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
// var age = +prompt("enter your age");
// var today = new Date();
// var year = today.getFullYear();

// alert("your age is "+ age +" your birth year is "+ (year-age));

// 
// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
// var twelveMonths = ['january','february','march','april','may','june','july','august','september','october','november','december']
// var customerName = "ABC" 
// var units = 410;
// var chargesPerUnit = 16;
// var date = new Date();
// var month = date.getMonth();
// var monthName = twelveMonths[month];
// var netAmount = units*chargesPerUnit;
// var latePaymentSurcharge = 350;
// var dueDate = new Date("22 june,2021");
// dueDate.setMonth(month)
// var todaysdate = new Date()
// var checkDate = dueDate-todaysdate
// var charges;
// var match = false
// if (checkDate < 0 ) {
//      charges = netAmount+latePaymentSurcharge;
//     match = true;
// }
// if (match != true ) {
//     charges = netAmount
// }
// document.write(`Customer Name: ${customerName} <br>
// Month: ${monthName} <br>
// Number of Units: ${units} <br>
// Charges per unit: ${chargesPerUnit} <br>
// Due date : ${dueDate} <br>
// todays date : ${todaysdate}
// Net amount payablle within due date : ${netAmount}<br>
// Late payment surcharge: ${latePaymentSurcharge}<br>
// Gross Amount Payable After due date: ${netAmount+latePaymentSurcharge} <br>
// Amount Payable Today: ${charges}
// `)




