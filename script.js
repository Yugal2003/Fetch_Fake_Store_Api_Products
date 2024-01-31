async function hello() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');//console.log(response);
        const jsondata = await response.json();//console.log(jsondata);

        let data = ""; // data for store some database in the api
        jsondata.map((values) => { 
            data += `
        <div class="card">
        <h3>${values.title}</h3>
        <img src="${values.image}" width=250px" height="200px" alt="">
        <p class="description">${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
        </div>`
        });

        document.querySelector(".cards").innerHTML = data;
    }
    catch (error) {
        console.log(error);
    }
}

hello(); // call a function