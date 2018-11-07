/*
Crie um array com 5 items (tipos variados).
*/
var arr = ["Lucas", 123, true, Infinity, obj= {height: 190 }];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem (arg){
    arr.push(arg);
    return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem(["Barros", false, "Gym"]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é " + arr[5][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem " + arr.length + " itens.");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem " + arr[5].length + " itens.");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );

var i = 10;

while(i <= 20){

    if(i % 2 == 0){

        console.log(i);
    
    }

    i++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );

i--;// i = 21, fiz o while inverso para treinar :)

while(i >= 10){

    if(i % 2 != 0){

        console.log(i);

    }

    i--;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );

for(var pair = 100; pair <= 120; pair++){

    if(pair % 2 == 0){

        console.log(pair);

    }
}

console.log( 'Números ímpares entre 111 e 125:' );

for(var odd = 111; odd <= 125; odd++){

    if(odd % 2 != 0){

        console.log(odd);

    }
}