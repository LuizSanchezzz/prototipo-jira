document.addEventListener('DOMContentLoaded', function () {
    
    const dropdown1 = document.querySelector('.dropdown1');
    const dropdown2 = document.querySelector('.dropdown2');
    const select1 = dropdown1.querySelector('.select1');
    const select2 = dropdown2.querySelector('.select2');
    const menu1 = dropdown1.querySelector('.menu1');
    const menu2 = dropdown2.querySelector('.menu2');
    const selected1 = dropdown1.querySelector('.selected1');
    const selected2 = dropdown2.querySelector('.selected2');
    const dropdown3 = document.querySelector('.dropdown3');
    const select3 = dropdown3.querySelector('.select3');
    const menu3 = dropdown3.querySelector('.menu3');
    const selected3 = dropdown3.querySelector('.selected3');
    
    // Exemplo de opções dinâmicas para dropdown2
    const opcoesDropdown2 = {
        software: ['Genetec'],
        hardware: ['CCTV', 'Catraca', 'Alarme','Morpho','Toniquete','Portal de Metais','Portão PNE','Video Wall','Radar','Senso']
    };
    const opcoesDropdown3 = {
        Genetec: ['Lentidão', 'Pop-up não aparece', 'Espaço insuficiente em disco','Sem fluxo ao vivo','Sem Gravação'],
        Catraca: ['Não faz leitura','Hastes quebradas'],
        Morpho: ['Inoperante','Não faz leitura'],
        CCTV: ['Off-line','Sem foco', 'Quebrada'],
        Toniquete: ['Inoperante','Não trava','Não faz leitura'],
        Alarme: ['Painel Off-line','Disparando Erroneamente','Botão de Pânico com defeito','Inoperante'],
        "Portal de Metais":['Inoperante','Com interferência'],
        "Portão PNE":['Não trava','Inoperante','Não faz leitura'],
        "Video Wall":['Inoperante'],
        Radar:['Sem detecção de movimento','Inoperante'],
        Sensor:['Inoperante'],
        
    };
    // Adiciona um ouvinte de clique para a lista de categorias
    menu1.addEventListener('click', function (e) {
        if (e.target.classList.contains('categoria')) {
            const categoriaSelecionada = e.target.dataset.value;
            selected1.innerText = e.target.innerText;
    
            // Limpa as opções existentes na dropdown2 e dropdown3
            menu2.innerHTML = '';
            menu3.innerHTML = ''; // Limpa as opções da dropdown3
    
            // Adiciona as novas opções com base na categoria selecionada
            opcoesDropdown2[categoriaSelecionada].forEach(opcao => {
                const li = document.createElement('li');
                li.textContent = opcao;
    
                li.addEventListener('click', () => {
                    selected2.innerText = opcao;
                    selected2.classList.add("text-fade-in2");
                    setTimeout(() => {
                        selected2.classList.remove("text-fade-in2");
                    }, 300);
    
                    select2.classList.remove('select2-clicked');
                    dropdown2.querySelector('.caret2').classList.remove('caret2-rotate');
                    menu2.classList.remove('menu2-open');
                });
    
                menu2.appendChild(li);
            });
    
            selected1.classList.add("text-fade-in1");
            setTimeout(() => {
                selected1.classList.remove("text-fade-in1");
            }, 300);
    
            // Limpa a terceira dropdown ao selecionar uma nova categoria
            selected3.innerText = 'Selecione uma opção';
            select3.classList.remove('select3-clicked');
            dropdown3.querySelector('.caret3').classList.remove('caret3-rotate');
            menu3.classList.remove('menu3-open');
            
            selected2.innerText = 'Selecione uma opção';
            select2.classList.remove('select2-clicked');
            dropdown2.querySelector('.caret2').classList.remove('caret2-rotate');
            menu2.classList.remove('menu2-open');
    
        }    
    });
    menu2.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            const opcaoSelecionada = e.target.textContent;
    
            // Limpa as opções existentes na dropdown3
            menu3.innerHTML = '';
    
            // Adiciona as novas opções com base na opção selecionada na dropdown2
            opcoesDropdown3[opcaoSelecionada].forEach(opcao => {
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

            selected3.innerText = 'Selecione uma opção';
            select3.classList.remove('select3-clicked');
            dropdown3.querySelector('.caret3').classList.remove('caret3-rotate');
            menu3.classList.remove('menu3-open');
            
        }
    });
    // Adiciona ouvintes de clique para abrir/fechar dropdowns
    select1.addEventListener('click', () => {
        // Verifique se a dropdown1 está aberta e feche-a
        if (select1.classList.contains('select1-clicked')) {
            select1.classList.remove('select1-clicked');
            dropdown1.querySelector('.caret1').classList.remove('caret1-rotate');
            menu1.classList.remove('menu1-open');
        } else {
            // Abra a dropdown1
            select1.classList.add('select1-clicked');
            dropdown1.querySelector('.caret1').classList.add('caret1-rotate');
            menu1.classList.add('menu1-open');
    
            // Certifique-se de que a dropdown2 e dropdown3 estão fechadas
            select2.classList.remove('select2-clicked');
            dropdown2.querySelector('.caret2').classList.remove('caret2-rotate');
            menu2.classList.remove('menu2-open');
    
            select3.classList.remove('select3-clicked');
            dropdown3.querySelector('.caret3').classList.remove('caret3-rotate');
            menu3.classList.remove('menu3-open');
        }
    });
    
    // Adiciona ouvinte de clique para abrir/fechar dropdown2
    select2.addEventListener('click', () => {
        // Verifique se a dropdown2 está aberta e feche-a
        if (select2.classList.contains('select2-clicked')) {
            select2.classList.remove('select2-clicked');
            dropdown2.querySelector('.caret2').classList.remove('caret2-rotate');
            menu2.classList.remove('menu2-open');
        } else {
            // Abra a dropdown2
            select2.classList.add('select2-clicked');
            dropdown2.querySelector('.caret2').classList.add('caret2-rotate');
            menu2.classList.add('menu2-open');
    
            // Certifique-se de que a dropdown1 e dropdown3 estão fechadas
            select1.classList.remove('select1-clicked');
            dropdown1.querySelector('.caret1').classList.remove('caret1-rotate');
            menu1.classList.remove('menu1-open');
    
            select3.classList.remove('select3-clicked');
            dropdown3.querySelector('.caret3').classList.remove('caret3-rotate');
            menu3.classList.remove('menu3-open');
        }
    });
    
    // Adiciona ouvinte de clique para abrir/fechar dropdown3
    select3.addEventListener('click', () => {
        // Verifique se a dropdown3 está aberta e feche-a
        if (select3.classList.contains('select3-clicked')) {
            select3.classList.remove('select3-clicked');
            dropdown3.querySelector('.caret3').classList.remove('caret3-rotate');
            menu3.classList.remove('menu3-open');
        } else {
            // Abra a dropdown3
            select3.classList.add('select3-clicked');
            dropdown3.querySelector('.caret3').classList.add('caret3-rotate');
            menu3.classList.add('menu3-open');
    
            // Certifique-se de que a dropdown1 e dropdown2 estão fechadas
            select1.classList.remove('select1-clicked');
            dropdown1.querySelector('.caret1').classList.remove('caret1-rotate');
            menu1.classList.remove('menu1-open');
    
            select2.classList.remove('select2-clicked');
            dropdown2.querySelector('.caret2').classList.remove('caret2-rotate');
            menu2.classList.remove('menu2-open');
        }
    });
    
    // Adiciona um ouvinte de clique global para fechar dropdowns ao clicar fora
    window.addEventListener("click", e => {
        const size1 = dropdown1.getBoundingClientRect();
        const size2 = dropdown2.getBoundingClientRect();
        
        const isClickInsideDropdown1 = isClickInsideElement(e, dropdown1);
        const isClickInsideDropdown2 = isClickInsideElement(e, dropdown2);

        const isClickInsideSelect1 = isClickInsideElement(e, select1);
        const isClickInsideSelect2 = isClickInsideElement(e, select2);

        if (!isClickInsideDropdown1 && !isClickInsideSelect1) {
            select1.classList.remove('select1-clicked');
            dropdown1.querySelector('.caret1').classList.remove('caret1-rotate');
            menu1.classList.remove('menu1-open');
        }

        if (!isClickInsideDropdown2 && !isClickInsideSelect2) {
            select2.classList.remove('select2-clicked');
            dropdown2.querySelector('.caret2').classList.remove('caret2-rotate');
            menu2.classList.remove('menu2-open');
        }
        
    });
    function isClickInsideElement(event, element) {

        const rect = element.getBoundingClientRect();
        const x = event.clientX;
        const y = event.clientY;

        return x >= rect.left && x <= rect.right &&
               y >= rect.top && y <= rect.bottom;
    }
    function ajustarAlturaLista2() {
        const menu2 = document.querySelector('.menu2');
        const opcoesDropdown2 = opcoesDropdown2[categoriaSelecionada];
    
        const alturaItem2 = 40; // Altura de cada item
        const minHeight2 = 40;   // Altura mínima desejada
        const maxHeight2 = 160;  // Altura máxima desejada
    
        const alturaCalculada2 = Math.min(opcoesDropdown2.length * alturaItem2, maxHeight2);
        menu2.style.maxHeight = `${Math.max(alturaCalculada2, minHeight2)}px`;
    }
    
    // Chame esta função sempre que a lista 2 for atualizada
    ajustarAlturaLista2();

    function ajustarAlturaLista3() {
        const menu3 = document.querySelector('.menu3');
        const opcoesDropdown3 = opcoesDropdown2[categoriaSelecionada];
    
        const alturaItem3 = 40; // Altura de cada item
        const minHeight3 = 40;   // Altura mínima desejada
        const maxHeight3 = 160;  // Altura máxima desejada
    
        const alturaCalculada3 = Math.min(opcoesDropdown3.length * alturaItem3, maxHeight3);
        menu3.style.maxHeight = `${Math.max(alturaCalculada3, minHeight3)}px`;
    }
    
    // Chame esta função sempre que a lista 2 for atualizada
    ajustarAlturaLista3();
});
