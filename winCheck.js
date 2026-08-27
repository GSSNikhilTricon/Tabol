const firstFiveCheck = document.getElementById('firstFiveCheck');
const topRowCheck = document.getElementById('topRowCheck');
const midRowCheck = document.getElementById('midRowCheck');
const botRowCheck = document.getElementById('botRowCheck');
const fullBoardCheck = document.getElementById('fullBoardCheck');
const winningCondition = document.getElementById('winningCondition');

const sessionTicketNumsObj = {
    total: 0,
    0: 0,
    1: 0,
    2: 0
};

firstFiveCheck.onclick = () => {
    if (sessionTicketNumsObj['total'] >= 5) {
        winningCondition.textContent = 'First Five success'
    } else {
        winningCondition.textContent = 'First Five No brotha'
    }
}

topRowCheck.onclick = () => {
    if (sessionTicketNumsObj[0] == 5) {
        winningCondition.textContent = 'Top Row success'
    } else {
        winningCondition.textContent = 'Top Row No brotha'
    }
}

midRowCheck.onclick = () => {
    if (sessionTicketNumsObj[1] == 5) {
        winningCondition.textContent = 'Mid Row success'
    } else {
        winningCondition.textContent = 'Mid Row No brotha'
    }
}

botRowCheck.onclick = () => {
    if (sessionTicketNumsObj[2] == 5) {
        winningCondition.textContent = 'Bottom Row success'
    } else {
        winningCondition.textContent = 'Bottom Row No brotha'
    }
}

fullBoardCheck.onclick = () => {
    if (sessionTicketNumsObj['total'] == 15) {
        winningCondition.textContent = 'Full Housie success'
    } else {
        winningCondition.textContent = 'Full Housie No brotha'
    }
}