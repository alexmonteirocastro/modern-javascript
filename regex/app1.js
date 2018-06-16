let re;

// Literal characters 
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; //Must start with
re = /orld$/i; //Must end with
re = /^hello$/i; //Must begin and end with
re = /^h.llo$/i; //Matches any ONE character (like a wildcard but only for ONE!)
re = /ĥ*llo/i; //Matches any character 0 or more times (wildcard)
re = /gre?a?y/i; //'e' is optional and 'a' is optional too
re = /gre?a?y\?/i; //Escape characters '\'

// Brackets [] - character Sets
re = /gr[ae]y/i; //muust be either 'a' or 'e'
re = /[^GF]ray/i; // matches anything except 'G' or 'F'
re = /^[GF]ray/i; // must begin with either 'G' or 'F'
re = /[A-Z]ray/; // matches any uppercase letter
re = /[a-z]ray/; // matches any lowercase letter
re = /[A-Za-z]ray/; // matches any letter
re= /[0-9]ray/; //Match any digit in range
re= /[0-9][0-9]ray/; //Match any two digits in range

// Braces {} - Quantifiers 
re = /Hel{2}o/i;  //Must occur exactly {m} times
re = /Hel{2,4}o/i;  //Must occur between {m1 to m2}(range) times
re = /Hel{2,}o/i;  //Must occur at least {m} times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/; 

// Shorthand Character Classes
re = /\w/; //word character - alphanumeric (can be any letter or any number or underscore '_')
re = /\w+/; // '+' = one or more
re = /\W/; //non-word character anything but an alphanumeric or underscore
re = /\d/; //match any digit
re = /\d+/; //match any digit
re = /\D/; //match anything but digits
re = /\s/; //match whitespace char
re = /\S/; //non-whitespace char
re = /Hell\b/i; //word boundary

// Assertions
re = /x(?=y)/; // Match only if 'x' is followed by 'y'
re = /x(?!y)/; // Match only if 'x' is NOT followed by 'y'

const str = 'Bix nood';

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