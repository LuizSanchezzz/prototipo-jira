document.addEventListener('DOMContentLoaded', function (){
    const dropdown1 = document.querySelector('.dropdown1');
    const dropdown2 = document.querySelector('.dropdown2');
    const dropdown3 = document.querySelector('.dropdown3');
    const select1 = dropdown1.querySelector('.select1');
    const select2 = dropdown2.querySelector('.select2');
    const select3 = dropdown3.querySelector('.select3');
    const menu1 = dropdown1.querySelector('.menu1');
    const menu2 = dropdown2.querySelector('.menu2');
    const menu3 = dropdown3.querySelector('.menu3');
    const selected1 = dropdown1.querySelector('.selected1');
    const selected2 = dropdown2.querySelector('.selected2');
    const selected3 = dropdown3.querySelector('.selected3');

    const opcoesDropdown2 = {
        software: ['Genetec', 'Morpho Mangement', 'Lenel'],
        hardware: ['CCTV', 'Controle de Acesso', 'Alarme']
    };

    const opcoesDropdown3 = {
        Genetec: ['Deletar Usuário', 'Comissionamento', 'Instalação', 'Instalação', 'Acesso FaaS'],
        "Morpho Mangement": ['Instalação'],
        Lenel: ['Acesso', 'Deletar Usuário', 'Altera Permissões'],
        CCTV: ['Instalação', 'Reposicionamento', 'Ajuste'],
        "Controle de Acesso": ['Calibração de Portais', 'Intertravamento'],
        Alarme: ['não sei']
    };

    function toggleDropdown(select, dropdown, menu, targetSelect) {
        select.addEventListener('click', () => {
            select.classList.toggle(`select${targetSelect}-clicked`);
            dropdown.querySelector(`.caret${targetSelect}`).classList.toggle(`caret${targetSelect}-rotate`);
            menu.classList.toggle(`menu${targetSelect}-open`);
    
            // Fecha outros dropdowns se estiverem abertos
            [select1, select2, select3].filter(otherSelect => otherSelect !== select).forEach(otherSelect => {
                otherSelect.classList.remove(`${otherSelect.classList[0]}-clicked`);
                dropdown.querySelector(`.caret${otherSelect.classList[0].slice(-1)}`).classList.remove(`caret${otherSelect.classList[0].slice(-1)}-rotate`);
                dropdown.querySelector(`.menu${otherSelect.classList[0].slice(-1)}`).classList.remove(`menu${otherSelect.classList[0].slice(-1)}-open`);
            });
        });
    }
    
    toggleDropdown(select1, dropdown1, menu1, 1);
    toggleDropdown(select2, dropdown2, menu2, 2);
    toggleDropdown(select3, dropdown3, menu3, 3);
    
    menu1.addEventListener('click', function (e) {
        if (e.target.classList.contains('categoria')) {
            const categoriaSelecionada = e.target.dataset.value;
            selected1.innerText = e.target.innerText;
            updateDropdown(menu2, selected2, opcoesDropdown2[categoriaSelecionada], select2);
    
            selected1.classList.add("text-fade-in1");
            setTimeout(() => {
                selected1.classList.remove("text-fade-in1");
            }, 300);
        }
    });
    
    menu2.addEventListener('click', function (e) {
        if (e.target.classList.contains('categoria')) {
            const categoriaSelecionada = e.target.dataset.value;
            selected2.innerText = e.target.innerText;
    
            // Limpa as opções existentes na dropdown3
            menu3.innerHTML = '';
    
            // Adiciona as novas opções com base na categoria selecionada
            opcoesDropdown3[categoriaSelecionada].forEach(opcao => {
                const li = document.createElement('li');
                li.textContent = opcao;
    
                li.addEventListener('click', () => {
                    selected3.innerText = opcao;
                    selected3.classList.add("text-fade-in3");
                    setTimeout(() => {
                        selected3.classList.remove("text-fade-in3");
                    }, 300);
    
                    select3.classList.remove('select3-clicked');
                    dropdown3.querySelector('.caret3').classList.remove('caret3-rotate');
                    menu3.classList.remove('menu3-open');
                });
    
                menu3.appendChild(li);
            });
            selected2.classList.add("text-fade-in2");
            setTimeout(() => {
                selected2.classList.remove("text-fade-in2");
            }, 300);
        }
    });
    
    // Adicione um ouvinte de clique global para fechar dropdowns ao clicar fora
    window.addEventListener("click", e => {
        [dropdown1, dropdown2, dropdown3].forEach((dropdown, index) => {
            const size = dropdown.getBoundingClientRect();
            const isClickInsideDropdown = isClickInsideElement(e, [dropdown]);
            const isClickInsideSelect = isClickInsideElement(e, [select1, select2, select3]);
    
            if (!isClickInsideDropdown && !isClickInsideSelect) {
                [select1, select2, select3][index].classList.remove(`select${index + 1}-clicked`);
                dropdown.querySelector(`.caret${index + 1}`).classList.remove(`caret${index + 1}-rotate`);
                dropdown.querySelector(`.menu${index + 1}`).classList.remove(`menu${index + 1}-open`);
            }
        });
    });
    function isClickInsideElement(event, elements) {
        const x = event.clientX;
        const y = event.clientY;
    
        return elements.some(element => {
            const rect = element.getBoundingClientRect();
            return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
        });
    }