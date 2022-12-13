const result = document.getElementById("result");
const submit = document.getElementById("submit");
const text = document.getElementById("text");

submit.addEventListener("click", () => {
  result.innerText = text.value;
});
