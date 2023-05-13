function updateTime() {
  let albuquerqueElement = document.querySelector("#albuquerque");
  let albuquerqueDateElem = albuquerqueElement.querySelector(".date");
  let albuquerqueTimeElem = albuquerqueElement.querySelector(".time");
  let albuquerqueTime = moment().tz("US/Mountain");

  albuquerqueDateElem.innerHTML = moment().format("MMMM Do YYYY");
  albuquerqueTimeElem.innerHTML = `${albuquerqueTime.format("h:mm:ss [<small>]A[</small>]")} `;
}

updateTime();
setInterval(updateTime, 1000);
