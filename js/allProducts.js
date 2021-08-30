const allProducts = [
  {
    name: "G513",
    description:
      "The G513 is a mechanical RGB keyboared with 12 programable keys",
    Rating: "Rating:9.1/10",
    Price: "Price:130$",
    img: "ress/g513.webp",
  },
  {
    name: "G613",
    description:
      "The G513 is a mechanical RGB keyboared with 12 programable keys",
    Rating: "Rating:7.5/10",
    Price: "Price:150$",
    img: "ress/g613.webp",
  },
  {
    name: "G903",
    description:
      "The G903 is a RGB wireless mouse with 6 programable buttons and with upto 140 hours of lifetime from one charge.",
    Rating: "Rating:8/10",
    Price: "Price:130$",
    img: "ress/g903.webp",
  },
  {
    name: "G502",
    description:
      "The G502 is a RGB wireless mouse with many programable buttons.",
    Rating: "Rating:7.8/10",
    Price: "Price:150$",
    img: "ress/g502.webp",
  },
  {
    name: "G903",
    description: "The G903 is a Gaming headset with Spacial ingame awarness.",
    Rating: "Rating:8/10",
    Price: "Price:130$",
    img: "ress/ProX.webp",
  },
  {
    name: "C922",
    description: "The C922 is a streaming camera with 1080p video recording.",
    Rating: "Rating:9.2/10",
    Price: "Price:100$",
    img: "ress/C922.webp",
  },
  {
    name: "G840",
    description: "The G840 is a gaming mouse pad collaberation with Shroud.",
    Rating: "Rating:9/10",
    Price: "Price:50$",
    img: "ress/shroud-Pad.webp",
  },
  {
    name: "G840 K/DA",
    description:
      "The G840 K/DA is a gaming mouse pad collaberation with League Of Legends.",
    Rating: "Rating:9.4/10",
    Price: "Price:50$",
    img: "ress/G840-K-DA.webp",
  },
];

const cardContainer = document.querySelector(".products-cards");
console.log(window.location.href);
const url = window.location.href;

let productIndex = -100;

if (url.includes("/AllProducts.html")) {
  allProducts.forEach((element, index) => {
    productIndex = index;
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    var img = document.createElement("img");
    img.src = element.img;
    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = element.name;
    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerHTML = element.description;
    const listGroup = document.createElement("ul");
    listGroup.classList.add("list-group");
    listGroup.classList.add("list-group-flush");
    const Rating = document.createElement("li");
    Rating.classList.add("list-group-item");
    Rating.innerHTML = element.Rating;
    const Price = document.createElement("li");
    Price.classList.add("list-group-item");
    Price.innerHTML = element.Price;

    cardContainer.appendChild(cardDiv);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardDiv.appendChild(listGroup);
    listGroup.appendChild(Rating);
    listGroup.appendChild(Price);

    cardDiv.addEventListener("click", () => {
      var newin = window.open("/productPage.html");
      newin.product = element;
    });
  });
} else {
  console.log(product);
  const productDiv = document.querySelector(".product");
  const perProductDiv = document.createElement("div");
  perProductDiv.classList.add("product-div");
  const perProductImg = document.createElement("img");
  perProductImg.classList.add("product-img");
  perProductImg.src = product.img;
  const InfoDiv = document.createElement("div");
  InfoDiv.classList.add("product-info");
  const ProductTitle = document.createElement("h1");
  ProductTitle.classList.add("product-title");
  ProductTitle.innerHTML = product.name;
  const productDesc = document.createElement("h3");
  productDesc.classList.add("product-desc");
  productDesc.innerHTML = product.description;
  const productRating = document.createElement("h3");
  productRating.innerHTML = product.Rating;
  productRating.classList.add("xs");
  const productPrice = document.createElement("h3");
  productPrice.classList.add("xs");
  productPrice.innerHTML = product.Price;
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("button");
  const button = document.createElement("a");
  button.classList.add("btn");
  button.classList.add("btn-light");
  button.classList.add("checkout");
  button.href = "cart.html";
  button.setAttribute("role", "button");
  button.innerHTML = "CheckOut";

  productDiv.appendChild(perProductDiv);
  perProductDiv.appendChild(perProductImg);
  productDiv.appendChild(InfoDiv);
  InfoDiv.appendChild(ProductTitle);
  InfoDiv.appendChild(productDesc);
  InfoDiv.appendChild(productRating);
  InfoDiv.appendChild(productPrice);
  InfoDiv.appendChild(buttonDiv);
  buttonDiv.appendChild(button);
  button.appendChild(checkout);
}
