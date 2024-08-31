
document.body.setAttribute("onload" ,"banner()")

const carro = ["../img/contaccarrosimg/img1.png", "../img/contaccarrosimg/img2.jpg", "../img/contaccarrosimg/img3.jpeg", "../img/contaccarrosimg/img4.png"];

let i = 0

function banner() {

    const carroElement = document.getElementById("carro").setAttribute("src", carro[i]);
    i++;

    if (i >= carro.length) {
        i = 0;
    }
    setTimeout("banner()", 1000);
}