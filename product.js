

// product list element area start
const add_product = document.getElementById('add_product');
const close = document.getElementById('close');
const product_list = document.getElementById('product_list');
const productForm = document.getElementById('product');
const product_add_box = document.querySelector('.product-add-box');

// Product list function start

add_product.addEventListener('click', function(){

   
    product_add_box.style.display = 'block';

    close.style.float = 'right';
});

close.addEventListener('click', function(){
    product_add_box.style.display = 'none';
});

// product list function area start



productForm.addEventListener('submit', function(e){

    e.preventDefault();
    let name = this.querySelector('input[name="name"]').value;
    let price = this.querySelector('input[name="price"]').value;
    let sale_price = this.querySelector('input[name="sale_price"]').value;
    let photo = this.querySelector('input[name="photo"]').value;

    let product_arr;

    if(dataGet('product')){
        product_arr = dataGet('product');
    }else{
        product_arr = [];
    }

    product_arr.push({

        name       : name,
        price      : price,
        sale       : sale_price,
        photo      : photo
    });

    dataSend('product', product_arr )

    allproducts();
});




function allproducts(){

    let products = dataGet('product'); 
     
    product_list.innerHTML = '';
  
    products.map(data =>{
        product_list.innerHTML +=`
        <div class="col-md-3 my-2">
            <div class="card">
                 <img class="card-image" src="${ data.photo }" alt="">
                <div class="car-body">
                    <h3>${ data.name }</h3>
                    <p> <span class="regular-price"> $${data.price}</span> <span class="sale-price"> $${data.sale} </span> </p>
                    <br>
                    <button class="btn btn-primary">Add to card</button>
                </div>
            </div>
        </div>
    
        `;
    });
    
    

    };
    allproducts();

