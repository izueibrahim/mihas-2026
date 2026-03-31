const fs = require('fs');
let data = fs.readFileSync('c:/Users/User/Desktop/mihas-2026/data/news.js', 'utf8');
data = data.replace(/image: \".*?\",/g, 'frontImage: "/images/example/front-picture.png",\n        heroImage: "/images/example/picture-hero.png",\n        contentImage: "/images/example/content-picture.png",');
fs.writeFileSync('c:/Users/User/Desktop/mihas-2026/data/news.js', data);
