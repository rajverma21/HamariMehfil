const arr = [`Main Chai Mei Dooba Cheeni Jaisa Tha\nTu Chai Mei Doobi Biscuit Jaisi Thi,\nMain Doobte He Ghul Jata Tha\nTu Doobte He Tut Jati Thi 🥹`,
    `Tumhari Ek Muskurahat Ne Mere Hosh Udda Diye,\nMain Hosh Mei Aaya He Tha Ki Tum Wapas Muskura Diye 🥰`,
    `He : Are You a Magician?\nShe : No, Why ?\nHe : Because, Every Time I Look At You, Everyone Else Disappears 😌`,
    `Naa Sath Hai Kisi Ka,\nNaa Sahara Hai Koi\nNaa Ham Hain Kisi Ke,\nNaa Hamara Hai Koi 😄`,
    `Phir Se Tere Mehfil Mein Chala Aya Hoon,\nAndaz Wahi Hai Bas Alfaz Naye Laya Hu ✌🏻`,
    `Saza Hume Ye Kaisi Mili Dil Lagane Ki,\nRoo Rahe Magar Tamnna Thi Muskurane Ki\nApna Dard Kise Dikhau Ae Dost,\nDard Bhi Ussi Ne Diya Jo Wajah Thi Muskurane Ki 🥹`,
    `Woh Humse Apni Marzi Se Baat Karte Hai,\nAur Hum Bhi Kitney Pagal Hai Ke Unki Marji Ka Intezar Karte Hai 😇`,
    `Yaad Karte Hai Tumhe Tanhai Mei\nDil Duba Hai Gamo Ki Gehrai Mei,\nHume Mat Dhundna Duniya Ki Bhid Mei\nHum Milenge Tumhe Tumhari He Parchai Mei 🤗`,
    `Humne Bhi Kabhi Pyar Kiya Tha\nThoda Nahi Besumar Kiya Tha,\nDil Tut Sa Gaya,\nJab Usne Kaha Aree Maine Toh Majak Kiya Tha 🥲`,
    `Kaun Kehta Hai Ki Uske Bin Main Mar Jaunga,\nMain Toh Dariya Hu Sagar Me Utar Jaunga\nWo Taras Jaygi Pyar Ki Ek Bund k Liye Bhi,\nMain Toh Badal Hun Kisi Aur Pe Baras Jaunga 👿`,
    `Aap Khud Nahi Janti Aap Kitni Pyari Ho,\nJaan Ho Hamari Par Jaan Se Pyaari Ho\nDuriyon Ke Hone Se Koi Fark Nahi Padta,\nAap Kal Bhi Hamari Thi Aaj Bhi Hamari Ho 💓`,
    `Kitna Pyar Hai Tumse Yeh Jan Lo,\nTum Hi Zindagi Ho Meri Iss Baat Ko Maan Lo\nTumhe Dene Ko Mere Paas Kuch Bhi Nahi,\nBas Ek Jaan Hai Jab Ji Chahe Maang Lo 💖`,
    `Don't Trust Anyone\nBecause Your Own Shadow\nLeaves You In The Nightmare 💀`,
    `Kash Aap Titanic Mei Hoti Toh Hadsa Pesh Naa Aata,\nKyoki Iceberg Aap Ko Dekhhte He Pighal Jata 🥰`,
    `He : Tum Sab Larkiyon Se Alag Ho\nShe : Tum Pakka Yeh Sab Larkiyon Ko Bolti Hoge\nHe : Haa Par Aab Suunne Ki Baari Tumhari Hai 😂`,
    `He : Main Bore Kar Raha Hoon Na Tumhe\nShe : Nahi, I'm Actually Enjoying Your Jokes\nHe : Tum Kar Rahi Ho 😅`,
    `Tere Khayal Se Khud Ko Chhupa Ke Dekha Hai,\nDil-o-Najar Ko Rula-Rula Ke Dekha Hai,\nTu Nahi Toh Kuch Bhi Nahi Hai Teri Kasam,\nMaine Kuch Pal Tujhe Bhula Ke Dekha Hai`
]

let len = arr.length;

let crd = document.getElementById('card')

let rdm = Math.floor(Math.random() * (len + 1));

let nxt = document.getElementById('next');
nxt.addEventListener('click', function () {
    crd.innerText = arr[rdm];
    if (rdm == (len - 1)) {
        rdm = 0;
    }
    else {
        rdm++;
    }
})