const bakeryItems = [
    {
        id: "1",
        img: "./src/croissant.jpg",
        title: "Croissant",
        description: "A flaky and buttery French pastry.",
        price: 345, // Changed from "$2.50" to 345
        rate: 4.5,
        reviews: 56,
    },
    {
        id: "2",
        img: "./src/baguette.jpg",
        title: "Baguette",
        description: "A classic French bread with a crispy crust.",
        price: 345, // Changed from "$3.00" to 345
        rate: 4.0,
        reviews: 42,
    },
    {
        id: "3",
        img: "./src/cupcake.jpg",
        title: "Cupcake",
        description: "Delicious cupcakes in various flavors.",
        price: 345, // Changed from "$2.00" to 345
        rate: 4.8,
        reviews: 65,
    },
    {
        id: "4",
        img: "./src/doughnot.jpg",
        title: "Doughnut",
        description: "Soft and sweet doughnuts with various toppings.",
        price: 345, // Changed from "$1.50" to 345
        rate: 4.2,
        reviews: 38,
    },
    {
        id: "5",
        img: "./src/applepie.jpg",
        title: "Apple Pie",
        description: "Classic apple pie with a buttery crust.",
        price: 345, // Changed from "$4.50" to 345
        rate: 4.7,
        reviews: 50,
    },
    {
        id: "6",
        img: "./src/cinnamon-roll.jpg",
        title: "Cinnamon Roll",
        description: "Warm and gooey cinnamon rolls with icing.",
        price: 345, // Changed from "$2.75" to 345
        rate: 4.6,
        reviews: 60,
    },
    {
        id: "7",
        img: "./src/danish-pastry.jpg",
        title: "Danish Pastry",
        description: "Layers of flaky pastry with sweet fillings.",
        price: 345, // Changed from "$3.25" to 345
        rate: 4.4,
        reviews: 48,
    },
    {
        id: "8",
        img: "./src/chocolate-cake.jpg",
        title: "Chocolate Cake",
        description: "Rich and moist chocolate cake for chocolate lovers.",
        price: 345, // Changed from "$5.00" to 345
        rate: 4.9,
        reviews: 70,
    },
    {
        id: "10",
        img: "./src/blueberry-muffin.jpg",
        title: "Blueberry Muffin",
        description: "Moist and fruity muffins with blueberries.",
        price: 345, // Changed from "$2.25" to 345
        rate: 4.9,
        reviews: 62,
    },
    {
        id: "11",
        img: "./src/pie.jpg",
        title: "Banana Pie",
        description: "Moist and fruity muffins with blueberries.",
        price: 345, // Changed from "$2.25" to 345
        rate: 4.7,
        reviews: 52,
    },
    {
        id: "12",
        img: "./src/cake-birthday-gems-chocolate.jpg",
        title: "Chocolate-Gems-Cake",
        description: "Moist and fruity muffins with blueberries.",
        price: 345, // Changed from "$2.25" to 345
        rate: 4.0,
        reviews: 53,
    },
    {
        id: "13",
        img: "./src/pastry.jpg",
        title: "Pastry",
        description: "Moist and fruity muffins with blueberries.",
        price: 345, // Changed from "$2.25" to 345
        rate: 4.07,
        reviews: 55,
    },
    {
        id: "14",
        img: "./src/sliced bread.jpg",
        title: "Sliced Bread",
        description: "Moist and fruity muffins with blueberries.",
        price: 345, // Changed from "$2.25" to 345
        rate: 4.57,
        reviews: 52,
    },
    {
        id: "15",
        img: "./src/oval-bread.jpg",
        title: "Oval bread",
        description: "Moist and fruity muffins with blueberries.",
        price: 345, // Changed from "$2.25" to 345
        rate: 4.71,
        reviews: 50,
    },
    {
        id: "16",
        img: "./src/strawberry-pie.jpg",
        title: "Strawberry-Pie",
        description: "Moist and fruity muffins with blueberries.",
        price: 345, // Changed from "$2.25" to 345
        rate: 4.17,
        reviews: 51,
    },
];

let popup = document.getElementById("popup");


let cart = [];
// console.log("Script loaded");
const closebtn = document.querySelector("#close");
const openbtn = document.querySelector(".opencart");
const cartdisplay = document.querySelector(".viewcart_div");


const bitems = bakeryItems;
// console.log(bitems);

const cardct = document.querySelector(".cards");
const display = bitems.map((item, index) => {
    return `
      <div class="card">
  <div class="img">
  <img class="reviewimage" src="${item.img}" alt="">
  </div>
  <p>${item.rate}<span>(${item.reviews})</span></p>
  <p>${item.title}</p>
  <p></p>
  <p><i class="uil uil-rupee-sign"></i> ${item.price}</p>
  <div class="btn">
  <button class="btn bgbb" onclick="addToCart(${index})" id="btn" >Add to cart</button>
  </div>
  </div>
  `
})

cardct.innerHTML = display.join("");


$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#topbutton').fadeIn();
        } else {
            $('#topbutton').fadeOut();
        }
    });

    $("#topbutton").click(function () {
        $('html ,body').animate({ scrollTop: 0 }, 800);
    });
});

var button = document.getElementById('rightside');

function Togglebar() {
    button.style.top = "80px";
}
function Hidemenu() {
    button.style.top = "-500px";

}

// Function to handle the "Add to Cart" button click

function addToCart(index) {
    // console.log(index);
    const selectedItem = bakeryItems[index];
    // Add the selectedItem to the cart array
    cart.push(selectedItem);
    // console.log(cart);
    updatenum();
    // console.log(cart);
    // Update the cart display
    updateCartDisplay();
}
// Function to update the cart display
function updateCartDisplay() {
    const cardShopping = document.querySelector(".itemwraper");
    const totalPriceElement = document.querySelector("#totalPrice");

    // Calculate the total price
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    //   console.log(total);
    // console.log(cart);

    const shop = cart.map((item, index) => {
        return `
      <div class="itemcov">
        <div class="itemlit">
          <p>${item.title}</p>
          <p><i class="uil uil-rupee-sign"></i> ${item.price}</p>
        </div>
        <div class="btnctn">
          <button class="removeit btn bgbb" data-index="${index}">remove</button>
        </div>
      </div>
      `;
    });

    cardShopping.innerHTML = shop.join("");

    // Update the total price display
    totalPriceElement.innerHTML = `<i class="uil uil-rupee-sign"></i> ${total}`;


    // Add click event listener to the "remove" buttons
    const removeButtons = document.querySelectorAll(".removeit");
    removeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const indexToRemove = parseInt(button.dataset.index, 10);
            removeFromCart(indexToRemove);
        });
    });
}

// Function to remove item from the cart
function removeFromCart(index) {
    // Remove the item from the cart array based on the index
    cart.splice(index, 1);
    updateDataIndexAttributes();
    updatenum();
    // Update the cart display
    updateCartDisplay();
}

function updateDataIndexAttributes() {
    const removeButtons = document.querySelectorAll(".removeit");
    removeButtons.forEach((button, index) => {
        button.dataset.index = index;
    });
}

function open_c() {
    cartdisplay.style.display = "block";
}
function close_c() {
    cartdisplay.style.display = "none";
}

function updatenum() {
    const cartno = document.querySelector(".num");
    cartno.innerText = cart.length;
}


const totalPriceElement = document.querySelector("#totalPrice");
totalPriceElement.innerHTML = `<i class="uil uil-rupee-sign"></i> 0`;


    // Function to open the checkout modal
    function openCheckoutModal() {
        document.getElementById('checkoutModal').style.display = 'block';
      }
      
      // Function to close the checkout modal
      function closeCheckoutModal() {
        document.getElementById('checkoutModal').style.display = 'none';
      }
      
      // Function to submit the order
      function submitOrder() {
        const formData = new FormData(document.getElementById('checkoutForm'));
        
        fetch('/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Object.fromEntries(formData)),
        })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
          closeCheckoutModal(); // Close the modal after submitting the order
        })
        .catch(error => {
          console.error('Error:', error);
        });
      }

    //   checkout button popup function
   
    function openPopup(){
        popup.classList.add("open-popup");
    }

    function closePopup(){
        popup.classList.remove("open-popup");
    }
    

    // TESTIMONIAL SLIDER
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        grabCursor: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      