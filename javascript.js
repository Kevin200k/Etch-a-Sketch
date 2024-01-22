let button = document.querySelector("button");
let container = document.querySelector(".container");
button.addEventListener("click", function(){
    let gridValue = prompt("Please type in the value for the dimension of your grid");
    while(gridValue < 16){
        alert("Value of the grid can not be less than 16px");
        let gridValue = prompt("Please type in the value for the dimension of your grid");
        if(gridValue < 64|| gridValue > 16)break;
    }
    while(gridValue > 64){
        alert("Value of the grid can not be greater than 64px");
        let gridValue = prompt("Please type in the value for the dimension of your grid");
        if(gridValue < 64|| gridValue > 16)break;
    }
  for(let i = 0; i < gridValue; i++){
    for(let j = 0; j < gridValue; j++){
        let div = document.createElement("div");
        container.appendChild(div);  
        div.style.cssText = `height: calc((16rem / ${gridValue}) * 1); width: calc((16rem / ${gridValue}) * 1);`
        div.addEventListener("mouseover",function(){
            div.style.backgroundColor = "black";
                        });
        div.addEventListener("drag",function(){
            div.style.backgroundColor = "black";
                    })}};
                    
    });

container.style.cssText = "display: flex; flex-wrap:wrap; ";
    