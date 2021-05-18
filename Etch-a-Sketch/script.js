let clear = document.createElement("input");
document.body.appendChild(clear)

let container = document.createElement("div");
document.body.appendChild(container);
let size = 480;
container.style.border = "solid 2px black"
container.style.width = size + "px";
container.style.margin = "60px auto";
container.style.lineHeight = "0";



clear.classList.add("clear");
clear.type = "button";
clear.value = "CLEAR";


let number = 16;

clear.addEventListener("click", () => {
    let prmpt = prompt("how many blocks do you want?")
    if (prmpt) {
        number = parseInt(prmpt);
        console.log(number);
        makeDiv();
    }

});



function makeDiv() {



    container.innerHTML = ""

    for (let i = 0; i < number; i++) {
        let childContainer = document.createElement("div");
        container.appendChild(childContainer);

        for (let j = 0; j < number; j++) {

            let div = document.createElement("div");
            childContainer.appendChild(div);

            div.classList.add('miniDiv');

            div.style.display = "inline-block";
            div.style.backgroundColor = "#234e77";
            div.style.width = size / number + "px";
            div.style.height = size / number + "px";;

            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "black";
            })
        }
    }



}






makeDiv();