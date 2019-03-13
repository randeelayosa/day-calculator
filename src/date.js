export function calcDay(date) {
  const week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  const weekDay = week[date.getDay()];
  return weekDay;
}

export function letRun(year, month, day) {
  let validYear = /[0-9]+/g;
  let validMonth = /[0-1][0-9]/g;
  let validDay = /[0-3][0-9]/g;
  if (year.match(validYear) && month.match(validMonth) && day.match(validDay)) {
    return true;
  } else {
    return false;
  }
}
