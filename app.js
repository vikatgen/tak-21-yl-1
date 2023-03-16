/* (async () => {
    const response = await fetch('https://dummyjson.com/products')
    const { products } = await response.json();
    console.log(products)
})(); */

async function getProductsData() {
    const response = await fetch('https://dummyjson.com/products');
    const { products } = await response.json();

    return products;
}

getProductsData();

/* https://dummyjson.com/products/categories */

async function getProductCategories() {
    const response = await fetch('https://dummyjson.com/products/categories');
    const data = await response.json();

    return data;
}


async function createCategoryButtons() {
    // Tee UI button elemente samapalju kui on kategooriaid
    const categories = await getProductCategories();

    const categoryList = document.querySelector('.category-list');
    
    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('category-button');
        button.innerText = category;
        categoryList.append(button);
    });
}

async function showProductList() {
    // Näita tootelisti kategooria nuppude all.
    const products = await getProductsData();

    const productTablebodyElement = document.querySelector('.table-body');

    products.forEach((product) => {
        console.log(product)
        const tableRow = document.createElement('tr');

        const content = `
            <tr>
                <td>${product.id}</td>
                <td>
                    <img src="${product.thumbnail}" alt="${product.title}" />
                </td>
                <td>${product.title}</td>
                <td>${product.rating}</td>
                <td>${product.price}</td>
                <td>${product.stock}</td>
                <td>${product.discountPercentage}</td>
            </tr>
        `

        tableRow.innerHTML = content;

        productTablebodyElement.append(tableRow);
    })
}

showProductList();
createCategoryButtons();
