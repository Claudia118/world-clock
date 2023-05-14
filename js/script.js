function updateTime() {
  let cityElement = document.querySelector("#cities-info");
  let cityDateElem = cityElement.querySelector(".date");
  let cityTimeElem = cityElement.querySelector(".time");
  let cityTime = moment().tz("US/Mountain");

  cityDateElem.innerHTML = cityTime.format("MMMM Do YYYY");
  cityTimeElem.innerHTML = cityTime.format("h:mm:ss[<small>]A[</small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
  </div>
  <a href="/">All cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesMenuElement = document.querySelector("#city");
citiesMenuElement.addEventListener("change", updateCity);
