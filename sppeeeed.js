
    const needle = document.querySelector('.needle');
    const speedDisplay = document.getElementById('speed-display');

    let currentSpeed = 0;
    let targetSpeed = 0;

    const speeds = [0, 50, 100, 150];
    const positions = [0, 90, 180, 270];

    function updateNeedle() {
      const percentage = targetSpeed / speeds[speeds.length - 1];
      const angle = percentage * 270;

      needle.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      speedDisplay.textContent = `${targetSpeed} km/h`;
    }

    function changeSpeed(event) {
      targetSpeed = speeds[event.target.value];
      updateNeedle();
    }

    const speedButtons = document.querySelectorAll('.speed-button');
    speedButtons.forEach(button => button.addEventListener('click', changeSpeed));

