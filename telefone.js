// formataTelefone.js
document.addEventListener('DOMContentLoaded', function () {
    var telefoneInput = document.getElementById('telefone');

    telefoneInput.addEventListener('input', function () {
        var inputValue = this.value;
        inputValue = inputValue.replace(/\D/g, '');

        if (inputValue.length > 2) {
            inputValue = '+' + inputValue.substring(0, 2) + '(' + inputValue.substring(2);
        }

        if (inputValue.length > 6) {
            inputValue = inputValue.substring(0, 6) + ')' + inputValue.substring(6);
        }

        if (inputValue.length > 12) {
            inputValue = inputValue.substring(0, 12) + '-' + inputValue.substring(12);
        }
        inputValue = inputValue.substring(0, 17);
        this.value = inputValue;
    });
});
