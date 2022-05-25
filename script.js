//DOM Variables
const container = document.getElementById("container");
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
const four = document.getElementById('4')
const eight = document.getElementById('8')
const sixteen = document.getElementById('16')
const thirtyTwo = document.getElementById('32')
const sixtyFour = document.getElementById('64')
const reset = document.getElementById('reset')
const rainbow = document.getElementById('rainbow')
const shade = document.getElementById('shade')

//Grid execute
function defaultGrid(input) {
    makeRows(input);
    makeColumns(input);
}

//Rows maker
function makeRows(rowNum) {
    for(r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRow';
    }
}

//Columns maker
function makeColumns(cellNum) {
    for(i = 0; i < rows.length; i++) {
        for(j = 0; j < cellNum; j++) {
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell).className = 'cell';
        }
    }
}

//Default start//
defaultGrid(16)
for (var i = 0; i < cells.length; i++)
cells[i].style = "height: 37.5px; width: 37.5px";

//Grid Selection
four.addEventListener('click', function() {
    userInput = 4;
    defaultGrid(4)
    for (var i = 0; i < cells.length; i++)
    cells[i].style = "height: 150px; width: 150px";
})
eight.addEventListener('click', function() {
    userInput = 8;
    defaultGrid(8)
    for (var i = 0; i < cells.length; i++)
    cells[i].style = "height: 75px; width: 75px";
})
sixteen.addEventListener('click', function() {
    defaultGrid(16)
    for (var i = 0; i < cells.length; i++)
    cells[i].style = "height: 37.5px; width: 37.5px";
})
thirtyTwo.addEventListener('click', function() {
    defaultGrid(32)
    for (var i = 0; i < cells.length; i++)
    cells[i].style = "height: 18.75px; width: 18.75px";
})
sixtyFour.addEventListener('click', function() {
    defaultGrid(64)
    for (var i = 0; i < cells.length; i++)
    cells[i].style = "height: 9.375px; width: 9.375px";
})

//Reset Button
reset.addEventListener('click', function() {
    defaultGrid(8)
    for (var i = 0; i < cells.length; i++)
    cells[i].style = "height: 75px; width: 75px";
    container.addEventListener("mouseover", function (e) {
        target = e.target;
    
        if (target.matches("div.cell")) {
            changeColor(target);
        }
    });
})
//Color changer
const changeColor = (target) => {
    target.style.backgroundColor = '#EAD2AC';

}
container.addEventListener("mouseover", function (e) {
    target = e.target;

    if (target.matches("div.cell")) {
        changeColor(target);
    }
});

//Color rainbow
const rainbowColor = (target) => {
    target.style.backgroundColor = `hsl(${Math.random() * 360}, 60%, 70%)`;

}
rainbow.addEventListener('click', function() {
    container.addEventListener("mouseover", function (e) {
        target = e.target;
    
        if (target.matches("div.cell")) {
            rainbowColor(target);
        }
    });
})


