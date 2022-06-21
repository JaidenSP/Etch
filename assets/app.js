

 //Using the dom to grab the container div in the html file
 var container = document.getElementById('container-div');

 //using a for statement to create multiple divs
 for (i = 0; i < 256; i++) {

   //create a column and row divs that span 16x16 using the dom
   var row = document.createElement('div');

   //adding the row class to the row element
   row.classList.add('row');

   //appending the row child to the parent div
   container.appendChild(row);

    //styling the divs 
  row.style.width = "100px";
  row.style.height = "100px";
  row.style.flexWrap;
  row.style.flexDirection = "row";
  row.style.display = "inline";
  row.style.float = "left";
  row.style.backgroundColor = "grey";
 }


 










