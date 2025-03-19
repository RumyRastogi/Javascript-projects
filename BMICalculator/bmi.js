const calculate = document.querySelector("#btnCalculate");

calculate.addEventListener("click", function (event) {
  const height = parseInt(document.querySelector("#height").value);

  const weight = parseInt(document.querySelector("#weight").value);

  const result = document.querySelector("#results");

  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = "Provide a valid height";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "Provide a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
      result.innerHTML=`Under Weight : <span>${bmi}</span>`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.innerHTML=`You are healthy : <span>${bmi}</span>`;
    } else bmi >= 25 && bmi <= 29.9;
    {
      result.innerHTML=`Overweight : <span>${bmi}</span>`;
    }
  }
});
