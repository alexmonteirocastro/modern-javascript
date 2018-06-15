//Global scope
var a = 1; //var has function scope
let b = 2; //let has block level scope
const c = 3; //let has block level scope

/*
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function scope: ' + a, b, c);
}


test();
*/

/*
//Block Scope
if (true) {
    //Block Scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Block Scope: ' + a, b, c);
}
*/

/*
for (let a = 0; a < 10; a++) {
    console.log(`Loop ${a}`);
}

console.log('Global scope: ' + a, b, c);

//But 
for (var a = 0; a < 10; a++) {
    console.log(`Loop ${a}`);
}

console.log('Global scope: ' + a, b, c);
*/