function getNumbers(a) {
  let prev = a.split('');
  let result = [];
  for (let index = 0; index < prev.length; index++) {
    if (Number(prev[index])) {
      result.push(+prev[index]);
    }
  }
  return result;
}

function findTypes() {
  let result = {};
  for (let index = 0; index < arguments.length; index++) {
    let temp = typeof arguments[index];
    if (result.hasOwnProperty(temp)) {
      result[temp] += 1;
    } else {
      result[temp] = 1;
    }
  }
  return result;
}

function executeforEach(array, func) {
  for (let index = 0; index < array.length; index++) {
    func(array[index]);
  }
}

function mapArray(array, func) {
  let result = [];
  executeforEach(array, function (element) {
    result.push(func(element));
  });
  return result;
}

function filterArray(array, func) {
  let result = [];
  executeforEach(array, function(element) {
    if (func(element)) {
      result.push(element);
    }
  });
  return result;
}

function showFormattedDate(data) {
  let options = { month: 'short', year: 'numeric', day: 'numeric' };
  let result = data.toLocaleDateString('en-US', options).replace(',', '');
  return `Date: ${result}`;
}

function canConvertToDate(date) {
  return new Date(Date.parse(date)).toString() !== 'Invalid Date';
}

function daysBetween(firstDate, secondDate) {
  let result = Date.parse(secondDate) - Date.parse(firstDate);
  let oneDay = 86400000;
  return Math.round(result / oneDay);
}

function getAmountOfAdultPeople(data) {
  let eighteenYears = 6574;
  let adults = filterArray(data, function (el) {
    let differenceDays = daysBetween(el[' birthday '], new Date());
    return differenceDays > eighteenYears;
  });
  return adults.length;
}

function keys(obj) {
  let result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(key);
    }
  }
  return result;
}

function values(obj) {
  let result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    }
  }
  return result;
}