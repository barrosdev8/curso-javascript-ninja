/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrayQualquer = [1, 8, 25, 95, 63];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var func = (arg) => {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
func(arrayQualquer)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var func2 = (arg1, arg2) => {
    return arg1[arg2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array5 = [2, 'teste', '05/12/2017', 362, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
var i = 0;
while(i < 5){
    console.log(func2(array5, i));
    i++;
}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName){
    var books = {
        'Assim falou zaratustra':{
            quantidadePaginas: 325,
            autor: 'Friedrich Nietzsche',
            editora: 'Martin Claret'
        },
        'O príncipe':{
            quantidadePaginas: 176,
            autor: 'Nicolau Maquiavel',
            editora: 'Martin Claret'
        },
        'A revolta de atlas':{
            quantidadePaginas: 1216,
            autor: 'Ayn Rand',
            editora: 'Editora Arqueiro'
        }
    }

    if(books[bookName] !== undefined){
        return books[bookName];
    }else{
        return books;
    }

    // return !nameBook ? books : books[nameBook];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book(''));


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Assim falou zaratustra';

console.log('O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!');


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

bookName = 'O príncipe';

console.log('O autor do livro ' + bookName + ' é ' + book(bookName).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
bookName = 'A revolta de atlas';

console.log('O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora + '.');
