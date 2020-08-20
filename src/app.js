//listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults)

//calculate results
function calculateResults(e) {
    console.log('calculating...');
    //UI Vars
    const amount = document.getElementById('amount');

    e.preventDefault();
}