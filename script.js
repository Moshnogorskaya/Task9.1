let input = document.querySelector(".input__field");
let output = document.querySelector(".output__field");
let tag = /</g;
let starred = /\*(.+?)\*/gi;
let sharped = /#(.+?)\n/gi;
input.oninput = () => {
  output.innerHTML = input.value.replace(tag, "&lt;");
  output.innerHTML = output.innerHTML.replace(starred, "<b>$1</b>");
  output.innerHTML = output.innerHTML.replace(sharped, "<h1>$1</h1>");
};
