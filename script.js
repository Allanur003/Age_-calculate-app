const errors = document.getElementsByClassName("error");
const labels = document.querySelectorAll("label");
const btn = document.getElementById("calculateAge");
const dayVal = document.getElementById("day");
const monthVal = document.getElementById("month");
const yearVal = document.getElementById("year");

btn.addEventListener("click", function () {
  const dayVal = parseInt(day.value);
  const monthVal = parseInt(month.value);
  const yearVal = parseInt(year.value);
  const today = new Date();

  let isValid = validateInput(dayVal, monthVal, yearVal);
  if (!isValid) return;

  let ageY = today.getFullYear() - yearVal;
  let ageM = today.getMonth() + 1 - monthVal;
  let ageD = today.getDate() - dayVal;

  if (ageD < 0) {
    ageD += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    ageM--;
  }

  if (ageM < 0) {
    ageM += 12;
    ageY--;
  }

  document.getElementById("resultY").innerText = ageY;
  document.getElementById("resultM").innerText = ageM;
  document.getElementById("resultD").innerText = ageD;
});



//For errors
function validateInput(dayVal, monthVal, yearVal) {
  let valid = true;
  
  Array.from(errors).forEach((error) => (error.style.display = "none"));
  Array.from(labels).forEach((label) => (label.style.color = " "));

  if (isNaN(dayVal) || dayVal < 1 || dayVal > 31) {
    errors[0].style.display = "block"; 
      labels[0].style.color = "red"; 
    valid = false;
  }

  if (isNaN(monthVal) || monthVal < 1 || monthVal > 12) {
    errors[1].style.display = "block"; 
      labels[1].style.color = "red";
    valid = false;
  }

  const currentYear = new Date().getFullYear();
  if (isNaN(yearVal) || yearVal < 1900 || yearVal > currentYear) {
    errors[2].style.display = "block"; 
      labels[2].style.color = "red";
    valid = false;
  }

  return valid;
}
