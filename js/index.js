const slider = document.querySelector('#initial-amount')
const sliderDisplay = document.querySelector('#initial-amount-display .amount')
const calculateButton = document.querySelector('.calculate-button')
const interestRateInput = document.querySelector('#interest-rate')
const yearInput = document.querySelector('#years')
const monthlyRadio = document.querySelector('#monthly')

const { format } = new Intl.NumberFormat('en-US')

// Initial startup
sliderDisplay.innerHTML = format(slider.value)
calculateFinalAmount()

// Event Listeners
slider.addEventListener('input', handleSlide)
calculateButton.addEventListener('click', calculateFinalAmount)

/**
 * Event handler for when slider changes
 * @param {Event} event
 */
function handleSlide(event) {
	sliderDisplay.innerHTML = format(event.target.value)
}

/**
 * Calculates compound interest with formula A = P(1 + r/n)^tn where
 * A - final amount
 * P - principal amount
 * r - interest rate in decimal (e.g. 2% -> 0.02)
 * n - Times compounded per time period
 * t - Time period in years
 */
function calculateFinalAmount() {
	const initialAmount = slider.value
	const years = yearInput.value

	// Convert interest from percentage to decimal
	const interestRate = interestRateInput.value / 100

	// Compounding periods - 12 if monthly, 1 if yearly
	const compoundPerYear = monthlyRadio.checked ? 12 : 1

	const finalAmount = initialAmount * Math.pow(1 + interestRate / compoundPerYear, years * compoundPerYear)

	document.querySelector('.result .amount').innerHTML = format(Math.floor(finalAmount))
	document.querySelector('.num-years').innerHTML = years
	document.querySelector('.plural').style.display = years > 1 ? 'inline' : 'none'
}
