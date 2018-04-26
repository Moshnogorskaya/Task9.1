var input = document.querySelector('.input__field');
input.oninput = function(){
    document.querySelector('.output__field').innerHtml = input.value;
};
