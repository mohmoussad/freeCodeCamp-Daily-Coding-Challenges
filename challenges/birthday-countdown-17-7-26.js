/*
Given today's date and a birthday, return the number of days until the person's next birthday.

- Today's date is given as a string in "YYYY-MM-DD" format, with leading zeros, for example: "2026-07-16".
- The birthday is given as a string in "M/D" format, without leading zeros, for example: "9/7".
- If today is their birthday, return the number of days until their next birthday (not 0).
- Leap years should be accounted for.
*/

function daysUntilBirthday(today, birthday) {
  const parsedToday = new Date(today);
  const todayDay = parsedToday.getDate();
  const todayMonth = parsedToday.getMonth() + 1;
  const todayYear = parsedToday.getFullYear();
  const birthdayDay = +birthday.split("/")[1];
  const birthdayMonth = +birthday.split("/")[0];
  function nextLeapYear(fromYear) {
    let year = fromYear;

    while (true) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return year;
      }

      year++;
    }
  }

  if (todayMonth == birthdayMonth && todayDay == birthdayDay) return 365;

  if (todayMonth < birthdayMonth || (todayMonth == birthdayMonth && todayDay < birthdayDay)) {
    const assumedBirthDay = new Date(
      `${todayYear}-${String(birthdayMonth).padStart(2, "0")}-${String(birthdayDay).padStart(2, "0")}`,
    );
    return (assumedBirthDay.getTime() - parsedToday.getTime()) / 86400000;
  } else {
    let assumedBirthDay;
    if (birthday == "2/29") {
      assumedBirthDay = new Date(
        `${nextLeapYear(todayYear + 1)}-${String(birthdayMonth).padStart(2, "0")}-${String(birthdayDay).padStart(2, "0")}`,
      );
    } else {
      assumedBirthDay = new Date(
        `${todayYear + 1}-${String(birthdayMonth).padStart(2, "0")}-${String(birthdayDay).padStart(2, "0")}`,
      );
    }

    return (assumedBirthDay.getTime() - parsedToday.getTime()) / 86400000;
  }
}

console.log(daysUntilBirthday("2026-07-16", "9/7")); // 53
console.log(daysUntilBirthday("2026-07-16", "3/22")); // 249
console.log(daysUntilBirthday("2026-07-16", "7/16")); // 365
console.log(daysUntilBirthday("2024-02-28", "3/1")); // 2
console.log(daysUntilBirthday("2023-04-24", "12/30")); // 250
console.log(daysUntilBirthday("2024-03-01", "2/29")); // 1460
console.log(daysUntilBirthday("2096-03-01", "2/29")); // 2920
