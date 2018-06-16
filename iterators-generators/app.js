//Iterator example

/*
function nameIterator(names){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < names.length ?
            { value: names[nextIndex++], done: false } : 
            {done: true}
        }
    }
}

//create array of names
const namesArray = ['Jack', 'Gill', 'John'];

//Init iterator and pass names array
const names = nameIterator(namesArray);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
*/

//Generator example
/*
function* sayNames(){ //'*' tells it as a generator
    yield 'Jack';
    yield 'Jill';
    yield 'John';
}

const name = sayNames();

console.log(name.next());
console.log(name.next());
console.log(name.next());
*/

//generate IDs - ID creator

function* createIds(){
    let index = 0;

    while(true){
        yield index++;
    }
}


const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
