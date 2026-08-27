const board = document.getElementById('board');
const randBtn = document.getElementById('randBtn');
const numNotice = document.getElementById('numNotice');
const endRes = document.getElementById('endRes')

// const qrcode = new QRCode("qrcode","https://www.geeksforgeeks.org/");

function createBoardNumArray(rows, cols) {
    let numbers = []
    for (let i = 0; i < rows; i++) {
        let temp = [];
        for (let j = 0; j < cols; j++) {
            temp.push(i * 10 + j + 1);
        }
        numbers.push(temp);
    }
    return numbers;
}
let numbers = createBoardNumArray(9, 10)


function getRandomIdx() {
    const colIdx = Math.floor(Math.random() * numbers.length);
    let col = numbers[colIdx];
    const numIdx = Math.floor(Math.random() * col.length)
    const num = col[numIdx];

    numbers[colIdx] = col.filter(n => n !== num);
    numbers = numbers.filter(n => n.length !== 0);
    return num;
}

const picked_nums = new Set();

function pickNum() {
    let num = getRandomIdx();
    picked_nums.add(`${num}`);
    
    const ele = document.getElementById(`${num}`);
    ele.style.background = 'red';
    numNotice.textContent = num;

    if (numbers.length === 0) {
        endRes.textContent = "Over";
        randBtn.removeEventListener(getRandomIdx());
    }
}

randBtn.onclick = () => {
    pickNum();
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

buildBoard(numbers, board);