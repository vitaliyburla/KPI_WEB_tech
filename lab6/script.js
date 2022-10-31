const initPage = () => {
    const fetchButton = document.getElementById('fetchButton');
    fetchButton.addEventListener('click', async () => {
        const response = fetch('https://randomuser.me/api').then((res) =>
            res.json()
        );
        const data = (await response).results[0];
        const user = {
            picture: data.picture.large,
            cell: data.cell,
            city: data.location.city,
            postcode: data.location.postcode,
            email: data.email,
        };

        const usersList = document.getElementById('users');

        const userBlock = document.createElement('div');
        userBlock.className = 'user';

        const info = document.createElement('div');
        info.className = 'info';

        Object.entries(user).forEach(([key, data]) => {
            if (key === 'picture') {
                const image = document.createElement('img');
                image.src = data;
                userBlock.appendChild(image);
                return;
            }
            const text = document.createElement('p');
            text.textContent = `${
                key.charAt(0).toUpperCase() + key.slice(1)
            }: ${data}`;
            info.appendChild(text);
        });
        userBlock.appendChild(info);
        usersList.prepend(userBlock);
    });
};

initPage();
