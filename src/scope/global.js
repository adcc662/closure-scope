var hello = 'hello';
let world = 'Hello World';
const helloWorld = 'Hello World!';


const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const hello_World = () => {
    globalVar = 'Im Global'
}

hello_World();
console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar = 'Im Global Var'
}

anotherFunction();
console.log(globalVar);


