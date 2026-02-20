const matches = [
  "Brazil vs Argentina - 12 June",
  "Germany vs France - 14 June",
  "Spain vs England - 16 June"
];

const matchList = document.getElementById("matchList");

matches.forEach(match => {
  const li = document.createElement("li");
  li.textContent = match;
  matchList.appendChild(li);
});

document.getElementById("heroBtn").addEventListener("click", () => {
  alert("Welcome to FIFA World!");
});