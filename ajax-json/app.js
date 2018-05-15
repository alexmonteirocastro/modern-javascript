//Create event listener for button 1

document.getElementById('button1').addEventListener('click', loadCustomer);

//Create event listener for button 2

document.getElementById('button2').addEventListener('click', loadCustomers);

//Function for loading single customer data
function loadCustomer(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true); //true for asynchronous

    //request body per se
    xhr.onload = function(){
        if(this.status === 200){
            //console.log(this.responseText);

            const customer = JSON.parse(this.responseText); //parse as a javaScript object

            const output = 
                `<ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>`;

            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();
}

//Function for loading customers data
function loadCustomers(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true); //true for asynchronous

    //request body per se
    xhr.onload = function(){
        if(this.status === 200){
            //console.log(this.responseText);

            const customers = JSON.parse(this.responseText); //parse as a javaScript object

            let output = '';
            
            customers.forEach(function(customer) {
                output += 
                `<ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>`;
            });

            document.getElementById('customers').innerHTML = output;
        }
    }

    xhr.send();
}