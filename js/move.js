document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.username input');
    inputs.forEach(input => {
        input.addEventListener('input', function () {
            const label = this.nextElementSibling;
            if (this.value !== '') {
                label.style.top = '-5px';
                label.style.color = '#6C3483';
            } else {
                label.style.top = '50%';
                label.style.color = '#adadad';
            }
        });
    });
});