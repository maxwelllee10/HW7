// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];
const countryInput = document.getElementById("country");
const suggestionsList = document.getElementById("suggestions");

// Update the suggestions list with matching countries
const updateSuggestions = () => {
  const input = countryInput.value.toLowerCase();
  const matchingCountries = countryList.filter(country => country.toLowerCase().startsWith(input));

  suggestionsList.innerHTML = "";

  matchingCountries.forEach(country => {
    const suggestion = document.createElement("div");
    suggestion.className = "suggestion";
    suggestion.textContent = country;
    suggestion.addEventListener("click", () => {
      countryInput.value = country;
      suggestionsList.innerHTML = "";
    });
    suggestionsList.appendChild(suggestion);
  });
};

countryInput.addEventListener("input", updateSuggestions);