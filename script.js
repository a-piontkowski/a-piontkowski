function swapTiles(cell1, cell2) {
	var temp = document.getElementById(cell1).className;
	document.getElementById(cell1).className = document.getElementById(cell2).className;
	document.getElementById(cell2).className = temp;
}

function shuffle() {
	//Use nested loops to access each cell of the 4x4 grid
	for(var row=1; row <=4; row++) //foreach row of the 4x4 grid
	{
		//foreach column in this row
		for (var column=1; column <=4; column++) {
			//pick a random row from 1 to 4
			
			var row2=Math.floor(Math.random()*4+1);
			
			//pick a random column from 1 to 4
			var column2=Math.floor(Math.random()*4+1);
			
			swapTiles("cell"+row+column, "cell"+row2+column2); //swap the look & feel of both cells
		}
	}
}

function clickTile(row, column) {
	var cell = document.getElementById("cell"+row+column);
	var tile = cell.className;
	
	if(tile!="tile16") {
		//check if the white tile is on the right
		if(column<4) {
			if(document.getElementById("cell"+row+(column+1)).className=="tile16") {
				swapTiles("cell"+row+column, "cell"+row+(column+1));
				return;
			}
		}
		//check if the white tile is on the left
		if(column>1) {
			if(document.getElementById("cell"+row+(column-1)).className=="tile16") {
				swapTiles("cell"+row+column,"cell"+row+(column-1));
				return;
			}
		}
		//check if the white tile is above
		if(row > 1) {
			if(document.getElementById("cell"+(row-1)+column).className=="tile16") {
				swapTiles("cell"+row+column, "cell"+(row-1)+column);
				return;
			}
		}
		
		//check if the white tile is below
		if(row < 4) {
			if(document.getElementById("cell"+(row+1)+column).className=="tile16") {
				swapTiles("cell"+row+column, "cell"+(row+1)+column);
				return;
			}
		}
	}
}