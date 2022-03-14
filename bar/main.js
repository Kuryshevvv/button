async function getInfo() {
    const info = await fetch('https://api.punkapi.com/v2/beers');
    return await info.json();
}

const wrapper = document.querySelector('.wrapper');
let state = [];
getInfo().then((response) => {
    state = response
    render()
})

function CreateProductCard({image_url, name, tagline, abv, description}) {

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const productImg = document.createElement('div');
    productImg.classList.add('product-img');
    productImg.style.backgroundImage = `url(${image_url})`;

    wrapper.appendChild(productImg);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    wrapper.appendChild(productInfo);

    const productText = document.createElement('div');
    productText.classList.add('product-text');

    productInfo.appendChild(productText);

    const titleInfo = document.createElement('h1');
    titleInfo.classList.add('titleInfo');
    titleInfo.textContent = `${name}`

    productText.appendChild(titleInfo);

    const discription = document.createElement('h2');
    discription.classList.add('discription');
    discription.textContent = `${tagline}`

    productText.appendChild(discription);

    const subtitleInfo = document.createElement('p');
    subtitleInfo.classList.add('subtitleInfo');
    subtitleInfo.textContent = `${description}`

    productText.appendChild(subtitleInfo);

    // const productPriceBtn = document.createElement('div');
    // productPriceBtn.classList.add('product-price-btn');

    // productInfo.appendChild(productPriceBtn);

    const amountAlc = document.createElement('p');
    amountAlc.classList.add('amountAlc');
    amountAlc.textContent = `Alc: ${abv} %`

    productInfo.appendChild(amountAlc);

    return wrapper;
}

function render() {
    state.forEach(item => {
        wrapper.appendChild(CreateProductCard(item));
    });
}


//  getInfo()

// let key;

// for (key in content) {
//   content[key]
//   list.innerHTML +=
//     `
//         <div class="wrapper">
//       <div class="product-img">
//         <img src="${content[key].image_url}" height="300" width="100">
//       </div>
//       <div class="product-info">
//         <div class="product-text">
//           <h1 class = "a">${content[key].name}</h1>
//           <h2 class = "b">by ${content[key].tagline}</h2>
//           <p class = "d">${content[key].description}</p>
//         </div>
//         <div class="product-price-btn">
//           <p class = "f">Alc: <span>${content[key].abv}</span>%</p>
//         </div>
//       </div>
//     </div>
//   `
// ;

// }
