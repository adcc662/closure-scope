const buildCount = (i) =>{
    let count = i;
    const displayCount = () => {
        console.log(count++);
    }
    return displayCount;
};

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();

const helloWorld = () => { globalVar = "I'm global"; }
 helloWorld();
console.log(globalVar)

 nameOfDog("Elmo"); 

function nameOfDog(name) 

{ console.log(name); };