// ✅ Load button click sound
const clickSound = new Audio('click.mp3');

// ✅ Play sound
function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

let historyList = [];

// ✅ Convert temperature
function convert() {
  playSound();

  let val = parseFloat(document.getElementById("value").value);
  let scale = document.getElementById("scale").value;

  if (isNaN(val)) {
    document.getElementById("output").innerText = "⚠️ Please enter a valid number";
    return;
  }

  let c, f, k;

  if (scale === "C") {
    c = val;
    f = (c * 9/5) + 32;
    k = c + 273.15;
  } else if (scale === "F") {
    f = val;
    c = (f - 32) * 5/9;
    k = c + 273.15;
  } else {
    k = val;
    c = k - 273.15;
    f = (k - 273.15) * 9/5 + 32;
  }

  let result = `🌡️ ${c.toFixed(2)} °C | ${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
  document.getElementById("output").innerText = result;

  // ✅ Save history
  historyList.unshift(result);
  if (historyList.length > 5) historyList.pop();
  displayHistory();
}

// ✅ Show last 5 conversions
function displayHistory() {
  let list = document.getElementById("history");
  list.innerHTML = "";
  historyList.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

// ✅ Reset fields
function resetFields() {
  playSound();
  document.getElementById("value").value = "";
  document.getElementById("output").innerText = "-- °C | -- °F | -- K";
  document.getElementById("history").innerHTML = "";
  historyList = [];
}

// ✅ Theme Toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Change icon
  if (document.body.classList.contains("light-mode")) {
    themeBtn.textContent = "🌞";
  } else {
    themeBtn.textContent = "🌙";
  }
});
