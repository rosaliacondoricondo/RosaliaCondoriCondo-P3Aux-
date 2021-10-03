"use strict";

const buttonPoll = document.querySelector(".poll");

// SU CODIGO EMPIEZA DESDE AQUI

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer : {
        0: "JavaScript",
        1: "Python",
        2: "Kotiln",
        3: "C ++",   
    },
    respuesta: "3"
};
function mostrarpoll(){
    const preguntasYresultados = [];
    preguntasYresultados.forEach((preguntaActual, numeroDepregunta) => {
    const registerNewAnswer = [];
    for ( const letraRespuesta in respuestaActual.registerNewAnswer){
        registerNewAnswer.push(
            `<lavel>
              <inpunt type = "radio" name="${numeroDepregunta}" value="${letraRespuesta}
              ${letraRespuesta} : ${respuestaActual.registerNewAnswer}
            </label>`
        );
    }preguntasYresultados.push(
        `<div class="cuestion"> ${preguntaActual.registerNewAnswer}`
    )
    })
}