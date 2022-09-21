let fruits = [
    {id: 1, title: "Apple", price: 20, img: "https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348"},
    {id: 2, title: "Orange", price: 30, img: "https://www.abaz-int.com/wp-content/uploads/2021/10/Fresh-Oranges.jpg"},
    {id: 3, title: "Lime", price: 40, img: "https://linverd.com/en/wp-content/uploads/sites/8/2021/02/9_Lllima-pq.jpg"},
    {id: 4, title: "Apple", price: 20, img: "https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348"},
    {id: 5, title: "Orange", price: 30, img: "https://www.abaz-int.com/wp-content/uploads/2021/10/Fresh-Oranges.jpg"},
    {id: 6, title: "Lime", price: 40, img: "https://linverd.com/en/wp-content/uploads/sites/8/2021/02/9_Lllima-pq.jpg"},
    {id: 7, title: "Apple", price: 20, img: "https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348"},
    {id: 8, title: "Orange", price: 30, img: "https://www.abaz-int.com/wp-content/uploads/2021/10/Fresh-Oranges.jpg"},
    {id: 9, title: "Lime", price: 40, img: "https://linverd.com/en/wp-content/uploads/sites/8/2021/02/9_Lllima-pq.jpg"},
    {id: 10, title: "Apple", price: 20, img: "https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348"},
    {id: 11, title: "Orange", price: 30, img: "https://www.abaz-int.com/wp-content/uploads/2021/10/Fresh-Oranges.jpg"},
    {id: 12, title: "Lime", price: 40, img: "https://linverd.com/en/wp-content/uploads/sites/8/2021/02/9_Lllima-pq.jpg"},
    {id: 13, title: "Apple", price: 20, img: "https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348"},
    {id: 14, title: "Orange", price: 30, img: "https://www.abaz-int.com/wp-content/uploads/2021/10/Fresh-Oranges.jpg"},
    {id: 15, title: "Lime", price: 40, img: "https://linverd.com/en/wp-content/uploads/sites/8/2021/02/9_Lllima-pq.jpg"},
    {id: 16, title: "Apple", price: 20, img: "https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348"},
    {id: 17, title: "Orange", price: 30, img: "https://www.abaz-int.com/wp-content/uploads/2021/10/Fresh-Oranges.jpg"},
    {id: 18, title: "Lime", price: 40, img: "https://linverd.com/en/wp-content/uploads/sites/8/2021/02/9_Lllima-pq.jpg"},
    {id: 19, title: "Apple", price: 20, img: "https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348"},
    {id: 20, title: "Orange", price: 30, img: "https://www.abaz-int.com/wp-content/uploads/2021/10/Fresh-Oranges.jpg"},
    {id: 21, title: "Lime", price: 40, img: "https://linverd.com/en/wp-content/uploads/sites/8/2021/02/9_Lllima-pq.jpg"},
    {id: 22, title: "Apple", price: 20, img: "https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348"},
    {id: 23, title: "Orange", price: 30, img: "https://www.abaz-int.com/wp-content/uploads/2021/10/Fresh-Oranges.jpg"},
    {id: 24, title: "Lime", price: 40, img: "https://linverd.com/en/wp-content/uploads/sites/8/2021/02/9_Lllima-pq.jpg"},
    {id: 25, title: "Apple", price: 20, img: "https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348"},
    {id: 26, title: "Orange", price: 30, img: "https://www.abaz-int.com/wp-content/uploads/2021/10/Fresh-Oranges.jpg"},
    {id: 27, title: "Lime", price: 40, img: "https://linverd.com/en/wp-content/uploads/sites/8/2021/02/9_Lllima-pq.jpg"},
    {id: 28, title: "Apple", price: 20, img: "https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348"},
    {id: 29, title: "Orange", price: 30, img: "https://www.abaz-int.com/wp-content/uploads/2021/10/Fresh-Oranges.jpg"},
    {id: 30, title: "Lime", price: 40, img: "https://linverd.com/en/wp-content/uploads/sites/8/2021/02/9_Lllima-pq.jpg"},
    {id: 31, title: "Apple", price: 20, img: "https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348"},
    {id: 32, title: "Orange", price: 30, img: "https://www.abaz-int.com/wp-content/uploads/2021/10/Fresh-Oranges.jpg"},
    {id: 33, title: "Lime", price: 40, img: "https://linverd.com/en/wp-content/uploads/sites/8/2021/02/9_Lllima-pq.jpg"},
    {id: 34, title: "Apple", price: 20, img: "https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348"},
    {id: 35, title: "Orange", price: 30, img: "https://www.abaz-int.com/wp-content/uploads/2021/10/Fresh-Oranges.jpg"},
    {id: 36, title: "Lime", price: 40, img: "https://linverd.com/en/wp-content/uploads/sites/8/2021/02/9_Lllima-pq.jpg"},
    {id: 37, title: "Apple", price: 20, img: "https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348"},
    {id: 38, title: "Orange", price: 30, img: "https://www.abaz-int.com/wp-content/uploads/2021/10/Fresh-Oranges.jpg"},
    {id: 39, title: "Lime", price: 40, img: "https://linverd.com/en/wp-content/uploads/sites/8/2021/02/9_Lllima-pq.jpg"}
]

const toHTML = fruit => `
    <div class="col-sm-4">
        <div class="card mb-3">
            <img src="${fruit.img}" alt="${fruit.title}" style="height: 300px" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">${fruit.title}</h5>
                <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Look price</a>
                <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Delete</a>
            </div>
        </div>
    </div>
`

function render() {
    const html = fruits.map(toHTML).join("");
    document.querySelector("#fruits").innerHTML = html;
}

render();

const modalPrice = $.modal({
    title: "Price",
    closable: true,
    width: '400px',
    footerButtons: [
        {text: 'Close', type: 'primary', handler() {
            modalPrice.close()
        }},
    ]
})

document.addEventListener("click",  event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn;
    const id = +event.target.dataset.id;
    const fruit = fruits.find(f => f.id === id);


    if (btnType === "price") {
        modalPrice.setContent(`
            <p>
                ${fruit.title} price is <strong>${fruit.price} $</strong>
            </p>
        `)
        modalPrice.open();
    } else if (btnType === "remove") {
        $.confirm({
            title: "Do you want?",
            content: `
                <p>
                    You delete fruit <strong>${fruit.title} $</strong>
                </p>
            `
        }).then(() => {
            fruits = fruits.filter(f => f.id !== id)
            render();
        }).catch()
    }
})