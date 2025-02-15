let submit = document.getElementById("submit");
let output = document.getElementById("output");

submit.addEventListener("click", () => {
  // Collect input values
  let date1 = new Date(document.getElementById("date-1").value);
  let date2 = new Date(document.getElementById("date-2").value);

  // Check if both dates are valid
  if (!isNaN(date1.getTime()) && !isNaN(date2.getTime())) {
    // Calculate time difference in milliseconds
    let timeDifference = date2.getTime() - date1.getTime();

    // Convert milliseconds to days (1 day = 1000ms * 60s * 60m * 24h)
    let dayDifference = Math.abs(timeDifference / (1000 * 3600 * 24));

    output.innerHTML = `Difference between the two dates is <span>${dayDifference}</span> days`;
  } else {
    output.innerHTML = "Please select a valid date";
  }
});
