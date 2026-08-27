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

const picked_nums_set = new Set();
const picked_nums_arr = [];

function pickNum() {
    let num = getRandomIdx();
    picked_nums_set.add(`${num}`);
    if (picked_nums_arr.length == 5) {
        picked_nums_arr.shift();
    }
    picked_nums_arr.push(num);
    
    const ele = document.getElementById(`${num}`);
    ele.style.background = 'red';
    showRecentPickedNum(picked_nums_arr);

    if (numbers.length === 0) {
        endRes.textContent = "Over";
        randBtn.removeEventListener(getRandomIdx());
    }
}

function showRecentPickedNum(arr) {
    let str = ''
    arr.forEach(ele => {
        str = ele + " " + str;
    }); 
    numNotice.textContent = str;
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