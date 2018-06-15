let re;

//Literal characters 
re = /hello/;



const str = 'Hello World';

//Log results 
const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} DOES NOT match ${re.source}`);
    }
}

reTest(re, str);