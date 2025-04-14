const products = [
    {
      name: "LITWAY Anime ",
      image: "https://m.media-amazon.com/images/I/51YTtf1n5NL._SX679_.jpg",
      price: "$297.00",
      link: "movie.html "
    },
    {
      name: "Sakuna Anime ",
      image: "https://i.pinimg.com/736x/62/7a/cd/627acd0861f0042688ea6b6eb20ce534.jpg",
      price: "$300.00",
      link: "#"
    },
    {
      name: "   Shippuden Anime ",
      image: "https://m.media-amazon.com/images/I/61xBqk9A86L._SX679_.jpg",
      price: "$300.00",
      link: "#"
    },
    {
      name: "Sharingan Eye Anime",
      image: "https://m.media-amazon.com/images/I/51v6nq+dbOL._SX679_.jpg",
      price: "$298.00",
      link: "#"
    },

    {
        name: "Demoon Anime ",
        image: "https://m.media-amazon.com/images/I/61J9-H4ukjL._SX679_.jpg",
        price: "$299.00",
        link: "movie.html "
      },
      {
        name: "Nnruto Anime ",
        image: "https://m.media-amazon.com/images/I/51u5I176f0L._AC_UL480_FMwebp_QL65_.jpg",
        price: "$298.00",
        link: "#"
      },
      {
        name: "Denom Anime",
        image: "https://m.media-amazon.com/images/I/51teObSJN5L._AC_UL480_FMwebp_QL65_.jpg",
        price: "$549.00",
        link: "#"
      },
      {
        name: "Red Naruto Anime",
        image: "https://m.media-amazon.com/images/I/61bZVc7J21L._AC_UL480_FMwebp_QL65_.jpg",
        price: "$299.00",
        link: "#"
      },

      {
        name: "Saturo Anime",
        image: "https://m.media-amazon.com/images/I/51eGmkFakWL._AC_UL480_FMwebp_QL65_.jpg",
        price: "$549.00",
        link: "#"
      },

      {
        name: "KHAKEY Anime",
        image: "https://m.media-amazon.com/images/I/61LioE3zY-L._AC_UL480_FMwebp_QL65_.jpg",
        price: "$331.00",
        link: "#"
      },

      {
        name: "Demons layers Anime",
        image: "https://images-eu.ssl-images-amazon.com/images/I/51xoBZFRDDL._AC_UL165_SR165,165_.jpg",
        price: "$559.00",
        link: "#"
      },

      {
        name: "Deemon layers Anime",
        image: "https://m.media-amazon.com/images/I/51f8Z9tOp-L._AC_UL480_FMwebp_QL65_.jpg",
        price: "$549.00",
        link: "#"
      },

      {
        name: " Piece Luffy Anime",
        image: "https://m.media-amazon.com/images/I/61VtAy6h01L._SX679_.jpg",
        price: "$299.00",
        link: "#"
      },

      {
        name: "Demon layers Anime",
        image: "https://m.media-amazon.com/images/I/51TebCcCvLL._AC_UL480_FMwebp_QL65_.jpg",
        price: "$549.00",
        link: "#"
      },

      {
        name: "Demon Anime",
        image: "https://m.media-amazon.com/images/I/516xHV66SmL._AC_UL480_FMwebp_QL65_.jpg",
        price: "$299.00",
        link: "#"
      }
  ];
  
  function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
  
    products.forEach((product, index) => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.style.animationDelay = `${0.2 * index}s`;
  
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <div class="product-info">
          <h3>${product.name}</h3>
          <p class="price">${product.price}</p>
          <a href="${product.link}" class="buy-btn"><span>Buy Now</span></a>
        </div>
      `;
  
      productsGrid.appendChild(productCard);
    });
  }
  
  // Call the function
  renderProducts();
  