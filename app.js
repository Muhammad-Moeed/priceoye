var mobiles = {
  Apple: {
    iPhone13: {
      name: "iPhone 13",
      price: "$799",
      oldprice: "$810",
      fullName: "Apple iPhone 13 – 128GB",
      Tags: "128GB, 5G, A15 Bionic, iOS, Dual Camera, Apple",
      color: ["Black", "White", "Red", "Blue", "Pink"],
      img: "./assets/card images/mob1.jpeg",
    },
    iPhone14: {
      name: "iPhone 14",
      price: "$899",
      oldprice: "$910",
      fullName: "Apple iPhone 14 – 256GB",
      Tags: "256GB, 5G, A16 Bionic, iOS, Dual Camera, Apple",
      color: ["Midnight", "Starlight", "Purple", "Red", "Blue"],
      img: "./assets/card images/mob2.jpeg",
    },
    iPhone15ProMax: {
      name: "iPhone 15 Pro Max",
      price: "$1099",
      oldprice: "$1199",
      fullName: "Apple iPhone 15 Pro Max – 512GB",
      Tags: "512GB, 5G, A17 Bionic, ProMotion Display, Titanium, Apple",
      color: ["Titanium Gray", "Silver", "Gold", "Blue"],
      img: "./assets/card images/mob3.webp",
    },
    iPhoneSE2022: {
      name: "iPhone SE 2022",
      price: "$429",
      oldprice: "$569",
      fullName: "Apple iPhone SE 2022 – 64GB",
      Tags: "64GB, A15 Bionic, 5G, iOS, Apple",
      color: ["Midnight", "Starlight", "Product Red"],
      img: "./assets/card images/mob4.jpeg",
    }
  },

  Samsung: {
    GalaxyS22: {
      name: "Galaxy S22",
      price: "$749",
      oldprice: "$815",
      fullName: "Samsung Galaxy S22 – 128GB",
      Tags: "128GB, AMOLED Display, 5G, Triple Camera, Samsung",
      color: ["Phantom Black", "Phantom White", "Green", "Pink Gold"],
      img: "./assets/card images/mob5.jpeg",
    },
    GalaxyS23Ultra: {
      name: "Galaxy S23 Ultra",
      price: "$1399",
      oldprice: "$1454",
      fullName: "Samsung Galaxy S23 Ultra – 256GB",
      Tags: "256GB, 5G, 200MP Camera, AMOLED, Snapdragon 8 Gen 2, Samsung",
      color: ["Phantom Black", "Phantom Silver", "Burgundy", "Green"],
      img: "./assets/card images/mob6.webp",
    },
    GalaxyZFold5: {
      name: "Galaxy Z Fold 5",
      price: "$1799",
      oldprice: "$1888",
      fullName: "Samsung Galaxy Z Fold 5 – 512GB",
      category: "Foldable Smar",
      Tags: "512GB, Foldable, AMOLED, 5G, Samsung",
      color: ["Phantom Black", "Cream", "Blue", "Graygreen"],
      img: "./assets/card images/mob7.jpeg",
    },
    GalaxyA54: {
      name: "Galaxy A54",
      price: "$450",
      oldprice: "$550",
      fullName: "Samsung Galaxy A54 – 128GB",
      Tags: "128GB, AMOLED, 5G, 120Hz, Samsung",
      color: ["Awesome Black", "Awesome White", "Awesome Purple", "Awesome Blue"],
      img: "./assets/card images/mob8.webp",
    }
  },

  OnePlus: {
    OnePlus9: {
      name: "OnePlus 9",
      price: "$729",
      oldprice: "$990",
      fullName: "OnePlus 9 – 128GB",
      Tags: "128GB, 5G, AMOLED, OnePlus, Hasselblad Camera",
      color: ["Morning Mist", "Astral Black", "Winter Mist"],
      img: "./assets/card images/mob9.jpeg",
    },
    OnePlus10Pro: {
      name: "OnePlus 10 Pro",
      price: "$999",
      oldprice: "$1000",
      fullName: "OnePlus 10 Pro – 256GB",
      Tags: "256GB, 5G, AMOLED, Snapdragon 8 Gen 1, OnePlus",
      color: ["Volcanic Black", "Emerald Forest", "Morning Mist"],
      img: "./assets/card images/mob10.webp",
    },
    OnePlus11: {
      name: "OnePlus 11",
      price: "$849",
      oldprice: "$998",
      fullName: "OnePlus 11 – 128GB",
      Tags: "128GB, 5G, Snapdragon 8 Gen 2, AMOLED, OnePlus",
      color: ["Titan Black", "Eternal Green"],
      img: "./assets/card images/mob11.webp",
    },
    OnePlusNord2: {
      name: "OnePlus Nord 2",
      price: "$399",
      oldprice: "$450",
      fullName: "OnePlus Nord 2 – 128GB",
      Tags: "128GB, MediaTek Dimensity 1200, AMOLED, OnePlus",
      color: ["Gray Sierra", "Blue Haze", "Green Wood"],
      img: "./assets/card images/mob12.jpeg",
    }
  },

  Xiaomi: {
    Mi11: {
      name: "Mi 11",
      price: "$749",
      oldprice: "$999",
      fullName: "Xiaomi Mi 11 – 128GB",
      Tags: "128GB, 5G, Snapdragon 888, AMOLED, Xiaomi",
      color: ["Horizon Blue", "Midnight Grey", "Cloud White"],
      img: "./assets/card images/mob1.jpeg",
    },
    Mi12Pro: {
      name: "Mi 12 Pro",
      price: "$999",
      oldprice: "$1199",
      fullName: "Xiaomi Mi 12 Pro – 256GB",
      Tags: "256GB, Snapdragon 8 Gen 1, AMOLED, 50MP Camera, Xiaomi",
      color: ["Nebula Blue", "Misty Gray", "Eclipse Black"],
      img: "./assets/card images/mob2.jpeg",
    },
    RedmiNote12: {
      name: "Redmi Note 12",
      price: "$199",
      oldprice: "$240",
      fullName: "Xiaomi Redmi Note 12 – 64GB",
      Tags: "64GB, 5G, MediaTek Dimensity, 48MP Camera, Xiaomi",
      color: ["Onyx Gray", "Sapphire Blue", "Emerald Green"],
      img: "./assets/card images/mob3.webp",
    },
    PocoF4: {
      name: "Poco F4",
      price: "$399",
      oldprice: "$500",
      fullName: "Poco F4 – 128GB",
      Tags: "128GB, Snapdragon 870, AMOLED, 5G, Poco",
      color: ["Moonlight Silver", "Night Black", "Electric Blue"],
      img: "./assets/card images/mob4.jpeg",
    }
  }
};


var mob = document.getElementById('mob');
var mod = document.getElementById('models');
var res = document.getElementById('result');

// brands dropdown
for (var keys in mobiles) {
  mob.innerHTML += `
        <option value="${keys}">${keys}</option>
    `;
}

function models() {
  var selectedBrand = mob.value;
  mod.innerHTML = `<option disabled selected value="">Select Model</option>`;
  for (var model in mobiles[selectedBrand]) {
    mod.innerHTML += `
            <option value="${model}">${mobiles[selectedBrand][model].name}</option>
        `;
  }
}

// Display selected model details

function search() {
  var selectedBrand = mob.value;
  var selectedModel = mod.value;

  if (selectedBrand && selectedModel) {
    var details = mobiles[selectedBrand][selectedModel];
 
    res.innerHTML = `
         <div class="mt-2 max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
   <div class="flex flex-col lg:flex-row">
    <!-- Left Section -->
    <div class="lg:w-1/2">
     <div class="relative border-2 border-gray-300 py-3">
      <img alt="${details.name}" class="w-full rounded-lg" height="400" src="${details.img}" width="400"/>
      <div class="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
       OFFICIAL ONLINE RETAILER
      </div>
     </div>
     <div class="flex justify-center mt-4 space-x-2">
      <img alt="Samsung Galaxy A05 Light Green Thumbnail" class="w-16 h-16 border rounded-lg" height="60" src="${details.img}" width="60"/>
      <img alt="Samsung Galaxy A05 Black Thumbnail" class="w-16 h-16 border rounded-lg" height="60" src="${details.img}" width="60"/>
      <img alt="Samsung Galaxy A05 Silver Thumbnail" class="w-16 h-16 border rounded-lg" height="60" src="${details.img}" width="60"/>
      <img alt="Samsung Galaxy A05 Light Green Thumbnail" class="w-16 h-16 border rounded-lg" height="60" src="${details.img}" width="60"/>
     </div>
    </div>
    <!-- Right Section -->
    <div class="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
     <h1 class="text-2xl font-bold">
      ${details.fullName}
     </h1>
     <div class="flex items-center mt-2">
      <span class="text-yellow-500">
       <i class="fas fa-star">
       </i>
      </span>
      <span class="text-yellow-500">
       <i class="fas fa-star">
       </i>
      </span>
      <span class="text-yellow-500">
       <i class="fas fa-star">
       </i>
      </span>
      <span class="text-yellow-500">
       <i class="fas fa-star">
       </i>
      </span>
      <span class="text-yellow-500">
       <i class="fas fa-star-half-alt">
       </i>
      </span>
      <span class="ml-2 text-gray-600">
       4.9
      </span>
      <span class="ml-2 text-gray-600">
       279 Ratings
      </span>
     </div>
     <div class="flex items-center mt-4">
      <span class="text-green-600">
       <i class="fas fa-check-circle">
       </i>
      </span>
      <span class="ml-2 text-gray-600">
       Priceoye Assured
      </span>
     </div>
     <div class="mt-4">
      <span class="text-3xl font-bold text-gray-800">
       Rs ${details.price}
      </span>
      <span class="text-sm line-through text-gray-500 ml-2">
       RS ${details.price}
      </span>
      <span class="text-sm text-green-600 ml-2">
       16% OFF
      </span>
     </div>
     <div class="mt-4">
      <span class="text-gray-600">
       Availability
      </span>
      <span class="ml-2 text-green-600">
       In Stock
      </span>
      <p>${details.Tags}</p>
     </div>
     <div class="mt-4">
      <span class="text-gray-600">
       Colors
      </span>
      <div class="flex mt-2 space-x-2">
       <div class="border rounded-lg p-2">
        <span class="block text-center text-sm">
         ${details.color[0]}
        </span>
       </div>
       <div class="border rounded-lg p-2">
        <span class="block text-center text-sm">
         ${details.color[1]}
        </span>
       </div>
       <div class="border rounded-lg p-2">
        <span class="block text-center text-sm">
         ${details.color[2]}
        </span>
       </div>
      </div>
     </div>
     <div class="mt-4">
      <span class="text-gray-600">
       Storage
      </span>
      <div class="flex mt-2 space-x-2">
       <button class="border rounded-lg px-4 py-2 text-sm">
        64GB - 4GB RAM
       </button>
       <button class="border rounded-lg px-4 py-2 text-sm">
        128GB - 4GB RAM
       </button>
       <button class="border rounded-lg px-4 py-2 text-sm">
        128GB - 6GB RAM
       </button>
      </div>
     </div>
     <div class="mt-4">
      <div class="border rounded-lg p-4">
       <div class="flex items-center">
        <input class="form-checkbox h-5 w-5 text-green-600" type="checkbox"/>
        <span class="ml-2 text-gray-600">
         1 Year Extended Warranty
        </span>
        <span class="ml-auto text-gray-600">
         Cost: Rs 899
        </span>
       </div>
       <p class="text-sm text-gray-500 mt-2">
        With Priceoye Extended Warranty, your product is protected for an additional year.
       </p>
      </div>
      <div class="border rounded-lg p-4 mt-4">
       <div class="flex items-center">
        <input class="form-checkbox h-5 w-5 text-green-600" type="checkbox"/>
        <span class="ml-2 text-gray-600">
         Insurance
        </span>
        <span class="ml-auto text-gray-600">
         Cost: Rs 470
        </span>
       </div>
       <p class="text-sm text-gray-500 mt-2">
        Covers Theft, Loss and Upto 50% Screen Damage
       </p>
      </div>
     </div>
     <div class="mt-4">
      <button class="w-full bg-orange-500 text-white py-2 rounded-lg">
       Add to Cart
      </button>
      <button class="w-full bg-blue-500 text-white py-2 rounded-lg mt-2">
       Compare
      </button>
     </div>
    </div>
   </div>
  </div>
 </body>
</html>

        `
  } else {
    document.getElementById('error').innerHTML = `<p>Please select a brand and model.</p>`;
  }
}


// Mobiles Data Card 

var blogs = [
  {
    title: "",
    description:
      "Redmi Buds 6 Active Wireless Earbuds",
    image: "./assets/card images/one.webp",
    price: "Rs 4,649",
  },
  {
    title: "",
    description:
      "Realme T100 Wireless Earbuds",
    image: "./assets/card images/two.webp",
    price: "Rs 4,999",
  },
  {
    title: "",
    description: "QCY T13 ANC 2",
    image: "./assets/card images/three.webp",
    price: "Rs 5,499",
  },
  {
    title: "",
    description:
      "Realmi Buds T110",
    image: "./assets/card images/four.jpeg",
    price: "Rs 5,399",
  },
  {
    title: "",
    description:
      "Xiaomi Redmi Buds 6 Lite",
    image: "./assets/card images/five.jpeg",
    price: "Rs 5,899",
  },
  {
    title: "",
    description: "Soundpeats True Wireless Earbuds Free 2 Classic",
    image: "./assets/card images/six.webp",
    price: "Rs 5,149",
  },
  {
    title: "",
    description: "Nothing Buds Pro 2",
    image: "./assets/card images/seven.jpeg",
    price: "Rs 13,999",
  },
  {
    title: "",
    description: "Anker R50i Earbuds",
    image: "./assets/card images/eight.webp",
    price: "Rs 4,999",
  },
];

// Inject Blogs into the DOM
var blogContainer = document.getElementById("blogContainer");

blogs.forEach((blog) => {
  var blogElement = document.createElement("div");
  blogElement.className =
    "bg-white  border border-gray-200 rounded-sm sm:w-60 w-full h-[300px]";

  blogElement.innerHTML = `
          <a href="#">
            <img
              class="rounded-t-lg h-[200px] sm:h-[120px] mx-auto mt-3 "
              src="${blog.image}"
              alt="${blog.title}"
            />
          </a>
          <div class="p-5">
            
            <p class="font-normal text-gray-700 mb-3">
              ${blog.description}
            </p>
            <p class="font-normal text-gray-700 mb-3">
              <b>${blog.price}</b>
            </p>
            
          </div>
        `;
  blogContainer.appendChild(blogElement);
});



// ***********Popup****************

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}

window.onload = () => {
  var popup = document.getElementById('popup');
  popup.style.display = 'flex';
};

