let fecha = new Date ();
let hora = fecha.getHours();
console.log (hora);

function changeHour() {
    let texto = document.getElementById("Hora Actual");
    let text = "";

    if(hora >= 0 && hora < 12){
        text = "Ten un Buen dia te presento,";
    }
    if(hora >= 12 && hora < 19){
        text = "Ten una Buena Tarde te presento,";
    }
    if(hora >= 19 && hora < 24){
        text = "Ten una Buena Noche te presento,";
    }

    console.log(text);

    texto.innerHTML = text;
}

changeHour();

const green = document.querySelector('.img');
