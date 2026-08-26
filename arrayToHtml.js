class GenerateHtml {
    constructor(type, rows, cols, elements, container) {
        this.type = type;
        this.rows = rows;
        this.cols = cols;
        this.elements = elements;
        this.container = container;
    }

    build() {
        if (this.type === 'ticket') {
            for (let idx in this.elements) {
                const rowEle = document.createElement('tr');
                rowEle.id = `Row#${idx}`
                let set = this.elements[idx];

                for (let num of set) {
                    const numEleCont = document.createElement('td');
                    const numEle = document.createElement('button');
                    numEle.id = num;
                    numEle.textContent = num;
                    numEleCont.appendChild(numEle);
                    rowEle.appendChild(numEleCont);
                }
                this.container.appendChild(rowEle);
            }
        } else if (this.type === 'board') {
                for (let idx in this.elements) {
                    const colEle = document.createElement('div');
                    colEle.id = `Col#${idx}`
                    let set = this.elements[idx];

                    for (let num of set) {
                        const numEle = document.createElement('div');
                        numEle.className = 'flex-item';
                        numEle.id = num;
                        numEle.textContent = num;
                        colEle.appendChild(numEle);
                    }
                    this.container.appendChild(colEle);
                }
        }
    }
}

// module.exports = GenerateHtml; 