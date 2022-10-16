function generateRandomColor() {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
}

function initial() {
    //task 1
    const element1 = document.getElementById('element1');

    element1.addEventListener('click', () => {
        element1.style.backgroundColor = generateRandomColor();
        element1.style.color = generateRandomColor();
    });

    const element2 = document.querySelector('#element2');

    element2.addEventListener('click', () => {
        element2.style.backgroundColor = generateRandomColor();
        element2.style.color = generateRandomColor();
    });

    //task 2
    const cityLink = document.querySelector('#cityLink');
    const imageContainer = document.querySelector('#imageContainer');

    const createButton = document.createElement('button');
    createButton.textContent = 'Create';
    createButton.setAttribute('class', 'button');
    createButton.addEventListener('click', () => {
        if (cityLink.childElementCount >= 1) return;
        const image = document.createElement('img');
        image.style.transform = 'scale(1)';
        image.src =
            'https://vgorode.ua/img/article/5285/63_main-v1583944627.jpg';
        image.alt = 'lviv_photo';
        image.id = 'image';
        cityLink.appendChild(image);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.setAttribute('class', 'button');
    deleteButton.addEventListener('click', () => {
        cityLink.innerHTML = '';
    });

    const zoomPositiveButton = document.createElement('button');
    zoomPositiveButton.textContent = 'Positive zoom';
    zoomPositiveButton.setAttribute('class', 'button');
    zoomPositiveButton.addEventListener('click', () => {
        const image = document.getElementById('image');
        if (!image?.style.transform) return;
        image.style.transform = `scale(${
            +image.style.transform.replace(/\D/g, '') + 1
        })`;
    });

    const zoomNegativeButton = document.createElement('button');
    zoomNegativeButton.textContent = 'Negative zoom';
    zoomNegativeButton.setAttribute('class', 'button');
    zoomNegativeButton.addEventListener('click', () => {
        const image = document.getElementById('image');
        if (
            !image?.style.transform ||
            +image.style.transform.replace(/\D/g, '') <= 1
        )
            return;

        image.style.transform = `scale(${
            +image.style.transform.replace(/\D/g, '') - 1
        })`;
    });

    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('id', 'buttonContainer');

    buttonContainer.append(
        createButton,
        deleteButton,
        zoomPositiveButton,
        zoomNegativeButton
    );

    imageContainer.after(buttonContainer);
}

initial();
