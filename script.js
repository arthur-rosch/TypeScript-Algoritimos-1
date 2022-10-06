// 1. Faça uma função PalavraMaisLonga(frase) pegue o parâmetro “frase” que está sendo
// passado e retorne a palavra mais longa na string. Se houver duas ou mais palavras
// com o mesmo tamanho, retorne a primeira palavra da string com esse tamanho.
// Deve ignorar pontuação e caracteres especiais (!?-.#$, etc). As palavras podem
// conter números, por exemplo “Ola palavra123 831”.
// Exemplo: entrada: “estudar&! diversão” entrada: “eu adoro pizza”
// saída: “diversão” saída: “adoro”
function MaiorPalavra(Palavra) {
    var MaiorPalavraRetorno = "";
    var ListaPalavras = Palavra.split(" ");
    ListaPalavras.forEach(Verificate);
    function Verificate(word) {
        var NumberTeste = word.replace(/[^a-zA-Z0-9\s]/g, "");
        if (NumberTeste.length > MaiorPalavraRetorno.length) {
            MaiorPalavraRetorno = NumberTeste;
        }
    }
    return console.log(MaiorPalavraRetorno);
}
MaiorPalavra("luca1111 lucas");
// 2. Faça uma função ValidarNomeDeUsuario(nome) use o parâmetro “nome” que é
// passado e verifique se é um nome de usuário válido de acordo com as regras:
// a. O nome de usuário tem entre 4 e 25 caracteres;
// b. Deve obrigatoriamente começar com uma letra;
// c. Só deve conter letras, número e undeline ( _ );
// d. O nome não pode ter o último caractere como underline( _ ).
// Se o nome de usuário for válido deve retornar true, e se for inválido deve retornar
// false. Exemplo: entrada: “Dev_brabo” entrada: “_SeniorDev2”
// saída: true saída: false
function validarNome(nome) {
    var array09 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"], regex = nome.replace(/[^0-9\s]/g, "");
    if (nome.length >= 4 && nome.length <= 25) {
        if (nome[nome.length - 1] == "_" || nome[0] == "_" || regex == nome[0]) {
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}
console.log(validarNome("Arthur"));
//  3. Faça uma função ElementosEmComum(arrayString) leia o array de strings passado
// como parâmetro “arrayString” que deve conter dois elementos: o primeiro
// representa uma lista de número separados por vírgula e estão em ordem crescente,
// o segundo elemento representa uma outra lista de números também separados por
// vírgula e ordenados. A função deve retornar uma string com os números que se
// repetem em ambos os elementos de arrayString. Se não houver valores repetidos,
// retorne “false” como uma string.
// Exemplo: entrada: [“2, 4, 5, 8, 14”, “2, 3, 5, 14, 16”]
// saída: “2, 5, 14
// let array: String[] = ["2, 4, 5, 8, 14", "2, 3, 5, 14, 16"];
// function ElementosEmComum(arrayString: string[]) {
//   let arrayA = arrayString[0].split(","),
//     arrayB = arrayString[1].split(","),
//     arrayC: string[] = [];
//   for (let A = 0; A < arrayA.length; A++) {
//     for (let B = 0; B < arrayA.length; B++) {
//       if (arrayA[A] == arrayB[B]) {
//         arrayC.push(arrayB[B]);
//       }
//     }
//   }
//   console.log(arrayA, arrayB, arrayC);
// }
// ElementosEmComum(array);
