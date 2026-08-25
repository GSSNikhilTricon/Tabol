const board = document.getElementById('board');
const randBtn = document.getElementById('randBtn');
const numNotice = document.getElementById('numNotice');
const endRes = document.getElementById('endRes')
// const qrcode = new QRCode("qrcode","https://www.geeksforgeeks.org/");

let numbers = []
for (let i = 0; i < 9; i++) {
    let temp = [];
    for (let j = 0; j < 10; j++) {
        temp.push(i * 10 + j + 1);
    }
    numbers.push(temp);
}

function buildBoard(numbers, container) {
    for (let idx in numbers) {
        const colEle = document.createElement('div');
        colEle.id = `Col#${idx}`
        let set = numbers[idx];

        for (let num of set) {
            const numEle = document.createElement('div');
            numEle.className = 'flex-item';
            numEle.id = num;
            numEle.textContent = num;
            colEle.appendChild(numEle);
        }
        container.appendChild(colEle);
    }
}

function getRandomIdx() {
    const colIdx = Math.floor(Math.random() * numbers.length);
    let col = numbers[colIdx];
    const numIdx = Math.floor(Math.random() * col.length)
    const num = col[numIdx];
    console.log(num);

    const ele = document.getElementById(`${num}`);

    numbers[colIdx] = col.filter(n => n !== num);
    numbers = numbers.filter(n => n.length !== 0);

    ele.style.background = 'red';
    numNotice.textContent = num;

    if (numbers.length === 0) {
        endRes.textContent = "Over";
        randBtn.removeEventListener(getRandomIdx());
    }
    
}


buildBoard(numbers, board);

class Board{
    constructor() {
        
    }
}