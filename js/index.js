// doing by fetch method

const singOut = document.getElementById('out')
singOut.addEventListener('click', (event) => {
window.StorageService.clear() 
// this is for singOut
})
const countriesName = document.getElementById("countries");
countriesName.addEventListener("change",newCountrySelection);
function newCountrySelection(event) {
    displayCountryInfo(event.target.value);
  }
  fetch("https://restcountries.eu/rest/v2/all")
  .then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function initialize(countriesData) {
  countries = countriesData;
  let options = "";
  countries.forEach(country => options+=`<option value="${country.alpha3Code}">${country.name}</option>`);

  countriesName.innerHTML = options;
  displayCountryInfo(countriesName[countriesName.selectedIndex].value);
}
function displayCountryInfo(countryByAlpha3Code) {
  const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
  document.querySelector("#flag-container img").src = countryData.flag;
  document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;  
  document.getElementById("capital").innerHTML = countryData.capital;
  document.getElementById("area").innerHTML = countryData.area;
  document.getElementById("calling-code").innerHTML = `+${countryData.callingCodes[0]}`;
  document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
  document.getElementById("currencies").innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");
  document.getElementById("region").innerHTML = countryData.region;
  document.getElementById("cioc").innerHTML = countryData.cioc;
  document.getElementById("demonym").innerHTML = countryData.demonym;
  document.getElementById("subregion").innerHTML = countryData.subregion;
  document.getElementById("timezones").innerHTML = countryData.timezones;
  document.getElementById("nativeName").innerHTML = countryData.nativeName;
  document.getElementById("altSpellings").innerHTML = countryData.altSpellings;
  document.getElementById("borders").innerHTML = countryData.borders;
  document.getElementById("gini").innerHTML = countryData.gini;
  document.getElementById("numericCode").innerHTML = countryData.numericCode;
  document.getElementById("latlng").innerHTML = countryData.latlng;
  document.getElementById("name").innerHTML = countryData.name;
  document.getElementById("topLevelDomain").innerHTML = countryData.topLevelDomain;
  document.getElementById("languages").innerHTML = countryData.languages.map((language)=>{
    return language.name+" ";
  })



}

