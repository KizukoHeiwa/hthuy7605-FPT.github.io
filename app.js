const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "HG 1/144 BLACK KNIGHT SQUAD Shi-ve.A",
        price: "1,000,000",
        desc: "Sản phẩm nhựa cao cấp với độ sắc nét cao, an toàn cho người chơi .Không bao gồm Giá đỡ mô hình (Các bạn có thể mua thêm tại Giá đỡ mô hình Gundam). Sản phẩm giúp phát triển trí não và rèn luyện tính kiên nhẫn cho người chơi. Các khớp cử động linh hoạt theo ý muốn. Sản phẩm gắn với nhau bằng khớp nối, không dùng keo dán.",
        colors: [
            {
                code: "black",
                img: "./img/gundam-black.png",
            },
            {
                code: "rgb(51, 89, 194)",
                img: "./img/gundam-blue.png",
            }
        ]
    },
    {
        id: 2,
        title: "Oversize Gundam T-Shirt",
        price: "500,000",
        desc: "Áo thun in mô hình Gundam. Oversize phù hợp với mọi người.",
        colors: [
            {
                code: "#6a6b4c",
                img: "./img/tshirt-green.png",
            },
            {
                code: "#363636",
                img: "./img/tshirt-black.png",
            }
        ]
    },
    {
        id: 3,
        title: "Bilmola Gundam X Replicon GT Complete Set",
        price: "2,000,000",
        desc: "Nón bảo hiểm cosplay thuộc vũ trụ Gundam.",
        colors: [
            {
                code: "#f30c2c",
                img: "./img/helmet-red.png",
            },
            {
                code: "#e66b88",
                img: "./img/helmet-pink.png",
            }
        ]
    },
    {
        id: 4,
        title: "Item 4",
        price: 60.000,
        colors: [
            {
                code: "green",
                img: "",
            },
            {
                code: "black",
                img: "",
            }
        ]
    },
    {
        id: 5,
        title: "Item 5",
        price: 70.000,
        colors: [
            {
                code: "orange",
                img: "",
            }
            ,
            {
                code: "aqua",
                img: "",
            }
        ]
    }
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = products[index];

        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = choosenProduct.price + " VND"
        currentProductDesc.textContent = choosenProduct.desc
        currentProductImg.src = choosenProduct.colors[0].img

        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code
        })
    });
});

currentProductColors.forEach((color, index) =>{
    color.addEventListener("click", () =>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
});

currentProductSizes.forEach((size, index) =>{
    size.addEventListener("click", () =>{
        currentProductSizes.forEach((size) =>{
            size.style.backgroundColor = "transparent"
            size.style.color = "black"
        })

        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () =>{
    payment.style.display = "flex"
    // payment.style.position = "fixed"
});

close.addEventListener("click", () =>{
    payment.style.display = "none"
})
