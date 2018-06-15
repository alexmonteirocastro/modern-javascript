//Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e) {
    //Hide results
    document.getElementById('results').style.display = 'none';

    //Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

function calculateResults() {
    //console.log('calculating...');
    //UI Variables
    const AMOUNT = document.getElementById('amount');
    const INTEREST = document.getElementById('interest');
    const YEARS = document.getElementById('years');
    const MONTHLY_PAYMENT = document.getElementById('monthly-payment');
    const TOTAL_PAYMENT = document.getElementById('total-payment');
    const TOTAL_INTEREST = document.getElementById('total-interest');

    const PRINCIPAL = parseFloat(amount.value);
    const CALCULATED_INTEREST = parseFloat(interest.value) / 100 / 12;
    CALCULATED_PAYMENTS = parseFloat(years.value) * 12;

    //Compute monthly payment 
    const x = Math.pow(1 + CALCULATED_INTEREST, CALCULATED_PAYMENTS);
    const monthly = (PRINCIPAL * x * CALCULATED_INTEREST) / (x - 1);

    if (isFinite(monthly)) {
        MONTHLY_PAYMENT.value = monthly.toFixed(2);
        TOTAL_PAYMENT.value = (monthly * CALCULATED_PAYMENTS).toFixed(2);
        TOTAL_INTEREST.value = ((monthly * CALCULATED_PAYMENTS) - PRINCIPAL).toFixed(2);

        //hide the loader
        document.getElementById('loading').style.display = 'none';

        //show results
        document.getElementById('results').style.display = 'block';
    } else {
        showError('Please check your numbers!');

    }
}

//Show Error
function showError(error) {
    //hide the loader
    document.getElementById('loading').style.display = 'none';

    //hide results
    document.getElementById('results').style.display = 'none';

    //create a Div
    const errorDiv = document.createElement('div');

    //Get elements
    const CARD = document.querySelector('.card');
    const HEADING = document.querySelector('.heading');

    //Add class
    errorDiv.className = 'alert alert-danger';

    //create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert error above heading
    CARD.insertBefore(errorDiv, HEADING);

    //clear error after 3 seconds
    setTimeout(clearError, 3000);

    function clearError() {
        document.querySelector('.alert').remove();
    }

}