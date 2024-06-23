let palavra;


function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria();
  
  
 
}

function palavraAleatoria (){
    let palavras = ["Arthur", "Thu-Thu", "Zoiudo"];
   return random(palavras);
}

function inicializaCores() {
  background("white");
  fill("orange");
  textSize(64);
  textAlign(CENTER, CENTER);
}
  


function palavraParcial (minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
  return parcial;
}

function draw() {
  inicializaCores();
  
  
 let parcial = palavraParcial(0, width);
  text(parcial,200,200);
  

  //if(mouseX < 50) {
  //let palavra = "A";
  //text(palavra, 200, 200);
  //} else if(mouseX < 100) {
  //let palavra = "Ar";
  //text(palavra, 200, 200);
  //} else {
  //let palavra = "Arthur";
  //text(palavra, 200, 200);
  //}
  
 
 
}
