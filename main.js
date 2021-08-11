

function clicou(){
    document.getElementById("agradecimento").innerHTML= "<b>Obrigado por clicar</b>";
   //console.log(document.getElementById("agradecimento"));
    //alert("obrigado por clicar");
}

function redirecionar(){
        window.open("https://translate.google.com.br/?hl=pt-BR");
        //window.location.href = "https://translate.google.com.br/?hl=pt-BR";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/
/*
var validar = 0

function validaIdade(idade){
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade);
console.log(validar);
*/
/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
*/
/*
alert(soma(5, 10));
*/
/*
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
/*
var d = new Date();
alert(d.getDay()+1);
*/
/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
8/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}
*/
/*
var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));

//var nome = "Tassiana Benamor";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade+idade2);
//console.log(nome);
//console.log(n1*n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));