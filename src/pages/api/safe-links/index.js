const links = [
  {
    id: 1,
    name: "Opensea",
    link: "https://opensea.io/",
    instagram: "https://www.instagram.com/opensea/",
    twitter: "https://twitter.com/opensea",
    imageURL:
      "https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png",
  },
  {
    id: 2,
    name: "Tailwindcss",
    link: "https://opensea.io/",
    instagram: "https://www.instagram.com/opensea/",
    twitter: "https://twitter.com/opensea",
    imageURL:
      "https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg",
  },
  {
    id: 3,
    name: "Instagram",
    link: "https://opensea.io/",
    instagram: "https://www.instagram.com/opensea/",
    twitter: "https://twitter.com/opensea",
    imageURL:
      "https://seeklogo.com/images/I/instagram-new-2016-logo-4773FE3F99-seeklogo.com.png",
  },
  {
    id: 4,
    name: "Twitter",
    link: "https://opensea.io/",
    instagram: "https://www.instagram.com/opensea/",
    twitter: "https://twitter.com/opensea",
    imageURL:
      "https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png",
  },
  {
    id: 5,
    name: "Binance",
    link: "https://opensea.io/",
    instagram: "https://www.instagram.com/opensea/",
    twitter: "https://twitter.com/opensea",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Binance-coin-bnb-logo.png/600px-Binance-coin-bnb-logo.png",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(links))
};
