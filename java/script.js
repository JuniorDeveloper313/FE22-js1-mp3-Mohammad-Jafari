const btn = document.querySelector("#btn-input");
btn.addEventListener("click", getCountries);
function getCountries(event) {
  event.preventDefault();
  const input = document.querySelector("#text-input");
  const breed = input.value.toLowerCase();
  input.value = "";
  fetchCountries(breed);
}
function fetchCountries(breedPar) {
  const url = `https://restcountries.com/v3.1/lang/${breedPar}`;
  // console.log(url);
  fetch(url)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        // console.log(response)
        return response.json();
      } else {
        throw " Datan gick inte att hämta länder";
      }
    })
    .then(showthecountry)
    .catch(showError);
}

function showthecountry(CountryData) {
  // console.log(CountryData);
  const officialName = CountryData;
  document.querySelector("#container2").innerHTML = "";


  highestpopulation = [];
  officialName.forEach(
    function (element) {

      const h1 = document.createElement("h1");
      document.querySelector("#container2").appendChild(h1);
      h1.innerText = " Official Name: " + element.name.official;

      const h2 = document.createElement("h2");
      document.querySelector("#container2").appendChild(h2);
      h2.innerText = " Subregion: " + element.subregion;

      const h3 = document.createElement("h3");
      document.querySelector("#container2").appendChild(h3);
      h3.innerText = " Capital: " + element.capital;

      const h4 = document.createElement("h4");
      document.querySelector("#container2").appendChild(h4);
      h4.innerText = " Population: " + element.population;
      highestpopulation.push(element.population);
      // console.log(highestpopulation);
      const img = document.createElement("img");
      document.querySelector("#container2").appendChild(img);
      img.src = element.flags.png;
    });

  const max = Math.max(...highestpopulation);
  y = highestpopulation.indexOf(max);
  // console.log(y);
  const x = document.querySelectorAll("h4");
  x[y].style.color = 'red'
  x[y].style.fontSize = '35px'
  x[y].style.backgroundColor = 'black'

}

function showError(error) {
  console.log(error);
  document.querySelector("#container2").innerHTML = "";
  const meddelande = document.createElement("h1");
  document.querySelector("#container2").appendChild(meddelande);
  meddelande.innerText =
    "Something went wrong!!!" +
    "\n" +
    " Pls write the name of the language correctly!!!";
}
