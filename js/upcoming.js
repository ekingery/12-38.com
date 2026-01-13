/**
 * Upcoming Celebrations
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
  { name: 'Oregon', country: 'USA', tz: 'America/Chicago' },
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

// All other countries
const OTHER_CITIES = [
  // Antarctica
  { name: 'McMurdo Station', country: 'Antarctica', tz: 'Antarctica/McMurdo' },
  { name: 'Casey Station', country: 'Antarctica', tz: 'Antarctica/Casey' },
  { name: 'Rothera Station', country: 'Antarctica', tz: 'Antarctica/Rothera' },

  // Pacific Islands
  { name: 'Pago Pago', country: 'American Samoa', tz: 'Pacific/Pago_Pago' },
  { name: 'Bora Bora', country: 'French Polynesia', tz: 'Pacific/Tahiti' },
  { name: 'Tahiti', country: 'French Polynesia', tz: 'Pacific/Tahiti' },
  { name: 'Tonga', country: 'Tonga', tz: 'Pacific/Tongatapu' },
  { name: 'Guam', country: 'USA', tz: 'Pacific/Guam' },

  // Canada
  { name: 'Vancouver', country: 'Canada', tz: 'America/Vancouver' },
  { name: 'Toronto', country: 'Canada', tz: 'America/Toronto' },
  { name: "St. John's", country: 'Canada', tz: 'America/St_Johns' },
  { name: 'Whitehorse', country: 'Canada', tz: 'America/Whitehorse' },
  { name: 'Yellowknife', country: 'Canada', tz: 'America/Yellowknife' },
  { name: 'Iqaluit', country: 'Canada', tz: 'America/Iqaluit' },
  { name: 'Moose Jaw', country: 'Canada', tz: 'America/Regina' },
  { name: 'Medicine Hat', country: 'Canada', tz: 'America/Edmonton' },
  { name: 'Winnipeg', country: 'Canada', tz: 'America/Winnipeg' },

  // USA (fun names)
  { name: 'Boise', country: 'USA', tz: 'America/Boise' },
  { name: 'Albuquerque', country: 'USA', tz: 'America/Denver' },
  { name: 'Kalamazoo', country: 'USA', tz: 'America/Detroit' },
  { name: 'Walla Walla', country: 'USA', tz: 'America/Los_Angeles' },
  { name: 'Tallahassee', country: 'USA', tz: 'America/New_York' },
  { name: 'Chattanooga', country: 'USA', tz: 'America/New_York' },
  { name: 'Tuscaloosa', country: 'USA', tz: 'America/Chicago' },
  { name: 'Schenectady', country: 'USA', tz: 'America/New_York' },
  { name: 'Poughkeepsie', country: 'USA', tz: 'America/New_York' },
  { name: 'Oshkosh', country: 'USA', tz: 'America/Chicago' },
  { name: 'Topeka', country: 'USA', tz: 'America/Chicago' },
  { name: 'Wichita', country: 'USA', tz: 'America/Chicago' },
  { name: 'Tucumcari', country: 'USA', tz: 'America/Denver' },

  // Mexico & Central America
  { name: 'Mexico City', country: 'Mexico', tz: 'America/Mexico_City' },
  { name: 'Cancún', country: 'Mexico', tz: 'America/Cancun' },
  { name: 'Tijuana', country: 'Mexico', tz: 'America/Tijuana' },
  { name: 'Guatemala City', country: 'Guatemala', tz: 'America/Guatemala' },
  { name: 'Havana', country: 'Cuba', tz: 'America/Havana' },
  { name: 'San Juan', country: 'Puerto Rico', tz: 'America/Puerto_Rico' },
  { name: 'Kingston', country: 'Jamaica', tz: 'America/Jamaica' },
  { name: 'Nassau', country: 'Bahamas', tz: 'America/Nassau' },

  // South America
  { name: 'Lima', country: 'Peru', tz: 'America/Lima' },
  { name: 'Cusco', country: 'Peru', tz: 'America/Lima' },
  { name: 'Bogotá', country: 'Colombia', tz: 'America/Bogota' },
  { name: 'Cartagena', country: 'Colombia', tz: 'America/Bogota' },
  { name: 'Santiago', country: 'Chile', tz: 'America/Santiago' },
  { name: 'Caracas', country: 'Venezuela', tz: 'America/Caracas' },
  { name: 'La Paz', country: 'Bolivia', tz: 'America/La_Paz' },
  { name: 'Buenos Aires', country: 'Argentina', tz: 'America/Argentina/Buenos_Aires' },
  { name: 'Ushuaia', country: 'Argentina', tz: 'America/Argentina/Ushuaia' },
  { name: 'São Paulo', country: 'Brazil', tz: 'America/Sao_Paulo' },
  { name: 'Manaus', country: 'Brazil', tz: 'America/Manaus' },
  { name: 'Rio de Janeiro', country: 'Brazil', tz: 'America/Sao_Paulo' },
  { name: 'Montevideo', country: 'Uruguay', tz: 'America/Montevideo' },
  { name: 'Quito', country: 'Ecuador', tz: 'America/Guayaquil' },
  { name: 'Galápagos', country: 'Ecuador', tz: 'Pacific/Galapagos' },
  { name: 'Asunción', country: 'Paraguay', tz: 'America/Asuncion' },

  // Atlantic
  { name: 'Azores', country: 'Portugal', tz: 'Atlantic/Azores' },
  { name: 'Reykjavik', country: 'Iceland', tz: 'Atlantic/Reykjavik' },

  // Europe
  { name: 'London', country: 'UK', tz: 'Europe/London' },
  { name: 'Edinburgh', country: 'UK', tz: 'Europe/London' },
  { name: 'Dublin', country: 'Ireland', tz: 'Europe/Dublin' },
  { name: 'Paris', country: 'France', tz: 'Europe/Paris' },
  { name: 'Berlin', country: 'Germany', tz: 'Europe/Berlin' },
  { name: 'Rome', country: 'Italy', tz: 'Europe/Rome' },
  { name: 'Madrid', country: 'Spain', tz: 'Europe/Madrid' },
  { name: 'Barcelona', country: 'Spain', tz: 'Europe/Madrid' },
  { name: 'Lisbon', country: 'Portugal', tz: 'Europe/Lisbon' },
  { name: 'Amsterdam', country: 'Netherlands', tz: 'Europe/Amsterdam' },
  { name: 'Brussels', country: 'Belgium', tz: 'Europe/Brussels' },
  { name: 'Vienna', country: 'Austria', tz: 'Europe/Vienna' },
  { name: 'Prague', country: 'Czech Republic', tz: 'Europe/Prague' },
  { name: 'Warsaw', country: 'Poland', tz: 'Europe/Warsaw' },
  { name: 'Budapest', country: 'Hungary', tz: 'Europe/Budapest' },
  { name: 'Bucharest', country: 'Romania', tz: 'Europe/Bucharest' },
  { name: 'Athens', country: 'Greece', tz: 'Europe/Athens' },
  { name: 'Kyiv', country: 'Ukraine', tz: 'Europe/Kyiv' },
  { name: 'Moscow', country: 'Russia', tz: 'Europe/Moscow' },
  { name: 'Istanbul', country: 'Turkey', tz: 'Europe/Istanbul' },
  { name: 'Oslo', country: 'Norway', tz: 'Europe/Oslo' },
  { name: 'Stockholm', country: 'Sweden', tz: 'Europe/Stockholm' },
  { name: 'Copenhagen', country: 'Denmark', tz: 'Europe/Copenhagen' },
  { name: 'Helsinki', country: 'Finland', tz: 'Europe/Helsinki' },
  { name: 'Tallinn', country: 'Estonia', tz: 'Europe/Tallinn' },
  { name: 'Riga', country: 'Latvia', tz: 'Europe/Riga' },
  { name: 'Vilnius', country: 'Lithuania', tz: 'Europe/Vilnius' },
  { name: 'Zürich', country: 'Switzerland', tz: 'Europe/Zurich' },
  { name: 'Monaco', country: 'Monaco', tz: 'Europe/Monaco' },

  // Africa
  { name: 'Accra', country: 'Ghana', tz: 'Africa/Accra' },
  { name: 'Lagos', country: 'Nigeria', tz: 'Africa/Lagos' },
  { name: 'Cairo', country: 'Egypt', tz: 'Africa/Cairo' },
  { name: 'Johannesburg', country: 'South Africa', tz: 'Africa/Johannesburg' },
  { name: 'Cape Town', country: 'South Africa', tz: 'Africa/Johannesburg' },
  { name: 'Nairobi', country: 'Kenya', tz: 'Africa/Nairobi' },
  { name: 'Casablanca', country: 'Morocco', tz: 'Africa/Casablanca' },
  { name: 'Marrakech', country: 'Morocco', tz: 'Africa/Casablanca' },
  { name: 'Timbuktu', country: 'Mali', tz: 'Africa/Bamako' },
  { name: 'Zanzibar', country: 'Tanzania', tz: 'Africa/Dar_es_Salaam' },
  { name: 'Dar es Salaam', country: 'Tanzania', tz: 'Africa/Dar_es_Salaam' },
  { name: 'Addis Ababa', country: 'Ethiopia', tz: 'Africa/Addis_Ababa' },
  { name: 'Kinshasa', country: 'DR Congo', tz: 'Africa/Kinshasa' },
  { name: 'Harare', country: 'Zimbabwe', tz: 'Africa/Harare' },
  { name: 'Lusaka', country: 'Zambia', tz: 'Africa/Lusaka' },
  { name: 'Kampala', country: 'Uganda', tz: 'Africa/Kampala' },
  { name: 'Dakar', country: 'Senegal', tz: 'Africa/Dakar' },
  { name: 'Tunis', country: 'Tunisia', tz: 'Africa/Tunis' },
  { name: 'Algiers', country: 'Algeria', tz: 'Africa/Algiers' },
  { name: 'Tripoli', country: 'Libya', tz: 'Africa/Tripoli' },
  { name: 'Antananarivo', country: 'Madagascar', tz: 'Indian/Antananarivo' },

  // Middle East
  { name: 'Jerusalem', country: 'Israel', tz: 'Asia/Jerusalem' },
  { name: 'Riyadh', country: 'Saudi Arabia', tz: 'Asia/Riyadh' },
  { name: 'Baghdad', country: 'Iraq', tz: 'Asia/Baghdad' },
  { name: 'Tehran', country: 'Iran', tz: 'Asia/Tehran' },
  { name: 'Dubai', country: 'UAE', tz: 'Asia/Dubai' },
  { name: 'Kabul', country: 'Afghanistan', tz: 'Asia/Kabul' },
  { name: 'Muscat', country: 'Oman', tz: 'Asia/Muscat' },
  { name: 'Doha', country: 'Qatar', tz: 'Asia/Qatar' },
  { name: 'Kuwait City', country: 'Kuwait', tz: 'Asia/Kuwait' },
  { name: 'Beirut', country: 'Lebanon', tz: 'Asia/Beirut' },
  { name: 'Amman', country: 'Jordan', tz: 'Asia/Amman' },

  // Central Asia
  { name: 'Karachi', country: 'Pakistan', tz: 'Asia/Karachi' },
  { name: 'Mumbai', country: 'India', tz: 'Asia/Kolkata' },
  { name: 'Bangalore', country: 'India', tz: 'Asia/Kolkata' },
  { name: 'Colombo', country: 'Sri Lanka', tz: 'Asia/Colombo' },
  { name: 'Kathmandu', country: 'Nepal', tz: 'Asia/Kathmandu' },
  { name: 'Dhaka', country: 'Bangladesh', tz: 'Asia/Dhaka' },
  { name: 'Yangon', country: 'Myanmar', tz: 'Asia/Yangon' },

  // Southeast Asia
  { name: 'Bangkok', country: 'Thailand', tz: 'Asia/Bangkok' },
  { name: 'Ho Chi Minh City', country: 'Vietnam', tz: 'Asia/Ho_Chi_Minh' },
  { name: 'Hanoi', country: 'Vietnam', tz: 'Asia/Ho_Chi_Minh' },
  { name: 'Jakarta', country: 'Indonesia', tz: 'Asia/Jakarta' },
  { name: 'Bali', country: 'Indonesia', tz: 'Asia/Makassar' },
  { name: 'Singapore', country: 'Singapore', tz: 'Asia/Singapore' },
  { name: 'Manila', country: 'Philippines', tz: 'Asia/Manila' },
  { name: 'Kuala Lumpur', country: 'Malaysia', tz: 'Asia/Kuala_Lumpur' },
  { name: 'Phnom Penh', country: 'Cambodia', tz: 'Asia/Phnom_Penh' },
  { name: 'Vientiane', country: 'Laos', tz: 'Asia/Vientiane' },

  // East Asia
  { name: 'Hong Kong', country: 'China', tz: 'Asia/Hong_Kong' },
  { name: 'Shanghai', country: 'China', tz: 'Asia/Shanghai' },
  { name: 'Beijing', country: 'China', tz: 'Asia/Shanghai' },
  { name: 'Taipei', country: 'Taiwan', tz: 'Asia/Taipei' },
  { name: 'Tokyo', country: 'Japan', tz: 'Asia/Tokyo' },
  { name: 'Osaka', country: 'Japan', tz: 'Asia/Tokyo' },
  { name: 'Seoul', country: 'South Korea', tz: 'Asia/Seoul' },
  { name: 'Ulaanbaatar', country: 'Mongolia', tz: 'Asia/Ulaanbaatar' },
  { name: 'Vladivostok', country: 'Russia', tz: 'Asia/Vladivostok' },
  { name: 'Yakutsk', country: 'Russia', tz: 'Asia/Yakutsk' },
  { name: 'Magadan', country: 'Russia', tz: 'Asia/Magadan' },
  { name: 'Petropavlovsk', country: 'Russia', tz: 'Asia/Kamchatka' },

  // Australia/Pacific
  { name: 'Perth', country: 'Australia', tz: 'Australia/Perth' },
  { name: 'Darwin', country: 'Australia', tz: 'Australia/Darwin' },
  { name: 'Adelaide', country: 'Australia', tz: 'Australia/Adelaide' },
  { name: 'Melbourne', country: 'Australia', tz: 'Australia/Melbourne' },
  { name: 'Sydney', country: 'Australia', tz: 'Australia/Sydney' },
  { name: 'Brisbane', country: 'Australia', tz: 'Australia/Brisbane' },
  { name: 'Hobart', country: 'Australia', tz: 'Australia/Hobart' },
  { name: 'Auckland', country: 'New Zealand', tz: 'Pacific/Auckland' },
  { name: 'Wellington', country: 'New Zealand', tz: 'Pacific/Auckland' },
  { name: 'Christchurch', country: 'New Zealand', tz: 'Pacific/Auckland' },
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

  // Build HTML
  if (withinHour.length === 0) {
    container.innerHTML = '<p>No cities hitting 12:38 in the next hour. Check back soon!</p>';
    return;
  }

  // Group cities by countdown key (same time = same group)
  const groups = new Map();
  withinHour.forEach(city => {
    const key = `${city.amPm}-${city.secondsUntil}`;
    if (!groups.has(key)) {
      groups.set(key, { cities: [], amPm: city.amPm, secondsUntil: city.secondsUntil, isCelebrating: city.isCelebrating });
    }
    groups.get(key).cities.push(city);
  });

  // Sort groups by time (celebrating first, then by seconds, then by AM/PM for stability)
  const sortedGroups = Array.from(groups.values()).sort((a, b) => {
    if (a.isCelebrating && !b.isCelebrating) return -1;
    if (!a.isCelebrating && b.isCelebrating) return 1;
    if (a.secondsUntil !== b.secondsUntil) return a.secondsUntil - b.secondsUntil;
    return a.amPm.localeCompare(b.amPm);  // Stable tiebreaker for equal countdown times
  });

  // Track country counts across all groups (max 3 per country overall)
  const globalCountryCounts = new Map();

  // Process each group: limit countries, sort by country
  const processedGroups = sortedGroups.map(group => {
    const countryCounts = new Map();
    const filtered = [];

    // Sort by name length (shortest first) to prevent long names from being cut off
    group.cities.sort((a, b) => {
      return a.name.length - b.name.length;
    });

    const MAX_CITIES_PER_GROUP = 6;

    for (const city of group.cities) {
      // Chicago always appears and doesn't count towards limits
      if (city.name === 'Chicago') {
        filtered.push(city);
        continue;
      }

      // Max cities per time block
      if (filtered.length >= MAX_CITIES_PER_GROUP) continue;

      const countryCount = countryCounts.get(city.country) || 0;
      const globalCount = globalCountryCounts.get(city.country) || 0;

      // Max 3 per country overall
      if (globalCount >= 3) continue;

      // Hard limit of 2 per country per group
      if (countryCount >= 2) continue;

      // For non-USA, prefer 1 per group (diversity)
      if (city.country !== 'USA' && countryCount >= 1) {
        continue;
      }

      filtered.push(city);
      countryCounts.set(city.country, countryCount + 1);
      globalCountryCounts.set(city.country, globalCount + 1);
    }

    return { ...group, cities: filtered };
  });

  // Build HTML
  let isFirstGroup = true;
  const html = processedGroups.map(group => {
    if (group.cities.length === 0) return '';

    const showSeparator = !isFirstGroup;
    isFirstGroup = false;

    const timeStr = group.isCelebrating
      ? `<span class="celebrating">HAPPENING NOW!</span>`
      : `12:38 ${group.amPm} in ${formatCountdown(group.secondsUntil)}`;

    const citiesHtml = group.cities.map((city, idx) => {
      const isChicago = city.name === 'Chicago';
      const showTime = idx === 0; // Only show countdown on first city of group
      return `<div class="upcoming-row${city.isCelebrating ? ' celebrating' : ''}">
      <span class="city-name${isChicago ? ' highlighted' : ''}">${city.name}, ${city.country}</span>
      <span class="city-time">${showTime ? timeStr : ''}</span>
    </div>`;
    }).join('');

    return `${showSeparator ? '<div class="upcoming-separator"></div>' : ''}${citiesHtml}`;
  }).join('');

  container.innerHTML = html;
};

// Initialize on page load


window.addEventListener('DOMContentLoaded', () => {
  renderUpcoming();
  setInterval(renderUpcoming, 1000); // Update countdown every second

  // Function to refresh cities and re-render
  const refreshCities = () => {
    CITIES = buildCityList();
    renderUpcoming();
  };

  // Calculate ms until next minute
  const now = new Date();
  const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
  setTimeout(() => {
    refreshCities();
    setInterval(refreshCities, 60000); // Then every minute
  }, msToNextMinute);
});
