function updateAge() {
  const birth = new Date("2007-08-05T00:00:00");
  const now = new Date();

  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();

  if (days < 0) {
    // go to previous month
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }

  if (months < 0) {
    months += 12;
    years--;
  }

  let hours = now.getHours() - birth.getHours();

  if (hours < 0) {
    hours += 24;
    days--;
    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
      if (months < 0) {
        months += 12;
        years--;
      }
    }
  }

  document.querySelector(
    ".ageText"
  ).textContent = `${years}y ${months}m ${days}d ${hours}h`;
}

updateAge();
setInterval(updateAge, 1000);
