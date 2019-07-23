export const toQueryString = (obj) => {
  const parts = [];
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`); 
    }                                                                       
  }                                                                       
  return parts.join('&');                                                 
};

export const extractData = (weatherData) => {
  let data = {};
  let weatherHash = weatherData.weather[0];
  weatherHash ? data.a = weatherHash.description : data.a = '';
  weatherData.main ? data.b = convertData(weatherData.main) : data.b = '';

  //sunrise and sunset
  window.weather = weatherData.sys;
  let rise = new Date(weatherData.sys.sunrise * 1000);
  let set = new Date(weatherData.sys.sunset * 1000);

  let riseHours = `${rise.getHours()}`;
  let riseMin = `${rise.getMinutes()}`;
  let setHours = `${set.getHours()}`;
  let setMin = `${set.getMinutes()}`;

  let times = { riseHours, riseMin, setHours, setMin };

  doubleDigits(times);

  data.c = amPmConverter(`${times.setHours}:${times.setMin}`);
  data.d = amPmConverter(`${times.riseHours}:${times.riseMin}`);

  return data;
}

// converts temp from Kelvin (default) to Farenheit
const convertData = (dataObj) => {
  let temp = ((dataObj.temp - 273.15) * 1.8 + 32).toFixed(1);
  temp += "\u00b0" + "F";
  return temp;
}

const doubleDigits = (times) => {
  for (let key in times) {
    if (times.hasOwnProperty(key) && times[key].length === 1) {
      times[key] = '0' + times[key];
    }
  }
}

const amPmConverter = (time) => {
  // Checks for correct time format and splits it into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)?$/) || [time];

  if (time.length > 1) {
    time = time.slice(1);
    time[5] = +time[0] < 12 ? ' AM' : ' PM';
    time[0] = +time[0] % 12 || 12;
  }
  
  return time.join('');
}

export const dateConverter = (date) => {

  if (date === '') return { weekday: '', month: '', day: '' }
  
  const WEEKDAYS = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuseday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };

  const MONTHS = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'April',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
  };

  let month = MONTHS[date.getMonth()];
  let weekday = WEEKDAYS[date.getDay()];
  let day = date.getDate();

  return { weekday, month, day };
}