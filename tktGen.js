const ticketContainer = document.getElementById('ticket');

let s = 25
let rows = 9
let cols = 3

function buildBaseTicket(rows, cols) {
    let ticket = [];
    for (let i = 0; i < cols; i++) {
        let row = [];
        for (let j = 0; j < rows; j++) {
            row.push('-1');
        }
        ticket.push(row);
    }
    return ticket;
}
let ticket = buildBaseTicket(rows, cols);

function genRowIndices() {
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
        let indices = genRowIndices();

        for (let idx of indices) {
            row[idx] = "N";
        }
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

function addNum(ticket) {
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
        let k = 0;
        while (k < c) {
            let num = getRandomNum() + 10 * i;
            if (num !== 0) {
                sample.push(num);
                k++;
            }
        }

        sample.sort();

        for (let k = 0; k < c; k++) {
            ticket[indices[k]][i] = sample[k];
        }

        temp_list = num_list

    }

    return ticket
}

function buildBoard(numbers, container) {
    for (let idx in numbers) {
    const rowEle = document.createElement('tr');
    rowEle.id = `Row#${idx}`
    let set = numbers[idx];

    for (let num of set) {
        const numEleCont = document.createElement('td');
        const numEle = document.createElement('button');
        numEle.id = num;
        numEle.textContent = num;
        numEleCont.appendChild(numEle);
        rowEle.appendChild(numEleCont);
    }
    container.appendChild(rowEle);
}
}

createTktSpaces();
ticket = addNum(ticket);
buildBoard(ticket, ticketContainer);