
// Numeri di celle

let play = document.getElementById("play");
let numCella = 100;
let grid = document.getElementById("grid");



function creaQuadrati(){
   
    play.addEventListener("click", function(){
        for(let i = 1; i <= numCella; i++){
            
            let celle = document.createElement("div");
            celle.classList.add("square");
            grid.appendChild(celle); 
        
            celle.addEventListener("click", function(){
                celle.classList.toggle("highlight");
                console.log("Numero della casella", i)
            });
            
        }
        
    })
}
creaQuadrati();