//ERROR HANDLING

const user = {email: 'johndoe@gmail.com'};

//try-catch method - allows the script to continue

try {

    //Produce a reference Error (function is not declared)
    //myFunction();

    //Produce a Type Error - you can't call something from null
    //null.myFunction();

    //Produce a Syntax error
    //console.log(eval('"Hello world"')); //evaluates JavaScript within a string

    //Produce an URI error
    //decodeURIComponent('%');

    if(!user.name){
        //throw 'User has no name!'

        throw new SyntaxError('User has no Name');
    }

} catch (error) {
    console.error(error);
    console.error('User Error:', error.message, error.stack);
    /*console.log(error.message);
    console.log(error.name);
    console.log(error instanceof ReferenceError);
    console.log(error instanceof TypeError); */
} finally {
    console.log('Finally it runs regardless of result');
}

console.log('Script continues');

