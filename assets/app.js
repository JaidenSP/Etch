//Using the dom to grab the container div in the html file
 var container = document.getElementById('container-div');

//create a column and row divs that span 16x16 using the dom
var row = document.createElement('div');
var column = document.createElement('div');

//adding the row class to the row element
row.classList.add('row');

//adding the column class to the column element
column.classList.add('column');

//appending the new divs to the parent container
container.appendChild(column);
container.appendChild(row);

