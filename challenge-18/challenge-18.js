(function(){
    'use strict'
/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

/*
Crie uma função chamada `cleanCPF`, que receba um CPF por parâmetro, e
retorne esse CPF limpo (somente os números).
Usando os CPFs abaixo, mostre no console que a limpeza funciona para todos
eles! Use um console.log para cada CPF.
- "049-214 3421-1"
- "210.458.522-05"
- "735 500 794 - 22"
- "101.123-131x32"
*/
console.log( 'Limpando CPFs:' );

function clearCPF(cpf){
    const regex = /[\D]/g;
    const cpfOk = cpf.replace(regex,'');
    if(cpfOk.length != 11)
        return 'Insira um CPF correto!';
    else{
        return cpfOk;
    }
}

let cpfs =['049-214 3421-1', '210.458.522-05', '735 500 794 - 22', '101.123-131x32']

cpfs.forEach(function(cpf){
    console.log(clearCPF(cpf));
})
/*
Usando os CPFs limpos acima, deixe-os com a formatação correta de CPF.
Ex.: "999.999.999-99"
Mostre o resultado no console.
*/
console.log( '\nFormatando CPFs corretamente:' );

function formatCPF(cpf){
    return clearCPF(cpf).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,'$1.$2.$3-$4');
}

cpfs.forEach(function(cpf){
    console.log(formatCPF(cpf));
})
/*
Crie uma expressão regular que faça match com as palavras "junho" ou "julho",
usando o mínimo de caracteres possíveis na regex.
Para garantir que a regex funciona, teste-a usando o método match. Se houver
o match, o método retorna um array com os matches. Caso contrário, ele
retornará null.
Mostre no console o resultado do match para a frase:
"Os meses de janeiro, junho e julho começam com a letra j."
O resultado deve ser:
["junho", "julho"]
*/
console.log( '\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":' );
// ?
const text = "Os meses de janeiro, junho e julho começam com a letra j.";

function seachMonth(text){
    const regex = /(\ju\w+)/g; //revisão parte 2, /ju[nl]ho/g
    return text.match(regex);
}
console.log(seachMonth(text));
/*
Crie uma expressão regular que faça o match com a abertura de uma tag
HTML qualquer.
Ex.: "<div>", "<section>", "<blockquote>".
Use o método match e faça o teste com a marcação abaixo:
"<div><section><blockquote>Texto <img /></blockquote></section></div>"
O resultado deve ser:
["<div>", "<section>", "<blockquote>"]
*/
console.log( '\nMatch com a abertura de uma tag HTML:' );
// ?
const textHTML = "<div><section><blockquote>Texto <img /></blockquote></section></div>";

function matchTagHTML(text){
    const regex = /(<\w+>)/g;
    return text.match(regex);
}

console.log(matchTagHTML(textHTML));

/*
Crie uma expressão regular que faça o match com uma tag HTML vazia, casando
com a abertura e fechamento da tag.
Ex.: "<div></div>", "<section></section>", "<blockquote></blockquote>".
Use o método match e faça o teste com a marcação abaixo:
"<div><ul><li></li><li></li><li><span></span></li></ul></div>"
O resultado deve ser:
["<li></li>", "<li></li>", "<span></span>"]
*/
console.log( '\nMatch com tags HTML vazias (abertura e fechamento da tag):' );
// ?
const textHTML2 = "<div><ul><li></li><li></li><li><span></span></li></ul></div>";

function matchTagEmpty(text){
    const regex = /(<\w+><\/\w+>)/g;
    return text.match(regex);
}

console.log(matchTagEmpty(textHTML2));
/*
Vamos complicar um pouco agora :D

Crie uma expressão regular que faça o match com um texto existente dentro de
uma tag HTML. O texto deve ser capturado e substituído por:
'O texto dentro da tag "[NOME DA TAG]" é "[TEXTO]"'

Use a marcação abaixo para fazer o replace:
"<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"

A marcação deve permanecer como está, somente o texto deve ser substituído.
No replace, utilize quebras de linha para deixar uma tag por linha.

O resultado deve ser esse:
<h1>O texto dentro da tag "h1" é "Título da página"</h1>
<p>O texto dentro da tag "p" é "Este é um parágrafo"</p>
<footer>O texto dentro da tag "footer" é "Rodapé"</footer>

Uma dica: faça o match aos poucos. Para facilitar o teste, use o site
https://regex101.com/#javascript e verifique se as capturas estão
corretas, para depois aplicar no código ;)
*/
console.log( '\nFazer replace dos textos das tags:' );
// ?
function tagHTML(text){
    const regexTest = /(<[a-z,0-9]+>)|([A-z, à-í]+<)/g;
    const regexReplace = /[<>\/]/g;
    const match = text.match(regexTest);
    for(let i = 0; i <= 4; i = i+2){
        
        let a1 = match[i].replace(regexReplace, "");
        let a2 = match[i+1].replace(regexReplace, "");

        console.log('<'+a1+'>' + 'O texto dentro da tag ' + a1 +' é '+a2 + '</'+a1+'>');
    }
    /*funcionou, porém achei feio o código, kkkkkk;
    depois que assisti a revisão este ćódigo ficou pior ainda, 
    na revisão foi tão simples. 0: */    
}

const textTagsHTML = "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"
console.log(tagHTML(textTagsHTML));
})() //IIFE