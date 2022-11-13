const grid = document.querySelector('.grid');
const square = document.createElement('div');
let width = 43;
let height = 25;

function createGrid(width, height){
    for (let i = 0; i < width; i++) {
        let column = document.createElement('div');
        column.className = 'column';
        column.style.height = "20px";
        column.style.width = "auto";
        for (let j = 0; j < height; j++){
            let row = document.createElement('div');
            row.className = 'row';
            row.style.height = "20px";
            row.style.width = "auto";
            column.appendChild(row);
        }
        grid.appendChild(column);
    }
}

createGrid(width, height);

[...document.querySelectorAll('.row')].forEach(function(item) {
    item.addEventListener('mouseover', function() {
        item.style.backgroundColor = "#707070";
    });
});

document.querySelector('.reset').addEventListener('click', function() {
    [...document.querySelectorAll('.row')].forEach(function(resetitem) {
            resetitem.style.backgroundColor = "#EAEAEA";
        });
});