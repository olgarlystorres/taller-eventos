
const divButon = document.querySelector("container");

function elDiv (){
    alert('Hola! soy el Div');
}


//divButon.onclick = elDiv();

divButon.addEventListener("click", elDiv);