/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/

var championship = 'Paulista';

console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/

var teams = ['São Paulo', 'Palmeiras', 'Santos', 'Corinthians', 'São Caetano'];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(number){
    
    if(number <= 5 && number >= 1){
        
        position = number;
        --number;
        return 'O time que está em ' + position + 'º lugar é o ' + teams[number] + '.';
    
    }else {

        return 'Não temos a informação do time que está nesta posição.';

    }
}

console.log(showTeamPosition(1));
console.log(showTeamPosition(0));
console.log(showTeamPosition(8));

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/

var idx = 1;
while(idx < 5){

    console.log(showTeamPosition(idx));
    idx++;

    if(idx == 5){
        console.log(showTeamPosition(15));
    }//Só pra testar if dentro de while;

}



/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/

idx = 20;

while(idx < 31){

    console.log(idx);
    idx++;

}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(colour){
    var hexadecimal = {
        'red': {
            hex: '#ff0000'
        },
        'blue': {
            hex: '#0000ff'
        },

        'green': {
            hex: '#00ff00'
        },

        'yellow': {
            hex: '#ffff00'
        },

        'black': {
            hex: '#000000'
        },

        'white': {
            hex: '#ffffff'
        }
        
    }

    
    switch(colour){
        case 'red':
            return 'O hexadecimal para a cor ' + colour + ' é ' + hexadecimal['red'].hex + '.';
        break;

        case 'blue':
            return 'O hexadecimal para a cor ' + colour + ' é ' + hexadecimal['blue'].hex + '.';
        break;

        case 'green':
            return 'O hexadecimal para a cor ' + colour + ' é ' + hexadecimal['green'].hex + '.';
        break;

        case 'yellow':
            return 'O hexadecimal para a cor ' + colour + ' é ' + hexadecimal['yellow'].hex + '.';
        break;

        case 'black':
            return 'O hexadecimal para a cor ' + colour + ' é ' + hexadecimal['black'].hex + '.';
        break;

        case 'white':
            return 'O hexadecimal para a cor ' + colour + ' é ' + hexadecimal['white'].hex + '.';
        break;

        default: 
            return 'Não temos o equivalente hexadecimal para a ' + colour + '.';

    }
    
    
    /* Brincando também com o if, o códico fica menor e menos suscetível a erro, tentei fazer pt-br e en-us no if e switch, porém acho que a melhor escolha é if + adicionar as cores em pt-br no objeto hexadecimal
    if(hexadecimal[colour] != undefined){
        return 'O hexadecimal para a cor ' + colour + ' é ' + hexadecimal[colour].hex + '.';
    }else{
        return 'Não temos o equivalente hexadecimal para a ' + colour + '.';
    }*/
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

console.log(convertToHex('blue'));
console.log(convertToHex('white'));
console.log(convertToHex('black'));
console.log(convertToHex('red'));
console.log(convertToHex('pink'));
console.log(convertToHex('purple'));
console.log(convertToHex('green'));
console.log(convertToHex('yellow'));