# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum(x, y){
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var sum = sum(15, 8) + 5;
console.log(sum);

// Qual o valor atualizado dessa variável?
console.log(sum);

// Declare uma nova variável, sem valor.
var sv;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function changeValue(value){
    return value = "VALOR";
}

// Invoque a função criada acima.
sv = changeValue();

// Qual o retorno da função? (Use comentários de bloco).
console.log(sv);
//VALOR

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplication(x, y, z){
    if(x === undefined || y === undefined || z === undefined){
        return "Preencha todos os valores corretamente!";
    }
    return x * y * z;
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(multiplication(2, 5));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha todos os valores corretamente!


// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(multiplication(2, 5, 9));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//90

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function validation(a, b , c) {
    if(a === undefined & b === undefined & c === undefined){
        return false;
    }else if(b === undefined & c === undefined){
        return a;
    }else if(c === undefined){
        return a + b;
    }else{
        return a + b + c;
    }
}


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(validation());
//false
console.log(validation(4));
//4
console.log(validation(4, 6));
//10
console.log(validation(4, 6, 10));
//20
```