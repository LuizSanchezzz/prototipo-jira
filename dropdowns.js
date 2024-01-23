document.addEventListener('DOMContentLoaded', function () {
    function handleDropdown(dropdown, selectClass, caretClass, menuClass, selectedClass, activeClass) {
        const select = dropdown.querySelector(selectClass);
        const caret = dropdown.querySelector(caretClass);
        const menu = dropdown.querySelector(menuClass);
        const options = menu.querySelectorAll('li');
        const selected = dropdown.querySelector(selectedClass);

        select.addEventListener('click', () => {
            select.classList.toggle(selectClass + '-clicked');
            caret.classList.toggle(caretClass + '-rotate');
            menu.classList.toggle(menuClass + '-open');
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerText = option.innerText;
                selected.classList.add("text-fade-in");
                setTimeout(() => {
                    selected.classList.remove("text-fade-in");
                }, 300);

                select.classList.remove(selectClass + '-clicked');
                caret.classList.remove(caretClass + '-rotate');
                menu.classList.remove(menuClass + '-open');

                options.forEach(opt => {
                    opt.classList.remove(activeClass);
                });

                option.classList.add(activeClass);
            });
        });

        window.addEventListener("click", e => {
            const size = dropdown.getBoundingClientRect();
            if (
                e.clientX < size.left ||
                e.clientX > size.right ||
                e.clientY < size.top ||
                e.clientY > size.bottom
            ) {
                select.classList.remove(selectClass + '-clicked');
                caret.classList.remove(caretClass + '-rotate');
                menu.classList.remove(menuClass + '-open');
            }
        });
    }

    handleDropdown(document.querySelector('.dropdown'), '.select', '.caret', '.menu', '.selected', 'active');
    handleDropdown(document.querySelector('.dropdown1'), '.select1', '.caret1', '.menu1', '.selected1', 'active1');
    handleDropdown(document.querySelector('.dropdown2'), '.select2', '.caret2', '.menu2', '.selected2', 'active2');
});
