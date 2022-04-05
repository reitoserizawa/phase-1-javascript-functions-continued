// code your solution here
function saturdayFun (firstParameter = 'roller-skate') {
    return `This Saturday, I want to ${firstParameter}!`
}

const mondayWork = function (doWork = 'go to the office') {
    return `This Monday, I will ${doWork}.`
}

function wrapAdjective (whateverString = '*') {
    return function (whatever='special') {
        return `You are ${whateverString}${whatever}${whateverString}!`
    }
}

// // It should take as parameter a String that will be used to create visual flair
// You may call the parameter whatever you like, but its default value should be "*"
// Call example: const encouragingPromptFunction = wrapAdjective("!!!")