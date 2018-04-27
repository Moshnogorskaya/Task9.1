let input = document.querySelector('.input__field');

input.oninput = function(){
let output=document.querySelector('.output__field');
let starred=/\*([a-z]+)\*/ig;
let sharped=/#([a-z]+)/ig;
    output.innerHTML=input.value.replace(starred, '<b>$1</b>');
    output.innerHTML=output.innerHTML.replace(sharped, '<h1>$1</h1>');
};
