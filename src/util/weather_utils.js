export const toQueryString = obj => {
  const parts = [];
  for (const i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
    }
  }
  return parts.join('&');
};

export const extractData = weatherData => {
  const data = {};
  const weatherHash = weatherData.weather[0];
  weatherHash ? data.a = weatherHash.description : data.a = '';
  weatherData.main ? data.b = convertData(weatherData.main) : data.b = '';

  // sunrise and sunset
  window.weather = weatherData.sys;
  const rise = new Date(weatherData.sys.sunrise * 1000);
  const set = new Date(weatherData.sys.sunset * 1000);

  const riseHours = `${rise.getHours()}`;
  const riseMin = `${rise.getMinutes()}`;
  const setHours = `${set.getHours()}`;
  const setMin = `${set.getMinutes()}`;

  const times = {
    riseHours, riseMin, setHours, setMin
  };

  doubleDigits(times);

  data.c = amPmConverter(`${times.setHours}:${times.setMin}`);
  data.d = amPmConverter(`${times.riseHours}:${times.riseMin}`);

  return data;
};

// converts temp from Kelvin (default) to Farenheit
const convertData = dataObj => {
  let temp = ((dataObj.temp - 273.15) * 1.8 + 32).toFixed(1);
  temp += '\u00b0F';
  return temp;
};

const doubleDigits = times => {
  for (const key in times) {
    if (
      Object.prototype.hasOwnProperty.call(times, key)
      && times[key].length === 1
    ) {
      times[key] = `0${times[key]}`;
    }
  }
};

const amPmConverter = time => {
  // Checks for correct time format and splits it into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)?$/) || [time];

  if (time.length > 1) {
    time = time.slice(1);
    time[5] = +time[0] < 12 ? ' AM' : ' PM';
    time[0] = +time[0] % 12 || 12;
  }

  return time.join('');
};

export const dateConverter = date => {
  if (date === '') return { weekday: '', month: '', day: '' };

  const WEEKDAYS = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };

  const MONTHS = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
  };

  const month = MONTHS[date.getMonth()];
  const weekday = WEEKDAYS[date.getDay()];
  const day = date.getDate();

  return { weekday, month, day };
};
