
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

  //   for(j = 1; j < nod; j++){

  //     var column = document.createElement("div");

  //     column.className = "column";

  //     container.appendChild(row);
  //   }
  //   container.appendChild(column);
  // }

}

createDivs(16 * 16);






