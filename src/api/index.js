


function fetchProduct(){

    let ProductList = fetch('http://www.mocky.io/v2/5b320a0d34000066003fd203')
                        .then(data => data.json())
                        
                        

    return ProductList;
}

export function fetchRepository(){
    return fetchProduct();
}