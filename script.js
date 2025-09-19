// --- Global Scope Example ---
let globalCounter = 0; // Global variable

// --- Function with Parameters & Return Value ---
function updateText(elementId, newText) {
  const el = document.getElementById(elementId);
  if (el) {
    el.textContent = newText;
    return true; // Returns useful value
  }
  return false;
}

// --- Local Scope Example ---
function incrementCounter() {
  let localCounter = 0; // Local variable
  localCounter++;
  globalCounter++;
  return localCounter;
}

// --- Reusable Animation Trigger Function ---
function triggerAnimation(elementId, animationClass) {
  const el = document.getElementById(elementId);
  if (el) {
    el.classList.add(animationClass);
    // Remove the animation class after animation ends (assume 500ms)
    setTimeout(() => {
      el.classList.remove(animationClass);
    }, 500);
  }
}

// --- Reusable function to trigger CSS animation by adding/removing a class ---
function triggerCssAnimation(elementId, animationClass, duration = 500) {
  const el = document.getElementById(elementId);
  if (el) {
    el.classList.add(animationClass);
    setTimeout(() => {
      el.classList.remove(animationClass);
    }, duration);
  }
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
  // Button click triggers box animation
  const animateBtn = document.getElementById('animate-btn');
  if (animateBtn) {
    animateBtn.addEventListener('click', () => {
      triggerAnimation('box', 'box-animate');
      updateText('status', `Animation triggered! Global count: ${globalCounter}`);
      incrementCounter();
    });
  }

  // Example usage: animate a box when a button is clicked
  const anotherAnimateBtn = document.getElementById('another-animate-btn');
  if (anotherAnimateBtn) {
    anotherAnimateBtn.addEventListener('click', function() {
      triggerCssAnimation('box', 'box-animate', 700); // 700ms animation
    });
  }
});

// --- Usage in HTML ---
// <button id="animate-btn" class="animated-btn">Animate Box</button>
// <button id="another-animate-btn">Animate Box (700ms)</button>
// <div id="box" class="box"></div>
// <div id="status"></div>
// Add .box-animate CSS for animation effect