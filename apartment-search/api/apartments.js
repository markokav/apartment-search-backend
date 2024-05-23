const apartments = [
    {
      id: 1,
      title: "Modern Apartment in Ljubljana",
      description: "A beautiful and modern apartment in the heart of Ljubljana.",
      price: 200000,
      bedrooms: 2,
      location: "Ljubljana, Slovenia",
      lat: 46.056946,
      lng: 14.505751,
      images: [
        "/images/pic1.png",
        "/images/pic2.png",
        "/images/pic3.png",
      ],
    },
    {
      id: 2,
      title: "Cozy House in Maribor",
      description: "A cozy and comfortable house located in Maribor.",
      price: 150000,
      bedrooms: 3,
      location: "Maribor, Slovenia",
      lat: 46.554650,
      lng: 15.645881,
      images: [
        "https://via.placeholder.com/600x400?text=House+2-1",
        "https://via.placeholder.com/600x400?text=House+2-2",
        "https://via.placeholder.com/600x400?text=House+2-3",
      ],
    },
    // Add more listings as needed
  ];
  
  module.exports = (req, res) => {
    res.status(200).json(apartments);
  };
  