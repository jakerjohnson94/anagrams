let arr = [];


document.getElementById("findButton").onclick = function() {
    const wrap = document.getElementById("wrap");
    if (wrap.hasChildNodes()) {
        while (wrap.hasChildNodes()) {
          wrap.removeChild(wrap.firstChild);
        }
      }
      wrap.innerText = '';
  var typedText = document.getElementById("input").value;
  console.log(typedText);
  findAnagrams(typedText);
};

function findAnagrams(a) {
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
