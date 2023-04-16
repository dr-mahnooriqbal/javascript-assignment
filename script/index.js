
// *assignment 2 part 1 Javascript submission dated 7 april*

// var zakatpercentage=0.025;
// var UserInput=+prompt("enter your income:");
// var result = zakatpercentage * UserInput;
//alert(`Your Zakat value is ${result}`);

//*assignment 2-part 2 javascript submission dated 16 apr//*

// var familymembers = +prompt("enter number of your family members:");
// var FitrahMethod = +prompt("Choose respective number of commodity(1-4) for Fitra method: \n1. wheat 2.5kg= Rs250 \n2. barley 3.5kg= Rs450 \n3. dates 3.5kg= Rs2100 \n4. Raisin 3.5kg= Rs 2800")


// if (FitrahMethod == "1") {
//     MethodPrice = 250;
// }

// else if (FitrahMethod == "2") {
//     MethodPrice = 450;
// }

// else if (FitrahMethod == "3") { MethodPrice = 2100; }

// else if (FitrahMethod == "4") { MethodPrice = 2800; }
// else {
//     alert("Invalid input. Please choose number between 1 to 4.");
// }


// var result = MethodPrice * familymembers;
// alert(`Your fitra value is ${result}`);

//*assignment 2-part 3 javascript dated 11 apr

// secretnumber

// var secretNumber = 6;

// var userGuess = +prompt("Guess the secret number (between 1 and 10):");

// if (userGuess == secretNumber) {

//     alert("Congratulations! You guessed the secret number.");
// } else if (userGuess < secretNumber) {

//     alert("Your guess is too low. Please guess again.");
// } else {

//     alert("Your guess is too high. Please guess again.");
// }

//*assignment 2-part 4 javascript dated 11 apr
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

// var userName = prompt("Enter your Name:");
// // var userName = userName.toLowerCase();
// var userName = userName[0].toUpperCase() + userName.slice(1);
// alert(userName)

    //* assignment 2 - part 5 javascript dated 11 apr

  //  In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.


// let contactNumbers = []
// let contactNames = []


// for (i = 1; i <= 3; i++) {
//    var number = +prompt("Enter contact number")
//     contactNumbers.push(number)
//     va name = prompt("Enter contact name")
//     contactNames.push(name)
// }

//     alert(contactNumbers + ":" + contactNames )

 //* assignment 2 - part 6 javascript dated 11 apr
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

// var Products =[ "phone" , "battery" , "earpods" , "earphones" , "datacable" ]
// alert ( Products)
// var Products1 = +prompt(  'enter the respective number of product you want to remove')
// var RemovedProduct = Products.splice(+Products1,1)
// alert( 'removedproduct:'  + RemovedProduct)
// alert( 'remaining items \n'  +Products)
// alert( 'total no of remaining items:'  +Products.length)


/* assignment 2 - part 7 javascript dated 11 apr

Create a program that asks the user for their nationality, gender, and age using the prompt
function. The program should then use nested if-else statements to determine if the
person is eligible to vote

var Nationality = prompt( ' Enter yur nationality')
var Gender = prompt( ' Enter your gender' )
var Age = +prompt( 'How old are you?')

if( Nationality =='pakistani' || Nationality =='indian' ) {
    if( Gender== 'male' && Age >= 18){
    
        alert( 'Hurray!You are eligible to cast your vote')
}
else if (Gender== 'female' && Age >= 18 ){
    var MaritalStatus= prompt( 'Whats your marital status?') 
    if ( MaritalStatus== 'married'){
        alert('Hurray!You are eligible to cast your vote')
    }
    else {
        alert( 'Sorry,You are not eligible to cast your vote')
}
    
}
else{
    
}

}


else (
    alert( 'you are not eligible to cast your vote')


    // /* assignment 2 - part 8 javascript dated 11 apr
    You have an array of that contains the name of Pakistani Teams Player selected for
WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
India, So make an array of final team players (11 Players) that will be playing in tomorrows
match from the WorldCupSquad array.


// var WorldCupSquad = [   "Ali" , "Asad" , "shoaib" , "Yousuf" , "hamza" , "hassan" , "Rameez" , "ahmed" , "shaheen" ,"Zaki" , "sarim" , "huzaifa" , "usman" , "abdullah" , "abdurrehman"]
// alert( "display Worldcup squad:" + " " +WorldCupSquad)
// var SelectedPlayers = WorldCupSquad.slice(4,15 )

// alert( ' display final team members:' +" " + SelectedPlayers)
