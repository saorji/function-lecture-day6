let jonSnowHealth = 100;
// jonSnowHealth = 100 + ''
// console.log(jonSnowHealth)
// jonSnowHealth = String(jonSnowHealth)
// console.log(jonSnowHealth)

let theWinnerIs = `Jamie is the winner`

// let newWinner = theWinnerIs.toLowerCase().replace('Jamie','Jon')

// saving to a new variable
let newWinner = theWinnerIs.replace('Jamie','Jon')
console.log(theWinnerIs)

//convert-string-to-kebab-case

// newWinner = newWinner.toLowerCase().replaceAll(' ', '-')
// console.log(newWinner)

// let newWinnerSplit = newWinnerLower.split(' ')
// let newWinnerLower = newWinner.toLowerCase()
// let newWinnerKebab = newWinnerSplit.join('-')

let newWinnerKebab = newWinner.toLowerCase().split(' ').join('-')

// console.log(newWinner, '----------', newWinnerKebab)


// Function

// lets create a function that will check to see if Jon's alive

function isJonAlive(){
    if(jonSnowHealth > 0) {
        console.log(`Jon is alive`)
    } else {
        console.log(`RIP Jon Snow.`)
    }
}
// isJonAlive()

// lets create a function that will be used everytime jon is attacked

function surpriseAttack(attack){
    jonSnowHealth -= attack
    isJonAlive()
    // return jonSnowHealth
}

surpriseAttack(21)
surpriseAttack(13)
surpriseAttack(32)
surpriseAttack(26)
surpriseAttack(27)

// create a function that allows two people to greet each other

function greeting(person1, person2){
    console.log(`${person1} says hi to ${person2}`)
}

greeting('Sam','Jamie')