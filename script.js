// create table
function tableFunction() {
	var body = document.getElementsByTagName("body")[0]; // gets the reference for the body

	var table = document.createElement("table"); // create table element
	var tableBody = document.createElement("tbody"); // create table body element

	// create 4 rows
	//i is rows
	for (var i = 0; i < 4; i++) {
		var row = document.createElement("tr");

		// j is columns
		for (var j = 0; j < 4; j++) {
		// create one header row
			if (i == 0) {
				var cell = document.createElement("th");
				var text = document.createTextNode("Header " + (j+1));
				cell.appendChild(text);
				row.appendChild(cell);
				

			}
			// create rest as standard cells
			else {
			var cell = document.createElement("td");
			var text = document.createTextNode((i) + ", " + (j+1));
			cell.appendChild(text);
			row.appendChild(cell);
			}
		}
		tableBody.appendChild(row); // adds a row to the table
	}


table.appendChild(tableBody); // puts table body in table
body.appendChild(table); // puts table in body

table.setAttribute("border", "1px");
}


// create buttons
function buttonFunction() {


var direction = ["Up", "Down", "Left", "Right"];

// creat up down left and right buttons
for (var i = 0; i < 4; i++) {
var button = document.createElement("button");
var buttonText = document.createTextNode(direction[i]);
button.id = direction[i];
button.style.margin = "8px";
button.style.backgroundColor = "orange";
button.appendChild(buttonText);
document.body.appendChild(button);

}

// create  mark button
var button = document.createElement("button");
var buttonText = document.createTextNode("Mark Cell");
button.id = "Mark";
button.style.margin = "8px";
button.style.backgroundColor = "yellow";
button.appendChild(buttonText);
document.body.appendChild(button);
}


// movement functions

function moveUp() {
	// do nothing if above row is header
	at = document.getElementById("current");
	if (at.parentNode.rowIndex == 1) {
		return;
	}
	 
		var temp = at.cellIndex;
		at.removeAttribute("id");
		at.style.borderWidth = "1px";
		at = at.parentNode; // traverse to tr
		at = at.previousElementSibling; // traverse to tr's previous sibling (up)
		at = at.firstElementChild; // traverse to th
		// traverse until at correct sibling of th
		for (var i = 0; i < temp; i++) {
			at = at.nextElementSibling;
		}
		at.id = "current";
		at.style.borderWidth = "5px";
	
}

function moveDown() {
	// do nothing if already at bottom row
	at = document.getElementById("current");
	if (at.parentNode.rowIndex == 3) {
		return;
	}
	
		var temp = at.cellIndex;
		at.removeAttribute("id");
		at.style.borderWidth = "1px";
		at = at.parentNode; // traverse to tr
		at = at.nextElementSibling; // traverse to tr's next sibling (down)
		at = at.firstElementChild; // traverse to th
		// traverse until we are at the correct sibling of th
		for (var i = 0; i < temp; i++) {
			at = at.nextElementSibling;
		}
		at.id = "current";
		at.style.borderWidth = "5px";
	
}

function moveLeft() {
	// do nothing if already at far left
	at = document.getElementById("current");
	if (at.cellIndex == 0) {
		return;
	}
	
		at.removeAttribute("id");
		at.style.borderWidth = "1px";
		at = at.previousElementSibling; // go to previous sibling (left)
		at.id = "current";
		at.style.borderWidth = "5px";
	
}

function moveRight() {
	// do nothing if already at far right 
	at = document.getElementById("current");
	if (at.cellIndex == 3) {
		return;
	}
	
		at.removeAttribute("id");
		at.style.borderWidth = "1px";
		at = at.nextElementSibling; // go to next sibling (right)
		at.id = "current";
		at.style.borderWidth = "5px";
	
}

// create table
tableFunction();

// create buttons
buttonFunction();

// start selection at first td element
var at = document.getElementsByTagName("td")[0];
at.id = "current";
at.style.borderWidth = "5px";



document.getElementById("Up").addEventListener("click", moveUp);
document.getElementById("Down").addEventListener("click", moveDown);
document.getElementById("Left").addEventListener("click", moveLeft);
document.getElementById("Right").addEventListener("click", moveRight);

// make the currently selected cell yellow
function markYellow() {
    var at = document.getElementById("current");
    at.style.backgroundColor = "yellow";
}

document.getElementById("Mark").addEventListener("click", markYellow);
