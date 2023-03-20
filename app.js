// Defineerin asünkroonse funktsiooni nimega getProductsData.
async function getProductsData() {
    // Defineerin muutuja nimega response, ootan ära vastuse API päringule ning salvestan muutujasse response.
    const response = await fetch('https://dummyjson.com/products');
    // Ootame kuni response muudetakse JSON formaati ning võtame response seest 'key' nimega products ja salvestame samanimelisse muutujasse.
    const { products } = await response.json();
    // Tagastab muutuja products.
    return products;
}
// Käivitab funktsiooni getProductsData.
getProductsData();
// Defineerin asünkroonse funktsiooni nimega getProductsCategories.
async function getProductCategories() {
    // Defineerin muutuja nimega response, ootan ära vastuse API päringule ning salvestan muutujasse response.
    const response = await fetch('https://dummyjson.com/products/categories');
    // Ootame kuni response muudetakse JSON formaati ning salvestame vastuse muutujasse data.
    const data = await response.json();
    // Tagastab muuutuja nimega data.
    return data;
}

// Defineerin asünkroonse funktsiooni nimega createCategoryButtons
async function createCategoryButtons() {
    // Käivitan funktsiooni getProductCategories, mille vastuse ma ootan ära ning salvestan muutujasse categories.
    const categories = await getProductCategories();
    // Võtan HTML dokumendist elemendi klassiga .category-list ning salvestan muutjasse categoryList.
    const categoryList = document.querySelector('.category-list');
    
    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('category-button');
        button.innerText = category;
        categoryList.append(button);
    });
}

async function showProductList() {

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
