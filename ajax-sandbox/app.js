//Create event listener for the button
document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    //console.log('pim-pam')

    //Create an XHR object
    const xhr = new XMLHttpRequest(); //instantiate

    //Open - specify the type of request to make and the locatrion of data
    xhr.open('GET', 'data.txt', true);

    //console.log('READYSTATE', xhr.readyState);

    //Optional - used for spinners/loaders
    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState);
    }


    xhr.onload = function(){

        //console.log('READYSTATE', xhr.readyState);        

        if(this.status === 200){
            //console.log(this.responseText);

            document.getElementById('output').innerHTML = 
                `<h1>${this.responseText}</h1>`
        }
    } 

    /* xhr.onreadystatechange = function(){
        
        console.log('READYSTATE', xhr.readyState);
        
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
        }
    }
 */

    //In case something goes wrong
    xhr.onerror = function(){
        console.log('Request failed');
    }


    //Send the actual request
    xhr.send();

    //ready state values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    //HTTP  statuses
    //200. "OK"
    //403: "Forbidden"
    //404: "Not found"
}