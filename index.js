let interv = setInterval(() => {
  let lastDate = new Date("2023-12-27");
  let currentDate = new Date();
  let differenceMs = lastDate - currentDate;

  console.log(lastDate, currentDate, differenceMs);
  let differenceSeconds = Math.floor(differenceMs / 1000);
  let differenceMinutes = Math.floor(differenceSeconds / 60);
  let differenceHours = Math.floor(differenceMinutes / 60);

  differenceSeconds %= 60;
  differenceMinutes %= 60;

  let hours = document.querySelector(".hours");
  console.log(hours, "hours");
  let mins = document.querySelector(".mins");
  let secs = document.querySelector(".secs");
  if (
    differenceHours == 0 &&
    differenceMinutes == 0 &&
    differenceSeconds == 0
  ) {
    document.querySelector(".count-down").innerHTML = "<strong>BDAY TIME :))";
    clearInterval(interv);
  }
  if (differenceHours < 10) differenceHours = "0" + differenceHours;
  if (differenceMinutes < 10) differenceMinutes = "0" + differenceMinutes;
  if (differenceSeconds < 10) differenceSeconds = "0" + differenceSeconds;
  hours.textContent = differenceHours + ":";
  mins.textContent = differenceMinutes + ":";
  secs.textContent = differenceSeconds;
}, 1000);
// console.log(
//   "Difference: ",
//   differenceHours +
//     " hours, " +
//     differenceMinutes +
//     " minutes, " +
//     differenceSeconds +
//     " seconds"
// );
