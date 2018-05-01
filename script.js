const wrap = document.getElementById("wrap");

document.getElementById("findButton").onclick = function() {
  while (wrap.firstChild) {
    wrap.removeChild(wrap.firstChild);
  }

  var typedText = document.getElementById("input").value;
  findAnagrams(typedText);
};

function findAnagrams(a) {
  let arr = [];
  for (i = 0; i < words.length; i++) {
    if (alphabetize(words[i]) === alphabetize(a) && words[i] !== a) {
      arr.push(words[i]);
    }
  }
  for (i = 0; i < arr.length; i++) {
    const div = document.createElement("div");
    div.textContent = `${i + 1}: ${arr[i]}`;
    wrap.appendChild(div);
  }
}

function alphabetize(a) {
  return a
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .trim();
}
