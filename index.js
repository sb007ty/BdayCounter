function convertToIST(date) {
  const ISTOffset = 330; // IST offset in minutes (India is UTC+5:30)
  const ISTTime = new Date(date.getTime() + ISTOffset * 60000);
  return ISTTime;
}

let interv = setInterval(() => {
  let currentDate = new Date();

  // Define the target date (27th December at 12:00 AM IST)
  const targetDate = new Date("2023-12-27T00:00:00+05:30");

  let lastDate = convertToIST(targetDate);
  currentDate = convertToIST(currentDate);

  //   console.log(lastDate, currentDate);
  let differenceMs = lastDate - currentDate;

  //   console.log(lastDate, currentDate, differenceMs);
  let differenceSeconds = Math.floor(differenceMs / 1000);
  let differenceMinutes = Math.floor(differenceSeconds / 60);
  let differenceHours = Math.floor(differenceMinutes / 60);

  differenceSeconds %= 60;
  differenceMinutes %= 60;

  let hours = document.querySelector(".hours");
  //   console.log(hours, "hours");
  let mins = document.querySelector(".mins");
  let secs = document.querySelector(".secs");
  if (
    differenceHours <= 0 &&
    differenceMinutes <= 0 &&
    differenceSeconds <= 0
  ) {
    document.querySelector(".count-down").innerHTML =
      "<strong>BDAY TIME :))</strong>";
    clearInterval(interv);
  }
  if (differenceHours < 10) differenceHours = "0" + differenceHours;
  if (differenceMinutes < 10) differenceMinutes = "0" + differenceMinutes;
  if (differenceSeconds < 10) differenceSeconds = "0" + differenceSeconds;
  hours.textContent = differenceHours + ":";
  mins.textContent = differenceMinutes + ":";
  secs.textContent = differenceSeconds;
}, 1000);

let pwd = document.querySelector(".pwd");
let submitBtn = document.querySelector(".submit");
console.log(submitBtn);

submitBtn.addEventListener("click", (e) => {
  console.log(pwd);
  if (pwd.value == "queen") {
    clearInterval(interv);
    submitBtn.value = "Done";
    document.querySelector(".media").classList.remove("hidden");
    document.querySelector(".count-down-head").innerHTML =
      "<h2>I LOVEEE YOUUUU </h2>";
    document.querySelector(".count-down").innerHTML = "<h2>CUUTUUUU</h2>";

    var source = "audio/song1.mp3";
    var audio = document.createElement("audio");

    //
    audio.autoplay = true;
    //
    audio.load();
    audio.addEventListener(
      "load",
      function () {
        audio.play();
      },
      true
    );
    audio.src = source;

    document.querySelector(".media").append(audio);

    document.querySelector(".password").classList.add("hidden");
  } else {
    submitBtn.value = "Try Again";
  }
});
