let container = document.querySelector(".container");
for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){ 
         let div = document.createElement("div");
        container.appendChild(div);

    }
}

container.style.cssText = "backround-color: black; display: flex; flex-wrap: wrap; "
let div = document.querySelector("div")
div.addEventListener("click",function(){
    div.style.backGroundColor = "black";
});