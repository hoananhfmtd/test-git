
async function getAPIdata() {
    let response = await fetch("https://sheetdb.io/api/v1/iawjh21or84te?fbclid=IwAR0HNlvwp4-EmL3jJWZecc2-guvL7StATHn4sOLKC9rxQtpJuda-ZnA0bS0");
    let data = await response.json();
    // console.log(data);
    return data;

}
// 22 san pham -> start index = 2 
function onButtonClick(pagination) {

    let newProductDiv = document.querySelector(".new-product");
    newProductDiv.innerHTML = '';
    console.log("newproductdiv after query :" + newProductDiv);
    let productsDiv = document.querySelector(".products");
    productsDiv.innerHTML = '';
    console.log("productsDiv after query :" + productsDiv);

    let i;
    console.log("pagination :" + pagination);

    switch (pagination) {
        case 1:
            i = 2;
            break;
        case 2:
            i = 8;
            break;
        case 3:
            i = 14
            break;
        case 4:
            i = 20;
            break
    }
    console.log(i);

    getAPIdata().then(data => {
        // lấy data
        let apiData = data;

        console.log("i in then: " + i);
        for (let j = 0; j < 2; j++) {
            //0 - 1
            // tạo một div chứa các sản phẩm mới
            console.log("j :" + j)
            let newProductDiv = document.querySelector(".new-product");
            newProductDiv.innerHTML = '';
            console.log("this is a new product-div" + newProductDiv)
            // div sản phẩm 1
            let newProductOne = document.createElement("div");
            // tạo image sản phẩm 1
            var img = document.createElement('img');
            img.classList.add("new-product-img")
            img.src = data[j].img;
            img.width = "200"
            // tạo tên sản phẩm mới 
            let newProductOneName = document.createElement("p");
            newProductOneName.classList.add("new-product-name")
            newProductOneName.innerText = `${data[j].name}`
            // tạo giá tiền sản phẩm mới

            let newProductOnePrice = document.createElement("p")
            newProductOnePrice.innerText = `${data[j].price}`
            newProductOnePrice.classList.add("new-product-price");

            newProductOne.appendChild(img);
            newProductOne.appendChild(newProductOneName);
            newProductOne.appendChild(newProductOnePrice)
            newProductDiv.appendChild(newProductOne);
        }
        productsDiv.innerHTML = '';
        console.log("product div after clear : " + productsDiv)
        for (let j = i; i < i + 5; j++) {
            console.log(i);
            console.log(i + 5);
            let productsDiv = document.querySelector(".products");
            console.log("this is a product-div" + productsDiv)
            // div sản phẩm 1
            let eachProductDiv = document.createElement("div");
            // tạo image sản phẩm 1
            let productImg = document.createElement('img');
            productImg.classList.add("product-img")
            productImg.src = data[i].img;
            productImg.width = "200"
            // tạo tên sản phẩm mới 
            let eachProductName = document.createElement("p");
            eachProductName.classList.add("product-name")
            eachProductName.innerText = `${data[i].name}`
            // tạo giá tiền sản phẩm mới

            let eachProductPrice = document.createElement("p")
            eachProductPrice.innerText = `${data[i].price}`
            eachProductPrice.classList.add("product-price");

            eachProductDiv.appendChild(productImg);
            eachProductDiv.appendChild(eachProductName);
            eachProductDiv.appendChild(eachProductPrice)
            productsDiv.appendChild(eachProductDiv);



        }

    }
    )
}

const buttonOne = document.querySelector("#btn-1")
const buttonTwo = document.querySelector("#btn-2")
const buttonThree = document.querySelector("#btn-3")
const buttonFour = document.querySelector("#btn-4")

buttonOne.addEventListener('click', () => { onButtonClick(1) })
buttonTwo.addEventListener('click', () => { onButtonClick(2) })
buttonThree.addEventListener('click', () => { onButtonClick(3) })
buttonFour.addEventListener('click', () => { onButtonClick(4) })


getAPIdata().then(data => {
    // lấy data
    let apiData = data;
    // console.log("image url" + data[0].img);
    // console.log("apiData : " + apiData);
    for (let i = 0; i < 8; i++) {
        if (i < 2) {
            //0 - 1
            // tạo một div chứa các sản phẩm mới
            let newProductDiv = document.querySelector(".new-product");
            console.log("this is a new product-div" + newProductDiv)
            // div sản phẩm 1
            let newProductOne = document.createElement("div");
            // tạo image sản phẩm 1
            var img = document.createElement('img');
            img.classList.add("new-product-img")
            img.src = data[i].img;
            img.width = "200"
            // tạo tên sản phẩm mới 
            let newProductOneName = document.createElement("p");
            newProductOneName.classList.add("new-product-name")
            newProductOneName.innerText = `${data[i].name}`
            // tạo giá tiền sản phẩm mới

            let newProductOnePrice = document.createElement("p")
            newProductOnePrice.innerText = `${data[i].price}`
            newProductOnePrice.classList.add("new-product-price");

            newProductOne.appendChild(img);
            newProductOne.appendChild(newProductOneName);
            newProductOne.appendChild(newProductOnePrice)
            newProductDiv.appendChild(newProductOne);
        }
        else {
            let productsDiv = document.querySelector(".products");
            console.log("this is a product-div" + productsDiv)
            // div sản phẩm 1
            let eachProductDiv = document.createElement("div");
            // tạo image sản phẩm 1
            let productImg = document.createElement('img');
            productImg.classList.add("product-img")
            productImg.src = data[i].img;
            productImg.width = "200"
            // tạo tên sản phẩm mới 
            let eachProductName = document.createElement("p");
            eachProductName.classList.add("product-name")
            eachProductName.innerText = `${data[i].name}`
            // tạo giá tiền sản phẩm mới

            let eachProductPrice = document.createElement("p")
            eachProductPrice.innerText = `${data[i].price}`
            eachProductPrice.classList.add("product-price");

            eachProductDiv.appendChild(productImg);
            eachProductDiv.appendChild(eachProductName);
            eachProductDiv.appendChild(eachProductPrice)
            productsDiv.appendChild(eachProductDiv);
        }


    }

}
)