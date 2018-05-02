const input = document.querySelector(".input__field");
const output = document.querySelector(".output__field");
const tag = /</g;
const starred = /\*(.+?)\*/gi;
const sharped = /#(.+?)\n/gi;
input.oninput = () => {
  output.innerHTML = input.value.replace(tag, "&lt;");
  output.innerHTML = output.innerHTML.replace(starred, "<b>$1</b>");
  output.innerHTML = output.innerHTML.replace(sharped, "<h1>$1</h1>");
};
