var mobiles = {
    Apple: {
        iPhone13: {
            name: "iPhone 13",
            price: "$799",
            fullName: "Apple iPhone 13 – 128GB",
            category: "Smartphone",
            caption: "The iPhone 13 comes with a powerful A15 Bionic chip, dual 12MP camera system, and 5G support, delivering a great all-round experience.",
            Tags: "128GB, 5G, A15 Bionic, iOS, Dual Camera, Apple",
            color: ["Black", "White", "Red", "Blue", "Pink"],
            img: "https://www.apple.com/v/iphone-13/g/images/overview/hero/hero_iphone_13__e5llxydgx3uq_large.jpg",
        },
        iPhone14: {
            name: "iPhone 14",
            price: "$899",
            fullName: "Apple iPhone 14 – 256GB",
            category: "Smartphone",
            caption: "The iPhone 14 offers an enhanced camera system, a new A16 Bionic chip, and improved battery life, perfect for a premium smartphone experience.",
            Tags: "256GB, 5G, A16 Bionic, iOS, Dual Camera, Apple",
            color: ["Midnight", "Starlight", "Purple", "Red", "Blue"],
            img: "https://www.apple.com/v/iphone-14/g/images/overview/hero/hero_iphone_14__bfzchp2g3z6e_large.jpg",
        },
        iPhone15ProMax: {
            name: "iPhone 15 Pro Max",
            price: "$1099",
            fullName: "Apple iPhone 15 Pro Max – 512GB",
            category: "Smartphone",
            caption: "The iPhone 15 Pro Max delivers an even more powerful experience with a titanium body, improved A17 chip, and an amazing 120Hz OLED display.",
            Tags: "512GB, 5G, A17 Bionic, ProMotion Display, Titanium, Apple",
            color: ["Titanium Gray", "Silver", "Gold", "Blue"],
            img: "https://www.apple.com/v/iphone-15-pro/g/images/overview/hero/hero_iphone_15pro_max__e6pcf5a4a22u_large.jpg",
        },
        iPhoneSE2022: {
            name: "iPhone SE 2022",
            price: "$429",
            fullName: "Apple iPhone SE 2022 – 64GB",
            category: "Smartphone",
            caption: "The iPhone SE 2022 offers an affordable iPhone experience with the same A15 Bionic chip as the iPhone 13, offering great value for money.",
            Tags: "64GB, A15 Bionic, 5G, iOS, Apple",
            color: ["Midnight", "Starlight", "Product Red"],
            img: "https://www.apple.com/v/iphone-se/g/images/overview/hero/hero_iphone_se__d4x6fkw7mye2_large.jpg",
        }
    },
    
    Samsung: {
        GalaxyS22: {
            name: "Galaxy S22",
            price: "$749",
            fullName: "Samsung Galaxy S22 – 128GB",
            category: "Smartphone",
            caption: "The Samsung Galaxy S22 offers a smooth performance, a stunning AMOLED display, and a versatile triple camera setup for all your photography needs.",
            Tags: "128GB, AMOLED Display, 5G, Triple Camera, Samsung",
            color: ["Phantom Black", "Phantom White", "Green", "Pink Gold"],
            img: "https://www.samsung.com/global/galaxy/galaxy-s22/_images/overview/01_hero.jpg",
        },
        GalaxyS23Ultra: {
            name: "Galaxy S23 Ultra",
            price: "$1399",
            fullName: "Samsung Galaxy S23 Ultra – 256GB",
            category: "Smartphone",
            caption: "The Galaxy S23 Ultra offers the most advanced technology with a 200MP camera, Snapdragon 8 Gen 2, and a massive 6.8-inch AMOLED display.",
            Tags: "256GB, 5G, 200MP Camera, AMOLED, Snapdragon 8 Gen 2, Samsung",
            color: ["Phantom Black", "Phantom Silver", "Burgundy", "Green"],
            img: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-s918bzlgins/gallery/in-galaxy-s23-ultra-front-385509078?$ORIGIN_PNG$",
        },
        GalaxyZFold5: {
            name: "Galaxy Z Fold 5",
            price: "$1799",
            fullName: "Samsung Galaxy Z Fold 5 – 512GB",
            category: "Foldable Smartphone",
            caption: "The Samsung Galaxy Z Fold 5 is a foldable phone that combines the power of a tablet and smartphone, with a large inner display and a stunning outer screen.",
            Tags: "512GB, Foldable, AMOLED, 5G, Samsung",
            color: ["Phantom Black", "Cream", "Blue", "Graygreen"],
            img: "https://www.samsung.com/global/galaxy/galaxy-z-fold5/_images/overview/hero.jpg",
        },
        GalaxyA54: {
            name: "Galaxy A54",
            price: "$450",
            fullName: "Samsung Galaxy A54 – 128GB",
            category: "Smartphone",
            caption: "The Samsung Galaxy A54 provides a solid 5G experience with a 120Hz AMOLED display, a 50MP camera, and an affordable price tag.",
            Tags: "128GB, AMOLED, 5G, 120Hz, Samsung",
            color: ["Awesome Black", "Awesome White", "Awesome Purple", "Awesome Blue"],
            img: "https://www.samsung.com/global/galaxy/galaxy-a54-5g/_images/overview/hero.jpg",
        }
    },
    
    OnePlus: {
        OnePlus9: {
            name: "OnePlus 9",
            price: "$729",
            fullName: "OnePlus 9 – 128GB",
            category: "Smartphone",
            caption: "The OnePlus 9 combines a premium design, a high-refresh-rate AMOLED display, and fast charging capabilities, offering a balanced smartphone experience.",
            Tags: "128GB, 5G, AMOLED, OnePlus, Hasselblad Camera",
            color: ["Morning Mist", "Astral Black", "Winter Mist"],
            img: "https://www.oneplus.com/content/dam/o2/oneplus/9/pro-landing/slider/OnePlus9-hero.jpg",
        },
        OnePlus10Pro: {
            name: "OnePlus 10 Pro",
            price: "$999",
            fullName: "OnePlus 10 Pro – 256GB",
            category: "Smartphone",
            caption: "OnePlus 10 Pro features a Snapdragon 8 Gen 1 chip, a powerful 50MP triple camera system, and an immersive 120Hz AMOLED display.",
            Tags: "256GB, 5G, AMOLED, Snapdragon 8 Gen 1, OnePlus",
            color: ["Volcanic Black", "Emerald Forest", "Morning Mist"],
            img: "https://www.oneplus.com/content/dam/o2/oneplus/10-pro-landing/hero/OnePlus-10-Pro-Hero.jpg",
        },
        OnePlus11: {
            name: "OnePlus 11",
            price: "$849",
            fullName: "OnePlus 11 – 128GB",
            category: "Smartphone",
            caption: "OnePlus 11 comes with a flagship Snapdragon 8 Gen 2 processor, a 50MP main camera, and 120Hz AMOLED display for a smooth experience.",
            Tags: "128GB, 5G, Snapdragon 8 Gen 2, AMOLED, OnePlus",
            color: ["Titan Black", "Eternal Green"],
            img: "https://www.oneplus.com/content/dam/o2/oneplus/11-landing/hero/OnePlus11-hero.jpg",
        },
        OnePlusNord2: {
            name: "OnePlus Nord 2",
            price: "$399",
            fullName: "OnePlus Nord 2 – 128GB",
            category: "Smartphone",
            caption: "The OnePlus Nord 2 features a MediaTek Dimensity 1200-AI chipset, a 50MP camera, and a 6.43-inch AMOLED display, delivering great value for its price.",
            Tags: "128GB, MediaTek Dimensity 1200, AMOLED, OnePlus",
            color: ["Gray Sierra", "Blue Haze", "Green Wood"],
            img: "https://www.oneplus.com/content/dam/o2/oneplus/nord-2-landing/hero/OnePlus-Nord-2-Hero.jpg",
        }
    },
    
    Xiaomi: {
        Mi11: {
            name: "Mi 11",
            price: "$749",
            fullName: "Xiaomi Mi 11 – 128GB",
            category: "Smartphone",
            caption: "Xiaomi Mi 11 offers a premium AMOLED display, Snapdragon 888 processor, and a versatile triple camera setup with 108MP primary lens.",
            Tags: "128GB, 5G, Snapdragon 888, AMOLED, Xiaomi",
            color: ["Horizon Blue", "Midnight Grey", "Cloud White"],
            img: "https://www.mi.com/global/mi11/_images/overview/mi11_hero.jpg",
        },
        Mi12Pro: {
            name: "Mi 12 Pro",
            price: "$999",
            fullName: "Xiaomi Mi 12 Pro – 256GB",
            category: "Smartphone",
            caption: "Xiaomi Mi 12 Pro brings a 6.73-inch AMOLED display, Snapdragon 8 Gen 1 chipset, and a 50MP quad-camera setup for a flagship experience.",
            Tags: "256GB, Snapdragon 8 Gen 1, AMOLED, 50MP Camera, Xiaomi",
            color: ["Nebula Blue", "Misty Gray", "Eclipse Black"],
            img: "https://www.mi.com/global/mi12pro/_images/overview/mi12pro_hero.jpg",
        },
        RedmiNote12: {
            name: "Redmi Note 12",
            price: "$199",
            fullName: "Xiaomi Redmi Note 12 – 64GB",
            category: "Smartphone",
            caption: "Redmi Note 12 offers a budget-friendly experience with a large 6.5-inch display, MediaTek Dimensity 700 chipset, and a 48MP camera.",
            Tags: "64GB, 5G, MediaTek Dimensity, 48MP Camera, Xiaomi",
            color: ["Onyx Gray", "Sapphire Blue", "Emerald Green"],
            img: "https://www.mi.com/global/redminote12/_images/overview/redminote12_hero.jpg",
        },
        PocoF4: {
            name: "Poco F4",
            price: "$399",
            fullName: "Poco F4 – 128GB",
            category: "Smartphone",
            caption: "The Poco F4 combines powerful performance with a 120Hz AMOLED display and Snapdragon 870 chipset, making it a great option for gamers.",
            Tags: "128GB, Snapdragon 870, AMOLED, 5G, Poco",
            color: ["Moonlight Silver", "Night Black", "Electric Blue"],
            img: "https://www.mi.com/global/poco-f4/_images/overview/pocoF4_hero.jpg",
        }
    }
};


var mob= document.getElementById('mob')
var mod = document.getElementById('models')
var btn = document.getElementById("search")
for(var keys in mobiles){
    mob.innerHTML += `
    <option vlaue='${keys}'>${keys}</option>
    `
}
  function models() {
        var selectedBrand = mob.value;
        mod.innerHTML = `<option disabled selected value="">Select Model</option>`;

        for (var model in mobiles[selectedBrand]) {
            mod.innerHTML += `
                <option value="${model}">${model}</option>
            `;
        }
    }

    function search(){
        
    }