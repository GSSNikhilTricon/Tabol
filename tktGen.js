const ticketContainer = document.getElementById('ticket');

let s = 25
let rows = 10
let cols = 3

const ticket = [];
for (let i = 0; i < cols; i++) {
    let row = [];
    for (let j = 0; j < rows; j++) {
        row.push('L');
    }
    ticket.push(row);
}

function genRandIndices() {
    let indices = [];
    
    while (indices.length < 5) {        
        let idx = Math.floor(Math.random() * rows)

        if (!indices.includes(idx)) {
            indices.push(idx);
        }
    }
    return indices;
}

function createTktSpaces() {
    for (let row of ticket) {
        let indices = genRandIndices();
        for (let idx of indices) {
            row[idx] = "N";
        }
    }
}

function addNum() {
    console.log(ticket)
    for (let i = 0; i < ticket[0].length; i++){
        let c = 0;
        let indices = [];
        for (let j = 0; j < ticket.length; j++) {
            if (ticket[j][i] == 'N') {
                c++;
                indices.push(j)
            }
        }

        let sample = [];
        for (let i = 0; i < c; i++) {
            let num = getRandomNum();
            sample.push(num)
        }

        sample.sort();

        for (let k = 0; k < c; k++) {
            console.log(i, k);
            console.log(ticket)
            console.log(indices)
            ticket[i][k] = indices[k];
        }

        temp_list = num_list
    }
}

const num_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let temp_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
function getRandomNum() {
    let idx = Math.floor(Math.random() * temp_list.length);
    let num = temp_list[idx];
    temp_list = temp_list.filter(n => n !== num);
    return num;
}
createTktSpaces();

function buildBoard(numbers, container) {
    for (let idx in numbers) {
        const colEle = document.createElement('div');
        colEle.id = `Col#${idx}`
        colEle.style.display = 'flex';
        colEle.style.flexDirection = 'row';
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

buildBoard(ticket, ticketContainer);
addNum();