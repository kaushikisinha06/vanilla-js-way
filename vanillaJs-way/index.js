let grid = {'grid-1': '','grid-2':'','grid-3':'','grid-4':'','grid-5':'','grid-6':'','grid-7':'','grid-8':'','grid-9':''};

let board = document.getElementById('board');
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');

drawBoard();

player1.addEventListener('keyup', enterValue);

let currentRound = '';

function drawBoard() {
    if(board.hasChildNodes) {
        board.innerHTML = ''
    }
    let node = Object.entries(grid).map(([grid, value]) => 
            `<div id=${grid} class="cell ${value==='X' ? "cross" : "dot"}" onClick="enterBoxvalue(event)">${value}</div>`
        ).join('');

    
    let frag = document.createDocumentFragment();
    let temp = document.createElement('div');
    temp.innerHTML = node;
    while(temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
   
    board.appendChild(frag);
}
function enterBoxvalue(evt) {
    if(!player1.value || !player2.value) {
        alert('Please enter the value');
    }
    grid[evt.target.id] = currentRound;
    
    if(currentRound===player1.value) {
        currentRound=player2.value;
    }else {
        currentRound=player1.value;
    }
    drawBoard();
    checkforResult();
}

function enterValue() {
    let value = player1.value.toUpperCase();
    player1.value = value;
    if(value==='X') {
        player2.value = 'O';
    }else if(value==='O') {
        player2.value = 'X';
    }
    currentRound = value;
}

function checkforResult() {
    switch(true) {
        case grid['grid-1']===grid['grid-2'] && grid['grid-1']===grid['grid-3']:
            alertValue(grid['grid-1']);           
            break;
        case grid['grid-4']===grid['grid-5'] && grid['grid-4']===grid['grid-6']:
            alertValue(grid['grid-4']);           
            break;
        case grid['grid-7']===grid['grid-8'] && grid['grid-7']===grid['grid-9']:
            alertValue(grid['grid-7']);           
            break;
        case grid['grid-1']===grid['grid-4'] && grid['grid-1']===grid['grid-7']:
            alertValue(grid['grid-1']);           
            break;
        case grid['grid-2']===grid['grid-5'] && grid['grid-2']===grid['grid-8']:
            alertValue(grid['grid-2']);           
            break;
        case grid['grid-3']===grid['grid-6'] && grid['grid-3']===grid['grid-9']:
            alertValue(grid['grid-3']);           
            break;
        case grid['grid-1']===grid['grid-5'] && grid['grid-1']===grid['grid-9']:
            alertValue(grid['grid-1']);           
            break;
        case grid['grid-3']===grid['grid-5'] && grid['grid-3']===grid['grid-7']:
            alertValue(grid['grid-3']);           
            break;
    }
}

function alertValue(value) {
    if(player1.value && value===player1.value){
        setTimeout(() => {
            alert('Player 1 won');
            player1.value = '';
            player2.value = '';
        }, 300);
    }else if(player2.value && value===player2.value) {
        setTimeout(() => {
            alert('Player 2 won');
            player1.value = '';
            player2.value = '';
        }, 300 );
    }
}