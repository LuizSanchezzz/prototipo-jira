document.addEventListener('DOMContentLoaded', function () {
    const dropdown1 = document.querySelector('.dropdown1');
    const select1 = dropdown1.querySelector('.select1');
    const caret1 = dropdown1.querySelector('.caret1');
    const menu1 = dropdown1.querySelector('.menu1');
    const options1 = dropdown1.querySelectorAll('.menu1 li');
    const selected1 = dropdown1.querySelector('.selected1');

    select1.addEventListener('click', () => {
        select1.classList.toggle('select1-clicked');
        caret1.classList.toggle('caret1-rotate');
        menu1.classList.toggle('menu1-open');
    });

    options1.forEach(option => {
        option.addEventListener('click', () => {
            selected1.innerText = option.innerText;
            selected1.classList.add("text-fade-in1");
            setTimeout(() => {
                selected1.classList.remove("text-fade-in1");
            }, 300);

            select1.classList.remove('select1-clicked');
            caret1.classList.remove('caret1-rotate');
            menu1.classList.remove('menu1-open');

            options1.forEach(opt => {
                opt.classList.remove('active1');
            });

            option.classList.add('active1');
        });
    });

    window.addEventListener("click", e => {
        const size = dropdown1.getBoundingClientRect();
        if (
            e.clientX < size.left ||
            e.clientX > size.right ||
            e.clientY < size.top ||
            e.clientY > size.bottom
        ) {
            select1.classList.remove('select1-clicked');
            caret1.classList.remove('caret1-rotate');
            menu1.classList.remove('menu1-open');
        }
    });
});
