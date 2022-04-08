// code your solution here
function saturdayFun(activity = 'roller-skate') {
    let satFun = `This Saturday, I want to ${activity}!`
    return satFun;
};

function mondayWork(activity = 'go to the office') {
    let monActivity = `This Monday, I will ${activity}.`
    return monActivity;
};

function wrapAdjective(adj = '*') {
    return function (phrase = 'special') {
        let adjReturned = `You are ${adj}${phrase}${adj}!`
        return adjReturned;
    }
}