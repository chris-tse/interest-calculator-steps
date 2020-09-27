const slider = document.querySelector('#initial-amount')
const sliderDisplay = document.querySelector('#initial-amount-display .amount')

// Initial startup
sliderDisplay.innerHTML = slider.value

// Event Listeners
slider.addEventListener('change', handleSlide)

/**
 * Event handler for when slider changes
 * @param {Event} event
 */
function handleSlide(event) {
	sliderDisplay.innerHTML = event.target.value
}
