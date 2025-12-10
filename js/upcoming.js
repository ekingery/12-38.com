/**
 * Upcoming 12:38 Celebrations
 * Shows cities where 12:38 is coming up within the next hour
 */

// USA cities - always include these + 2 random
const USA_ALWAYS = [
  { name: 'New York City', country: 'USA', tz: 'America/New_York' },
  { name: 'Chicago', country: 'USA', tz: 'America/Chicago' },
  { name: 'Santa Barbara', country: 'USA', tz: 'America/Los_Angeles' },
  { name: 'Salt Lake City', country: 'USA', tz: 'America/Denver' },
  { name: 'Raleigh', country: 'USA', tz: 'America/New_York' },
  { name: 'Stoughton', country: 'USA', tz: 'America/Chicago' },
  { name: 'Seattle', country: 'USA', tz: 'America/Los_Angeles' },
  { name: 'Elmhurst', country: 'USA', tz: 'America/Chicago' },
];

const USA_RANDOM_POOL = [
  { name: 'Honolulu', country: 'USA', tz: 'Pacific/Honolulu' },
  { name: 'Anchorage', country: 'USA', tz: 'America/Anchorage' },
  { name: 'Los Angeles', country: 'USA', tz: 'America/Los_Angeles' },
  { name: 'Denver', country: 'USA', tz: 'America/Denver' },
  { name: 'Phoenix', country: 'USA', tz: 'America/Phoenix' },
  { name: 'Houston', country: 'USA', tz: 'America/Chicago' },
  { name: 'Miami', country: 'USA', tz: 'America/New_York' },
  { name: 'Boston', country: 'USA', tz: 'America/New_York' },
  { name: 'Atlanta', country: 'USA', tz: 'America/New_York' },
];

// All other countries (max 3 per country built into list)
const OTHER_CITIES = [
  // Pacific
  { name: 'Pago Pago', country: 'American Samoa', tz: 'Pacific/Pago_Pago' },
  { name: 'Marquesas', country: 'French Polynesia', tz: 'Pacific/Marquesas' },

  // Canada
  { name: 'Vancouver', country: 'Canada', tz: 'America/Vancouver' },
  { name: 'Toronto', country: 'Canada', tz: 'America/Toronto' },
  { name: "St. John's", country: 'Canada', tz: 'America/St_Johns' },

  // Latin America
  { name: 'Mexico City', country: 'Mexico', tz: 'America/Mexico_City' },
  { name: 'Guatemala City', country: 'Guatemala', tz: 'America/Guatemala' },
  { name: 'Havana', country: 'Cuba', tz: 'America/Havana' },
  { name: 'Lima', country: 'Peru', tz: 'America/Lima' },
  { name: 'Bogotá', country: 'Colombia', tz: 'America/Bogota' },
  { name: 'Santiago', country: 'Chile', tz: 'America/Santiago' },
  { name: 'Caracas', country: 'Venezuela', tz: 'America/Caracas' },
  { name: 'La Paz', country: 'Bolivia', tz: 'America/La_Paz' },
  { name: 'Buenos Aires', country: 'Argentina', tz: 'America/Argentina/Buenos_Aires' },
  { name: 'São Paulo', country: 'Brazil', tz: 'America/Sao_Paulo' },
  { name: 'Montevideo', country: 'Uruguay', tz: 'America/Montevideo' },

  // Atlantic
  { name: 'Azores', country: 'Portugal', tz: 'Atlantic/Azores' },
  { name: 'Praia', country: 'Cape Verde', tz: 'Atlantic/Cape_Verde' },
  { name: 'Reykjavik', country: 'Iceland', tz: 'Atlantic/Reykjavik' },

  // Europe
  { name: 'London', country: 'UK', tz: 'Europe/London' },
  { name: 'Dublin', country: 'Ireland', tz: 'Europe/Dublin' },
  { name: 'Paris', country: 'France', tz: 'Europe/Paris' },
  { name: 'Berlin', country: 'Germany', tz: 'Europe/Berlin' },
  { name: 'Rome', country: 'Italy', tz: 'Europe/Rome' },
  { name: 'Madrid', country: 'Spain', tz: 'Europe/Madrid' },
  { name: 'Athens', country: 'Greece', tz: 'Europe/Athens' },
  { name: 'Kyiv', country: 'Ukraine', tz: 'Europe/Kyiv' },
  { name: 'Moscow', country: 'Russia', tz: 'Europe/Moscow' },
  { name: 'Istanbul', country: 'Turkey', tz: 'Europe/Istanbul' },

  // Africa
  { name: 'Accra', country: 'Ghana', tz: 'Africa/Accra' },
  { name: 'Lagos', country: 'Nigeria', tz: 'Africa/Lagos' },
  { name: 'Cairo', country: 'Egypt', tz: 'Africa/Cairo' },
  { name: 'Johannesburg', country: 'South Africa', tz: 'Africa/Johannesburg' },
  { name: 'Nairobi', country: 'Kenya', tz: 'Africa/Nairobi' },

  // Middle East
  { name: 'Jerusalem', country: 'Israel', tz: 'Asia/Jerusalem' },
  { name: 'Riyadh', country: 'Saudi Arabia', tz: 'Asia/Riyadh' },
  { name: 'Baghdad', country: 'Iraq', tz: 'Asia/Baghdad' },
  { name: 'Tehran', country: 'Iran', tz: 'Asia/Tehran' },
  { name: 'Dubai', country: 'UAE', tz: 'Asia/Dubai' },
  { name: 'Kabul', country: 'Afghanistan', tz: 'Asia/Kabul' },

  // South/Central Asia
  { name: 'Karachi', country: 'Pakistan', tz: 'Asia/Karachi' },
  { name: 'Mumbai', country: 'India', tz: 'Asia/Kolkata' },
  { name: 'Colombo', country: 'Sri Lanka', tz: 'Asia/Colombo' },
  { name: 'Kathmandu', country: 'Nepal', tz: 'Asia/Kathmandu' },
  { name: 'Dhaka', country: 'Bangladesh', tz: 'Asia/Dhaka' },
  { name: 'Yangon', country: 'Myanmar', tz: 'Asia/Yangon' },

  // Southeast Asia
  { name: 'Bangkok', country: 'Thailand', tz: 'Asia/Bangkok' },
  { name: 'Ho Chi Minh City', country: 'Vietnam', tz: 'Asia/Ho_Chi_Minh' },
  { name: 'Jakarta', country: 'Indonesia', tz: 'Asia/Jakarta' },
  { name: 'Singapore', country: 'Singapore', tz: 'Asia/Singapore' },
  { name: 'Manila', country: 'Philippines', tz: 'Asia/Manila' },
  { name: 'Kuala Lumpur', country: 'Malaysia', tz: 'Asia/Kuala_Lumpur' },

  // East Asia
  { name: 'Hong Kong', country: 'China', tz: 'Asia/Hong_Kong' },
  { name: 'Taipei', country: 'Taiwan', tz: 'Asia/Taipei' },
  { name: 'Tokyo', country: 'Japan', tz: 'Asia/Tokyo' },
  { name: 'Seoul', country: 'South Korea', tz: 'Asia/Seoul' },

  // Australia/Pacific
  { name: 'Perth', country: 'Australia', tz: 'Australia/Perth' },
  { name: 'Darwin', country: 'Australia', tz: 'Australia/Darwin' },
  { name: 'Sydney', country: 'Australia', tz: 'Australia/Sydney' },
  { name: 'Auckland', country: 'New Zealand', tz: 'Pacific/Auckland' },
  { name: 'Suva', country: 'Fiji', tz: 'Pacific/Fiji' },
  { name: 'Apia', country: 'Samoa', tz: 'Pacific/Apia' },
];

// Shuffle array helper
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Build city list with randomized USA extras
const buildCityList = () => {
  const randomUSA = shuffle(USA_RANDOM_POOL).slice(0, 2);
  return [...USA_ALWAYS, ...randomUSA, ...OTHER_CITIES];
};

let CITIES = buildCityList();

/**
 * Get current time components in a specific timezone
 */
const getTimeInZone = (tz) => {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  const hour = parseInt(parts.find(p => p.type === 'hour').value);
  const minute = parseInt(parts.find(p => p.type === 'minute').value);
  const second = parseInt(parts.find(p => p.type === 'second').value);

  return { hour, minute, second };
};

/**
 * Calculate seconds until the next 12:38 in a given timezone
 * Returns { secondsUntil, amPm, isCelebrating }
 */
const getSecondsUntil1238 = (tz) => {
  const { hour, minute, second } = getTimeInZone(tz);
  const currentSeconds = hour * 3600 + minute * 60 + second;

  // Target times: 00:38:00 (AM) and 12:38:00 (PM)
  const target1238AM = 0 * 3600 + 38 * 60;
  const target1238PM = 12 * 3600 + 38 * 60;
  const end1238AM = target1238AM + 60;
  const end1238PM = target1238PM + 60;

  // Check if currently celebrating (12:38:xx)
  if (currentSeconds >= target1238AM && currentSeconds < end1238AM) {
    return { secondsUntil: 0, amPm: 'AM', isCelebrating: true };
  }
  if (currentSeconds >= target1238PM && currentSeconds < end1238PM) {
    return { secondsUntil: 0, amPm: 'PM', isCelebrating: true };
  }

  // Calculate time until next 12:38
  let secondsUntil, amPm;

  if (currentSeconds < target1238AM) {
    secondsUntil = target1238AM - currentSeconds;
    amPm = 'AM';
  } else if (currentSeconds < target1238PM) {
    secondsUntil = target1238PM - currentSeconds;
    amPm = 'PM';
  } else {
    const secondsInDay = 24 * 3600;
    secondsUntil = (secondsInDay - currentSeconds) + target1238AM;
    amPm = 'AM';
  }

  return { secondsUntil, amPm, isCelebrating: false };
};

/**
 * Format seconds as M:SS or H:MM:SS
 */
const formatCountdown = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, '0');

  if (hours > 0) {
    return `${hours}:${pad(minutes)}:${pad(seconds)}`;
  }
  return `${minutes}:${pad(seconds)}`;
};

/**
 * Render the upcoming celebrations list
 */
const renderUpcoming = () => {
  const container = document.getElementById('upcoming-output');
  if (!container) return;

  const ONE_HOUR = 3600;

  // Calculate time until 12:38 for each city
  const cityData = CITIES.map(city => {
    const { secondsUntil, amPm, isCelebrating } = getSecondsUntil1238(city.tz);
    return {
      name: city.name,
      country: city.country,
      tz: city.tz,
      secondsUntil,
      amPm,
      isCelebrating,
    };
  });

  // Filter to only cities within the next hour (or celebrating)
  // Chicago always appears regardless of timing
  const withinHour = cityData.filter(city =>
    city.name === 'Chicago' || city.isCelebrating || city.secondsUntil <= ONE_HOUR
  );

  // Sort by seconds until (celebrating cities first, then by time)
  withinHour.sort((a, b) => {
    if (a.isCelebrating && !b.isCelebrating) return -1;
    if (!a.isCelebrating && b.isCelebrating) return 1;
    return a.secondsUntil - b.secondsUntil;
  });

  // Build HTML
  if (withinHour.length === 0) {
    container.innerHTML = '<p>No cities hitting 12:38 in the next hour. Check back soon!</p>';
    return;
  }

  // Track which countdown times we've already shown
  const shownCountdowns = new Set();

  let isFirstCountdown = true;
  const html = withinHour.map(city => {
    const countdownKey = `${city.amPm}-${city.secondsUntil}`;
    const showCountdown = !shownCountdowns.has(countdownKey);
    shownCountdowns.add(countdownKey);

    // Add separator line before new countdown groups (except first)
    const showSeparator = showCountdown && !isFirstCountdown;
    if (showCountdown) isFirstCountdown = false;

    let timeStr = '';
    if (showCountdown) {
      timeStr = city.isCelebrating
        ? `<span class="celebrating">HAPPENING NOW!</span>`
        : `12:38 ${city.amPm} in ${formatCountdown(city.secondsUntil)}`;
    }

    const isChicago = city.name === 'Chicago';
    return `${showSeparator ? '<div class="upcoming-separator"></div>' : ''}<div class="upcoming-row${city.isCelebrating ? ' celebrating' : ''}">
      <span class="city-name${isChicago ? ' highlighted' : ''}">${city.name}, ${city.country}</span>
      <span class="city-time">${timeStr}</span>
    </div>`;
  }).join('');

  container.innerHTML = html;
};

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
  renderUpcoming();
  setInterval(renderUpcoming, 1000);
});
