
//have the divs creation used in a function, and style the divs in css
//I will append the 16x16 divs to the container div 

var container = document.getElementById("container-div");

//creating function for the divs creation and appendage to the parent div and adding of class the nod in the parameters stands for (numberOfDivs)
function createDivs(nod){

  for(i = 0; i < nod; i++){

     var row = document.createElement("div");

     row.className = "row";

    container.appendChild(row);

  }

}

createDivs(16 * 16);






