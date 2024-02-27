let products = [];

async function API() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        data.forEach(item => {
            products.push(item);
        });
        renderProducts()
    } catch (error) {
        console.log('Error', error);
    }
}

API();

let root = document.querySelector('#root');
let main = document.querySelector('#main');

function renderProducts() {
    products.forEach(item => {
        main.innerHTML += `
        <a href="product.html?id=${item.id}" class="d-flex justify-content-center col-lg-3" target ="blank">
        <div class="product d-flex flex-column align-items-center col-lg-12  ">
        
        <div class="image">
            <img src="${item.image}"/>
        </div>
        <div class ="product-info ">
        <p class="mt-3 text-center"><span style="font-weight:bolder;">Kategori:</span> ${item.category}</p>
            <p style ="font-weight:bolder;"class="text-center mt-4  " >${item.price} $</p>
            <p >${item.title}</p>
        </div>
      
    </div>
    </a>
        `;
    });
}

let root2 = document.querySelector('#root2')



