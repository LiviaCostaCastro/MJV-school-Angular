/**
 * EXERCÍCIOS
 * 
 * Antes de começar, certifique-se de instalar as 
 * dependências do projeto utilizando "npm install"
 * 
 * Você pode executar o arquivo dos exercícios usando F5, e pode colocar breakpoints no lado esquerdo da linha
 * 
 * 1- Crie um tipo para representar um objeto que contenha as suas informações de 
 * nome, profissão, idade e uma lista de assuntos de seu interesse.
 * */

interface person {
    name: string;
    profession: string;
    age: number;
    interests: string[];
}


/**
 * 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.
 * */

const people: person = {
    name: "Livia",
    profession: "Desenvolvedora Júnior",
    age: 32,
    interests: ["typescript", "javascript", "css"],
}


/**
 * 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, 
 * e retorne somente a lista de assuntos do objeto.
* */

function interfaceperson (person: any) {
    return person.interests;
}


/**
 * 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
 * */

 function interfaceperson1 (person: any): string {
    return person.interests;
}


/**
 * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
* */

enum coursesubjects {
    angular = "angular",
    typescript = "typescript",
    git = "git",
}

/**
 * 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.
 * */

 interface teacher {
    name: string;
    subjects: string[];
  }

/* *
 * 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. 
 * Nathan = Angular e Git, Alan = Angular, Typescript e Git
 * */

const alan: teacher = {
    name: "Alan",
    subjects: [coursesubjects.angular, coursesubjects.typescript, coursesubjects.git],
  };

const nathan: teacher = {
    name: "Nathan",
    subjects: [coursesubjects.angular, coursesubjects.git],
  };


/**
 * 8 - Declare e popule um array com os objetos do exercício 7.
* */

const teachers: teacher[] = [nathan, alan];


/**
 * 9 - Faça uma função que receba um argumento de array de Professor 
 * e retorne um novo array de strings contendo somente os nomes dos professores.
 * */

const teachersnames = (teachers: teacher[]): string[] => { 
  return teachers.map((teacher) => teacher.name);
}
/**
 * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
 * */

/**
 * 11 - Faça uma função que receba um argumento de array de Professores e 
 * retorne o primeiro Professor encontrado que dê aula de Typescript.
 * 
 **/



