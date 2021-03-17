let estadosBrasil = {
    '': 'Selecione seu estado',
    'AC': 'Acre',
    'AL': 'Alagoas',
    'AP': 'Amapá',
    'AM': 'Amazonas',
    'BA': 'Bahia',
    'CE': 'Ceará',
    'DF': 'Distrito Federal',
    'ES': 'Espírito Santo',
    'GO': 'Goiás',
    'MA': 'Maranhão',
    'MT': 'Mato Grosso',
    'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais',
    'PA': 'Pará',
    'PB': 'Paraíba',
    'PR': 'Paraná',
    'PE': 'Pernambuco',
    'PI': 'Piauí',
    'RJ': 'Rio de Janeiro',
    'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul',
    'RO': 'Rondônia',
    'RR': 'Roraima',
    'SC': 'Santa Catarina',
    'SP': 'São Paulo',
    'SE': 'Sergipe',
    'TO': 'Tocantins'
};
let estadosBr = document.getElementById('estadosbr');

for (let key in estadosBrasil) {
    let createOption = document.createElement('option');
    createOption.innerText = estadosBrasil[key];
    createOption.value = [key];
    estadosBr.appendChild(createOption);
};

let clear = document.querySelector('.button-clear');
    clear.addEventListener('click', () => {
    let inputs = document.querySelectorAll('input');
    let textArea = document.querySelector('textarea');
    for (let i = 0; i < inputs.length; i += 1) {
        inputs[i].value = ''
        textArea.value = ''
    }
    });

    document.getElementById('ini-data').DatePickerX.init();

    
    