/**
 * 12:38 Countdown Timer
 * Counts down to the next 12:38 AM or PM, with celebration mode during 12:38
 *
 * Debug mode: Add ?time=HH:MM or ?time=HH:MM:SS to URL to simulate a specific time
 * Examples: ?time=12:38 or ?time=00:37:50
 */

// Parse debug time from URL if present
const getDebugTime = () => {
  const params = new URLSearchParams(window.location.search);
  const timeParam = params.get('time');
  if (!timeParam) return null;

  const parts = timeParam.split(':').map(Number);
  if (parts.length < 2 || parts.some(isNaN)) return null;

  return {
    hours: parts[0],
    minutes: parts[1],
    seconds: parts[2] || 0,
  };
};

let debugTime = null;
let debugStartedAt = null;

/**
 * Calculate seconds until the next 12:38 (AM or PM)
 * Returns an object with secondsUntil and isCelebrating
 */
const getTimeUntil1238 = () => {
  let hours, minutes, seconds;

  if (debugTime) {
    // In debug mode, advance time from when debug started
    const elapsed = Math.floor((Date.now() - debugStartedAt) / 1000);
    const totalDebugSeconds = debugTime.hours * 3600 + debugTime.minutes * 60 + debugTime.seconds + elapsed;
    const daySeconds = totalDebugSeconds % (24 * 3600);
    hours = Math.floor(daySeconds / 3600);
    minutes = Math.floor((daySeconds % 3600) / 60);
    seconds = daySeconds % 60;
  } else {
    const now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
  }

  const currentSeconds = hours * 3600 + minutes * 60 + seconds;

  const target1238AM = 0 * 3600 + 38 * 60;
  const target1238PM = 12 * 3600 + 38 * 60;
  const end1238AM = target1238AM + 60;
  const end1238PM = target1238PM + 60;

  let secondsUntil;
  let isCelebrating = false;

  if (currentSeconds >= target1238AM && currentSeconds < end1238AM) {
    isCelebrating = true;
    secondsUntil = end1238AM - currentSeconds;
  } else if (currentSeconds >= target1238PM && currentSeconds < end1238PM) {
    isCelebrating = true;
    secondsUntil = end1238PM - currentSeconds;
  } else if (currentSeconds < target1238AM) {
    secondsUntil = target1238AM - currentSeconds;
  } else if (currentSeconds < target1238PM) {
    secondsUntil = target1238PM - currentSeconds;
  } else {
    const secondsInDay = 24 * 3600;
    secondsUntil = (secondsInDay - currentSeconds) + target1238AM;
  }

  return { secondsUntil, isCelebrating };
};

/**
 * Create an image element for a clock digit
 */
const createDigitImg = (digit) => {
  const img = document.createElement('img');
  img.src = `/images/clock/${digit}.png`;
  img.alt = String(digit);
  return img;
};

/**
 * Create the colon/dots image (blinking based on current second)
 */
const createDotsImg = (showDots) => {
  const img = document.createElement('img');
  img.src = showDots ? '/images/clock/dots.png' : '/images/clock/no_dots.png';
  img.alt = ':';
  img.className = 'dots';
  return img;
};

/**
 * Create a row container div
 */
const createRow = (className) => {
  const div = document.createElement('div');
  div.className = `clock-row ${className}`;
  return div;
};

/**
 * Render the celebration display (large 12:38)
 */
const renderCelebration = (container, secondsRemaining) => {
  const showDots = secondsRemaining % 2 === 0;

  container.innerHTML = '';

  const row = createRow('celebration-row');
  row.appendChild(createDigitImg(1));
  row.appendChild(createDigitImg(2));
  row.appendChild(createDotsImg(showDots));
  row.appendChild(createDigitImg(3));
  row.appendChild(createDigitImg(8));

  container.appendChild(row);
};

/**
 * Render the countdown display (HH:MM:SS till 12:38)
 */
const renderCountdown = (container, totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const showDots = totalSeconds % 2 === 0;

  container.innerHTML = '';

  // Countdown row: HH:MM:SS (skip hours if 0)
  const countdownRow = createRow('countdown-row');
  if (hours > 0) {
    countdownRow.appendChild(createDigitImg(Math.floor(hours / 10)));
    countdownRow.appendChild(createDigitImg(hours % 10));
    countdownRow.appendChild(createDotsImg(showDots));
  }
  countdownRow.appendChild(createDigitImg(Math.floor(minutes / 10)));
  countdownRow.appendChild(createDigitImg(minutes % 10));
  countdownRow.appendChild(createDotsImg(showDots));
  countdownRow.appendChild(createDigitImg(Math.floor(seconds / 10)));
  countdownRow.appendChild(createDigitImg(seconds % 10));
  container.appendChild(countdownRow);

  // Till row
  const tillRow = createRow('till-row');
  const tillImg = document.createElement('img');
  tillImg.src = '/images/clock/till.png';
  tillImg.alt = 'till';
  tillRow.appendChild(tillImg);
  container.appendChild(tillRow);

  // Target 12:38 row
  const targetRow = createRow('target-row');
  targetRow.appendChild(createDigitImg(1));
  targetRow.appendChild(createDigitImg(2));
  targetRow.appendChild(createDotsImg(true));
  targetRow.appendChild(createDigitImg(3));
  targetRow.appendChild(createDigitImg(8));
  container.appendChild(targetRow);
};

/**
 * Update the clock display
 */
const updateClock = () => {
  const container = document.getElementById('clock_output');
  if (!container) return;

  const { secondsUntil, isCelebrating } = getTimeUntil1238();

  if (isCelebrating) {
    renderCelebration(container, secondsUntil);
  } else {
    renderCountdown(container, secondsUntil);
  }
};

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
  // Check for debug mode
  debugTime = getDebugTime();
  if (debugTime) {
    debugStartedAt = Date.now();
    console.log(`Debug mode: simulating time ${debugTime.hours}:${String(debugTime.minutes).padStart(2, '0')}:${String(debugTime.seconds).padStart(2, '0')}`);
  }

  updateClock();
  setInterval(updateClock, 1000);
});
