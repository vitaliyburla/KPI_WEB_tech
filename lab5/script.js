const formData = [
    {
        id: 'name',
        label: 'ПІБ:',
        pattern: /^[A-ZА-ЯЄ-Ї][a-zа-яє-ї]*\s[A-ZА-ЯЄ-Ї]\.[A-ZА-ЯЄ-Ї]\.$/,
        type: 'text',
    },
    {
        id: 'variant',
        label: 'Варіант:',
        pattern: /^\d{1,2}$/,
        type: 'text',
    },
    {
        id: 'phone',
        label: 'Телефон:',
        pattern: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
        type: 'text',
    },
    {
        id: 'faculty',
        label: 'Факультет:',
        pattern: /^[A-ZА-ЯЄ-Ї]{4}$/,
        type: 'text',
    },
    {
        id: 'address',
        label: 'Адреса:',
        pattern: /^м\.\s[А-ЯЄ-Ї][а-яє-ї]+$/,
        type: 'text',
    },
];

function initForm() {
    const task1 = document.getElementById('task1');
    const form = document.createElement('form');
    form.id = 'form';

    formData.forEach((d) => {
        const container = document.createElement('div');
        container.className = 'form-field';
        const label = document.createElement('label');
        label.setAttribute('for', d.id);
        label.textContent = d.label;
        const input = document.createElement('input');
        input.type = d.type;
        input.name = d.id;
        input.id = d.id;
        input.className = 'form-input';
        input.pattern = d.pattern.toString().replaceAll('/', '');

        container.append(label, input);
        form.appendChild(container);
    });

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Check';
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        const existingResults = document.getElementById('form-results');
        if (existingResults)
            existingResults.parentNode.removeChild(existingResults);

        const errors = [];
        const inputs = Array.from(
            document.getElementsByClassName('form-input')
        );
        inputs.forEach((input) => {
            const isValid = input.value !== '' && input.checkValidity();
            if (!isValid) {
                input.style.backgroundColor = '#F96F5D';
                errors.push(input);
            } else {
                input.style.backgroundColor = '';
            }
        });

        if (!errors.length) {
            const formResults = document.createElement('div');
            formResults.id = 'form-results';
            inputs.forEach((input) => {
                const result = document.createElement('p');
                result.textContent = `${input.labels[0].textContent} ${input.value}`;
                formResults.appendChild(result);
            });

            form.after(formResults);
        }
    });

    form.appendChild(submitButton);

    const title = document.createElement('h3');
    title.textContent = 'Форма для заповнення';
    task1.append(title, form);
}

function initTable() {
    const task2 = document.getElementById('task2');

    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.id = 'color-input';

    const table = document.createElement('table');
    table.id = 'table';
    let cellNumber = 1;
    for (let i = 0; i < 6; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 6; j++) {
            const td = document.createElement('td');
            td.addEventListener('mouseover', () => {
                td.style.backgroundColor = generateRandomColor();
            });
            td.addEventListener('click', () => {
                td.style.backgroundColor = colorInput.value;
            });
            td.addEventListener('dblclick', () => {
                const rows = Array.from(table.childNodes);
                const selectedRowIndex = rows.indexOf(td.parentNode);
                for (let i = selectedRowIndex; i < rows.length; i += 2) {
                    rows[i].childNodes.forEach((cell) => {
                        cell.style.backgroundColor = colorInput.value;
                    });
                }
            });
            td.textContent = cellNumber;
            tr.appendChild(td);
            cellNumber++;
        }
        table.appendChild(tr);
    }
    task2.append(colorInput, table);
}

function initPage() {
    initForm();
    initTable();
}

initPage();

function generateRandomColor() {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
}
