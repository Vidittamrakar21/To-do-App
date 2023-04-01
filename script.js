let add = document.getElementById("txt");
let text = document.querySelector("#todo");

function fun(){
    create(add.value);
    add.value = ""
}

const create = (item) => {
    const ret = document.createElement("li");
    ret.innerHTML = `
        ${item}
        <i class="fa fa-trash-o" id="del" onclick="close()"></i>
         `;
         
         ret.querySelector("i").addEventListener(
             "click",
             function (){
                 ret.remove()
        }
        ) 
        
        text.appendChild(ret);
    } 