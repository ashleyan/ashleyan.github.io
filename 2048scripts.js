//color each tile should be based on value
var colors = { 0 : "#ccc0b3",
         2 : "#f0e5da",
         4 : "#ede2c8",
         8 : "#feb578",
         16 : "#ff9962",
         32 : "#ff8060",
         64 : "#ff613c",
         128 : "#efd26d",
         256 : "#efd15c",
         512 : "#efcd4a",
         1024: "#f0ca36",
         2048 : "#eeca00"}; 
var board = [[0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 4, 0], [0, 0, 0, 0]]; 

console.log(board);

//it should fill each HTML grid cell with the corresponding value from board
//it should also color the tile properly based on its value
function colorBoard(){
	var gridID;
	//go through each tile and put the right value and color in the HTML
	for(var row = 0; row < board.length; row++){
		for(var col = 0; col < board[row].length; col++){
			gridID = "r" + row + "c" + col;
			if(board[row][col] !== 0){
				document.getElementById(gridID).innerHTML = board[row][col];
			}
			else{
				document.getElementById(gridID).innerHTML = " ";
			}
			document.getElementById(gridID).style.background = colors[board[row][col]];
									
		}
	}
}//end function

function randTile(){
	row = Math.round(Math.random() * 3);
	col = Math.round(Math.random() * 3);
	while(board[row][col] !== 0){
		row = Math.round(Math.random() * 3);
		col = Math.round(Math.random() * 3);
	}
	board[row][col] = 2;	
}

//launch the game!
function runGame() {
	colorBoard();
}

// this function should move tiles properly when arrow key is pressed (refer to the HTML for clues)
function arrowPress(e) {
	//console.log(e.keyCode);
	var x = false;
	if(e.keyCode === 37){
		//want to move left
		for(var row = 0; row < board.length; row++){	
			for(var col = 0; col < board[row].length; col++){
				if(canMove("left", row, col)){
					move("left", row, col);
					x = true;
				}	
			}
		}		
	}

	else if(e.keyCode === 38){
		//want move up
		for(var row = 0; row < board.length; row++){	
			for(var col = 0; col < board[row].length; col++){
				if(canMove("up", row, col)){
					move("up", row, col);
					x = true;
				}	
			}
		}	
	}

	else if(e.keyCode === 39){
		//want move right
		for(var row = 0; row < board.length; row++){	
			for(var col = 3; col >= 0; col--){
				if(canMove("right", row, col)){
					move("right", row, col);
					x = true;
				}	
			}
		}	
	}

	else{
		//want move down
		for(var row = 3; row >= 0; row--){	
			for(var col = 0; col < board[row].length; col++){
				if(canMove("down", row, col)){
					move("down", row, col);
					x = true;
				}	
			}
		}	
	}

	if(x === true){
		randTile();
		colorBoard();
	}

}

//once we have determined tile at row, col can move
// move in specified direction
function move(dir, row, col) {
	if(dir === "left"){
		console.log('left');
		if(board[row][col-1] === board[row][col]){
			board[row][col-1] *= 2;
			board[row][col] = 0;
		}
		else{
			board[row][col-1] = board[row][col];
			board[row][col] = 0;
		}
	}//end left

	if(dir === "up"){
		console.log('up');
		if(board[row-1][col] === board[row][col]){
			board[row-1][col] *= 2;
			board[row][col] = 0;
		}
		else{
			board[row-1][col] = board[row][col];
			board[row][col] = 0;
		}
	}//end up

	if(dir === "right"){
		console.log('right');
		if(board[row][col+1] === board[row][col]){
			board[row][col+1] *= 2;
			board[row][col] = 0;
		}
		else{
			board[row][col+1] = board[row][col];
			board[row][col] = 0;
		}
	}//end right

	if(dir === "down"){
		console.log('down');
		if(board[row+1][col] === board[row][col]){
			board[row+1][col] *= 2;
			board[row][col] = 0;
		}
		else{
			board[row+1][col] = board[row][col];
			board[row][col] = 0;
		}
	}//end down

}

/**
	@param row, col both indexes
				 dir direction to move in, string
	* can our tile at row row and column col move in direction dir
	@return boolean true if can move, false if not
**/
function canMove(dir, row, col) {
	if(dir === "left"){
		if(board[row][col] === 0){
			return false;
		}
		else if(col === 0){
			return false;							
		}
		else if(board[row][col-1] !== board[row][col]){
			if(board[row][col-1] === 0){
				return true;
			}
			else{
				return false;
			}
		}
		else{
			return true;
		}
	}//end left

	if(dir === "up"){
		if(board[row][col] === 0){
			return false;
		}
		else if(row === 0){
			return false;							
		}
		else if(board[row-1][col] !== board[row][col]){
			if(board[row-1][col] === 0){
				return true;
			}
			else{
				return false;
			}
		}
		else{
			return true;
		}
	}//end up

	if(dir === "right"){
		if(board[row][col] === 0){
			return false;
		}
		else if(col === 3){
			return false;							
		}
		else if(board[row][col+1] !== board[row][col]){
			if(board[row][col+1] === 0){
				return true;
			}
			else{
				return false;
			}
		}
		else{
			return true;
		}
	}//end right

	if(dir === "down"){
		if(board[row][col] === 0){
			return false;
		}
		else if(row === 3){
			return false;							
		}
		else if(board[row+1][col] !== board[row][col]){
			if(board[row+1][col] === 0){
				return true;
			}
			else{
				return false;
			}
		}
		else{
			return true;
		}
	}//end down

}