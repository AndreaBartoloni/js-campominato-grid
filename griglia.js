let play = document.getElementById("play");

let grid = document.getElementById("grid");

play.addEventListener("click", function(){
    let difficult = document.getElementById("select").value;
    let square = "";
    grid.replaceChildren()
    
    console.log(difficult);
    if(difficult == "medium"){
        numCella = 81;
        square = "square81";
        console.log("stronzo");
        
    }else if(difficult == "hard"){
        numCella = 49; 
        square = "square49";
        console.log("stronzo");
    }else{
        numCella = 100;
        square = "square";
        console.log("stronzo");
    }
    creaQuadrati(numCella, square);
})

function creaQuadrati(numeroCella, cssSquare){
    
    for(let i = 1; i <= numeroCella; i++){
            
        let celle = document.createElement("div");
        celle.classList.add(cssSquare);
        celle.innerHTML = i;
        grid.appendChild(celle); 

        
    
        celle.addEventListener("click", function(){
            celle.classList.toggle("highlight");
            console.log("Numero della casella", i)
        });
        
    }  
    
    
     
        
   
    
    
}
