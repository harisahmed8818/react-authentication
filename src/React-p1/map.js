const musicData = [
  { artist: "Adele", name: "25", sales: 1731000 },
  { artist: "Drake", name: "Views", sales: 1608000 },
  { artist: "Beyonce", name: "Lemonade", sales: 1554000 },
];

const albumSalesStrings = musicData.map((album) => {
  return `${album.name} by ${album.artist} sold ${album.sales} copies`;
});

console.log(albumSalesStrings);
