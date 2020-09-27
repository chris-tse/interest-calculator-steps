const slider = document.querySelector('#initial-amount')
const sliderDisplay = document.querySelector('#initial-amount-display .amount')

const { format } = new Intl.NumberFormat('en-US')

// Initial startup
sliderDisplay.innerHTML = format(slider.value)

// Event Listeners
slider.addEventListener('input', handleSlide)

/**
 * Event handler for when slider changes
 * @param {Event} event
 */
function handleSlide(event) {
	sliderDisplay.innerHTML = format(event.target.value)
}
