function diceRoll(){
    var die1 = document.getElementById("die1")
    var result = document.getElementById("result")
    var roll = document.getElementById("roll")

    var randomNumber = Math.floor(Math.random()* 100) + 1;
    document.getElementById("demo").innerHTML = "You Rolled: " + randomNumber;

    if (randomNumber > 59) {
        document.getElementById("demo").innerHTML = "You rolled: " + randomNumber + " You Win! Congrats!"
    }
    else {
        document.getElementById("demo").innerHTML = "You rolled: " + randomNumber + " You Lose! Loser!"
    }
    

}
