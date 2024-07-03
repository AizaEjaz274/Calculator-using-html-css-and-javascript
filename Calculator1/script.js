
document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('.input');
    const buttons = document.querySelectorAll('.button');
    let memory = 0; // Memory storage

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            switch (value) {
                case '=':
                    try {
                        inputField.value = eval(inputField.value);
                    } catch (error) {
                        inputField.value = 'Error';
                    }
                    break;
                case 'C':
                    inputField.value = '';
                    break;
                case 'M+':
                    memory += parseFloat(inputField.value) || 0;
                    inputField.value = '';
                    break;
                case 'M-':
                    memory -= parseFloat(inputField.value) || 0;
                    inputField.value = '';
                    break;
                case '%':
                    inputField.value = (parseFloat(inputField.value) / 100).toString();
                    break;
                default:
                    inputField.value += value;
                    break;
            }
        });
    });
});

