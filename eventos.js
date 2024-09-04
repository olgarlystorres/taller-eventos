
document.addEventListener('DOMContentLoaded', (Event) => {
    document.querySelector('.container').addEventListener('click', ()=> {
        alert('Hola! Soy el Div');
    });
});


/*const divButon = document.querySelector("container");

function elDiv (){
    alert('Hola! soy el Div');
}


//divButon.onclick = elDiv();*/

divButon.addEventListener("click", elDiv);