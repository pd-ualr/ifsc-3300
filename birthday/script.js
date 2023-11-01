"use strict";
function dateCalculator() {
  const gatherCalendar = document.getElementById("calendar");
  const seconds = 1000;
  const minute = seconds * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  if (!gatherCalendar.value) {
    alert("Enter a valid date");
    return;
  }

  const calendar = new Date(gatherCalendar.value);
  const now = new Date();

  const timeMs = now.getTime() - calendar.getTime();
  const timeSec = Math.round(timeMs / seconds);
  const timeHrs = Math.round(timeMs / hour);
  const timeYrs = Math.round(timeMs / year);
  const timeDys = Math.round(timeYrs * 365);
  const timeMths = Math.round(timeYrs * 12);

  alert("Years = " + timeYrs);
  alert("Months = " + timeMths);
  alert("Days = " + timeDys);
  alert("Seconds = " + timeSec);
  alert("Milliseconds = " + timeMs);
}
const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", dateCalculator);
