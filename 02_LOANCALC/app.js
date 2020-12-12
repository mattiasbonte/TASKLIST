document
  .querySelector('#loan-form')
  .addEventListener('submit', calculateResults);

function calculateResults(e) {
  // UI Variables
  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const years = document.querySelector('#years');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalinterest = document.querySelector('#total-interest');

  const principal = parseFloat(amount.value);
  const calculatedinterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute Monthly Payment
  const x = Math.pow(1 + calculatedinterest, calculatedPayments);
  const monthly = (principal * x * calculatedinterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalinterest.value = (monthly * calculatedPayments - principal).toFixed(2);
  } else {
    showError('Please Check Your Numbers');
  }
  e.preventDefault();
}

function showError(error) {
  // Create Div
  const errorDiv = document.createElement('div');

  // Get Elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add Class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3000);
}
