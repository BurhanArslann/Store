const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('id');

// Ürün bilgilerini almak için Fake Store API'sine istek gönder
async function getProductDetails(productId) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const productData = await response.json();
        displayProductDetails(productData);
    } catch (error) {
        console.log('Error', error);
    }
}

// Ürün detaylarını görüntüle
function displayProductDetails(productData) {
    const productDetailsContainer = document.getElementById('product-details');
    const productHTML = `
        <div class="product">
            <h2>${productData.title}</h2>
            <img src="${productData.image}" alt="${productData.title}">
            <p>Kategori: ${productData.category}</p>
            <p>Fiyat: ${productData.price} $</p>
            <p>Açıklama: ${productData.description}</p>
        </div>
    `;
    productDetailsContainer.innerHTML = productHTML;
}

// getProductDetails fonksiyonunu çağırarak ürün detaylarını al
getProductDetails(productId);
