// code your solution here

function saturdayFun(toDo = "roller-skate") {
    return `This Saturday, I want to ${toDo}!`
}
saturdayFun();


function  mondayWork(toDo = 'go to the office') {
    return `This Monday, I will ${toDo}.`
}
mondayWork();


function wrapAdjective(flair = '*') {
    return function (text = 'a dedicated programmer') {
        return `You are ${flair}${text}${flair}!`;
    }
}