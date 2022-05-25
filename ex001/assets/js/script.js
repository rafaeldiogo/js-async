const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat'); // pegando o botao  que esta no html id = 'change-cat'

const getCats = async () => {
    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e));
        
    return data.webpurl; // vai acessar a API e retornar a webpurl    
};

const loadImg = async () => { // vai carregar as imagens id = 'cat'
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);
loadImg();
