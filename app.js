const weight = document.querySelector("#weight");
const reps = document.querySelector("#reps");
const loading = document.querySelector("#loading");
const resultDisplay = document.querySelector("#results");
const form = document.querySelector("#user-input");
const submitBtn = document.querySelector("#submit-btn");

form.addEventListener("submit", function(e) {
  resultDisplay.style.display = "none";
  resultDisplay.innerHTML = "";
  loading.style.display = "block";
  submitBtn.style.display = "none";

  setTimeout(calculateResults, 1500);

  e.preventDefault();
});

function calculateResults() {
  if (!errorCheck()) {
    clearError();
  }

  if (reps.value < 1 || reps.value > 12) {
    showError(
      "Reps must be between 1 and 12. Numbers outside of this range will yield inaccurate results."
    );
  } else {
    const estimatedMax = Math.floor(
      parseInt(weight.value) * 0.033 * parseInt(reps.value) +
        parseInt(weight.value)
    );
    const maxResult = document.createElement("h4");
    maxResult.appendChild(
      document.createTextNode(`Your Estimated Max is ${estimatedMax}`)
    );
    resultDisplay.appendChild(maxResult);
    resultDisplay.style.display = "block";
    loading.style.display = "none";
    submitBtn.style.display = "block";
  }
}

function showError(error) {
  const errorDiv = document.createElement("div");
  submitBtn.style.display = "block";
  loading.style.display = "none";
  resultDisplay.style.display = "none";
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  errorDiv.className = "alert alert-danger";

  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);
}

function clearError() {
  document.querySelector(".alert").remove();
}

function errorCheck() {
  var check = document.querySelector(".alert");
  return check === null;
}
