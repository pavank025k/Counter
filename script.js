/**
 * COSC Commit Counter - JavaScript Module
 * 
 * Tracks and displays commit counts for HackWeek with:
 * - Increment functionality
 * - Decrement functionality (with minimum of 0)
 * - Reset functionality
 */

// Wait for DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', initializeCounter);

/**
 * Main initialization function for the commit counter
 * Sets up event listeners and initial state
 */
function initializeCounter() {
    // DOM element references
    const counterDisplay = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const resetBtn = document.getElementById('reset');
    
    // State variable to track commit count
    let commitCount = 0;
    
    /**
     * Updates the counter display with current commit count
     */
    function updateCounterDisplay() {
        counterDisplay.textContent = commitCount;
        
        // Optional: Add visual feedback when counter updates
        counterDisplay.classList.add('counter-update');
        setTimeout(() => {
            counterDisplay.classList.remove('counter-update');
        }, 300);
    }
    
    /**
     * Increments the commit count by 1
     */
    function incrementCount() {
        commitCount++;
        updateCounterDisplay();
    }
    
    /**
     * Decrements the commit count by 1, but not below 0
     */
    function decrementCount() {
        if (commitCount > 0) {
            commitCount--;
            updateCounterDisplay();
        } else {
            // Optional: Provide feedback when decrement is not allowed
            counterDisplay.classList.add('counter-error');
            setTimeout(() => {
                counterDisplay.classList.remove('counter-error');
            }, 300);
        }
    }
    
    /**
     * Resets the commit count to 0
     */
    function resetCount() {
        commitCount = 0;
        updateCounterDisplay();
    }
    
    // Event listeners for button interactions
    incrementBtn.addEventListener('click', incrementCount);
    decrementBtn.addEventListener('click', decrementCount);
    resetBtn.addEventListener('click', resetCount);
    
    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowUp':
                incrementCount();
                break;
            case 'ArrowDown':
                decrementCount();
                break;
            case 'r':
            case 'R':
                resetCount();
                break;
        }
    });
    
    // Initialize display
    updateCounterDisplay();
}