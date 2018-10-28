# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(arg){
    return !!arg;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(0)); //false
console.log(isTruthy(NaN)); //false
console.log(isTruthy(undefined)); //false
console.log(isTruthy(false)); //false
console.log(isTruthy('')); //false
console.log(isTruthy(null)); //false

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(new Date())); //true
console.log(isTruthy(Infinity)); //true
console.log(isTruthy(-Infinity)); //true
console.log(isTruthy("foo")); //true
console.log(isTruthy("teste")); //true
console.log(isTruthy(2)); //true
console.log(isTruthy(1/2)); //true
console.log(isTruthy("true")); //true
console.log(isTruthy(true)); //true
console.log(isTruthy("Lucas")); //true
console.log(isTruthy(1.3)); //true


/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: "Honda",
    modelo: "Civic",
    placa: "FWD-1545",
    ano: 2009,
    cor: "Prata",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = (corArg) => {
    return carro.cor = corArg;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = () => {
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = () => {
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = () => {
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = () => {
    return "Esse carro é um " + carro.marca + " " + carro.modelo;
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoas = (pessoas) => {

    if(carro.quantidadePessoas == carro.assentos){
    
        return "O carro já está lotado!";
    
    }else if(pessoas + carro.quantidadePessoas > carro.assentos){
        var qntd = carro.assentos - carro.quantidadePessoas;
        var plural = qtnd = 1 ? "pessoa" : "pessoas";
        return "Só cabem mais " + (carro.assentos - carro.quantidadePessoas) + " " + plural + "!";
    
    }else{
        carro.quantidadePessoas += pessoas;
        return "Já temos " + carro.quantidadePessoas + " pessoas no carro!";
    }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor()); //Prata


// Mude a cor do carro para vermelho.
carro.mudarCor("Vermelho");

// E agora, qual a cor do carro?
console.log(carro.obterCor()); //Vermelho


// Mude a cor do carro para verde musgo.
carro.mudarCor("Verde musgo");

// E agora, qual a cor do carro?
console.log(carro.obterCor()); //Verde musgo


// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo()); //Esse carro é um Honda Civic


// Adicione 2 pessoas no carro.
console.log(carro.adicionarPessoas(2)); //Já temos 2 pessoas no carro!


// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarPessoas(4)); //Só cabem mais 3 pessoa!


// Faça o carro encher.
console.log(carro.adicionarPessoas(3)); //Já temos 5 pessoas no carro!


// Tire 4 pessoas do carro.
carro.tirarPessoas = (pessoas) => {
    
    if(carro.quantidadePessoas - pessoas < 0){
        return "Temos apenas " + carro.quantidadePessoas + " pessoas no carro!";
    }else{
    carro.quantidadePessoas -= pessoas;
    var plural = carro.quantidadePessoas == 1 ? "pessoa" : "pessoas";
        return pessoas + " pessoas retidas do carro, há " + carro.quantidadePessoas + " " + plural + " no carro!"; 
    }
}
console.log(carro.tirarPessoas(4)); //4 pessoas retidas do carro, há 1 pessoa no carro!


// Adicione 10 pessoas no carro.
console.log(carro.adicionarPessoas(10)); //Só cabem mais 4 pessoa!


// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas); //1
```
