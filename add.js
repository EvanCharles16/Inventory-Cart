const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

const URL = `http://localhost:3000/products/${id}`

axios.get(URL)
    .then(res => {
        console.log(res.data);

        const listHTML = document.querySelector('#addToCart')
        data = res.data
         
        const {
            id,
            name,
            imgURL
        } = data

        const itemHTML = `
        <div class="col-md-4 col-sm-6 mb-2">
            <div class="card text-center">
                        <img src="${imgURL}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
                                nesciunt animi quam laudantium blanditiis sequi!</p>

                            <a href="" ><button class="btn btn-primary"><i class="fa fa-shopping-cart fa-2x"></i></button>
                            <a href="" ><button class="btn btn-danger"><i class="fa fa-trash fa-2x"></i></button>

                            <a href="./product.html" ><button class="btn btn-dark"><i class="fa fa-arrow-circle-o-left fa-2x"></i></button>
                        </div>
                    </div>
                    </div>
        `
        listHTML.innerHTML += itemHTML
        })
    
    .catch(err => {
        window.alert("Barang belum tersedia");
        console.error(err);
    })