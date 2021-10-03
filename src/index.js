"use strict"; 
import "./style.css";
const buttonPoll = document.querySelector(".poll"); 
//SU CODIGO EMPIEZA DESDE AQUI 
const poll = { 
  question: "What is your favourite programming language?", 
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"], 
  ansuers: new Array(4).fill(0), 
  
  // 1. Cree un imétodo Llamado 'registerNeuanswer en el objeto poll'. EL nétodo hace 2 
  // cosos: 
  registrerlewAnswer() { 
  
  // 1.1. Auestre un prompt para que el usuario ingrese el número de la opción 1 seleccionada. EL mensaje debería verse así: 
  //Cudl es tu Lenguaje de programación favorito? 
  // 0: Javascript 
  // 1: Python 
  // 2: KotilLn 
  // 3: C ++ 
  //(Escriba el número de La opción que guste) 
  
  const Pregunta = Number( 
    prompt( 
      `Cual es tu lengunje de progranación favorito?\n${this.options.jain("\n")} 
      \n(Escriba el número de la opción que guste)`
    )
  );
    console.log(Pregunta); 
  // 1.2 Según el número de entrada, actualice la propiedad del array ‘answers'. Por
//ejemplo, si la opción es 3, aumente el valor en la posición 3 del array en una
//unidad. Asegúrese de verificar si la entrada es un número y si el número tiene
//sentido (por ejemplo, la respuesta 52 no tendría sentido, ¿verdad?)

  typeof Pregunta === "number" && Pregunta <= this.answers.length && this.answers[Pregunta]++;

//2. Llame a este método siempre que el usuario haga clic en el botón "Answer poll"
//(este elemento ya esta seleccionado en el archivo ‘script.js’ con el nombre de
//‘buttonPoll’, por lo tanto ya no tiene que preocuparse por seleccionarlo,
//simplemente uselo ).
  buttonPoll.addEventListener("click", poll.registrerteAnswer.bind(poll));


// 4. Ejecute el método displayResults al final de cada LLamado al método
//'registerNewAnswer'.

   this.displayResults();
   this.displayResults("string");

//console.log(this.answers);

},

// 3. Cree un método 'displayResults' que muestre Los resultados de la encuesto. El
// método toma una cadena como entrada (LLamada 'type'), que puede ser 'string' o
//'array'. Si el tipo es 'array', simplemente muestre el arroy de resultados tal como
// está, usando console. Log(). Esto debería ser la opción por defecto. Si el tipo es
// 'string', muestre un mensaje de la siguiente forma: "Los resultados de la encuesta
// son 13, 2, 4, 1 respectivamente".

displayResults (type = "array") {
  if(type === "array"){
  console.log(this.answers);
  }else if (type == "string") {
  console.log("Los resultados de la encuesta son: $(this.answers.join(", "))");
  }
  }
};
  //poll.registreriner();

//5. Use el método 'disployResults' para mostrar Las 2 motrices que se muestran al
// final. Haga la prueba tanto con la opción 'array' como 'string'. No pongas Los arrays
// en el objeto "poll'. Entonces, ¿cómo debería verse "this' en este caso?
poll.displayResults.call({answers: [5,2,3]}, "string");
poll.displayResults.call({answers: [1,5,5,9,6,1]}, "string");
poll.displayResults.call({fantnerst: [1,5,9,9,0,1]}, "array");

