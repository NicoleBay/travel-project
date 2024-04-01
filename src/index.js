function displayResponse(response) {
  let responseElement = document.querySelector("#generated-response");
  responseElement.innerHTML = response.data.answer;

  new Typewriter("#generated-response", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateForm(event) {
  event.preventDefault();

  let fieldInput = document.querySelector("#search-field");
  let apiKey = "b13b374bef64oac0e068e7t94aa7beef";
  let context =
    "You are a clever poetry expert who loves to write creative Haikus. Your mission is to generate a Haiku poem and separate each line with a <br />.";
  let prompt = `User instructions: Generate a Haiku about ${fieldInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let responseElement = document.querySelector("#generated-response");
  responseElement.classList.remove("hidden");
  responseElement.innerHTML = `<div class="generating">⏳ Generating a Haiku about ${fieldInput.value}, please wait...</div>`;

  axios.get(apiUrl).then(displayResponse);
}

let formElement = document.querySelector("#generate-form");
formElement.addEventListener("submit", generateForm);
