axios.get('http://localhost:3000/products')
    .then(res => {
        console.log(res);

        const listHTML = document.querySelector('#product');
        data = res.data

        data.forEach(item => {
            const {
                id,
                name,
                imgURL
            } = item
            let qty = item.qty || 0;
            const itemHTML = `
            <div class="col-md-6 col-sm-12 mb-2">
            <div class="card text-center">
                        <img src="${imgURL}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <button class="btn btn-primary" onclick="addCart(${id}, ${qty + 1})" >Add to Cart</button>
                        </div>
                    </div>
                    </div>
            `
            listHTML.innerHTML += itemHTML
        });
    })
    .catch(err => {
        console.log(err);
    })

addCart = (id, qty) => {
    axios.patch(`http://localhost:3000/products/${id}`,{
        qty
    })

    console.log(id);

}