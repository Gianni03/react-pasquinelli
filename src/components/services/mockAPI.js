
const data = [
  {
    id: 1,
    title: "JOHN PETRUCCI TRINITY PICK",
    price: 200,
    categoria: "a",
    detail:
      "This pick combines a custom Small Tri shape with the contoured shoulders of the Flow® Pick shape with a Jazz III-inspired tip for a playing experience that's smoother, faster, and more disciplined than ever before.",
    img: "/assets/jp001.jpg",
  },
  {
    id: 2,
    title: "GATOR GRIP® JAZZ III PICK",
    price: 150,
    categoria: "b",
    detail:
      "Gator Grip Picks feature a matte surface for a tight, nonslip grip and a molded, beveled edge for a fast attack and a soft release. The Gator Grip Jazz III Pick combines all of those qualities with the speed and precision of the Jazz III shape for a smoother playing experience and a more articulate tone.",
    img: "/assets/jp002.jpg",
  },
  {
    id: 3,
    title: "JOHN PETRUCCI SIGNATURE JAZZ III PICK",
    price: 500,
    categoria: "c",
    detail:
      "Designed to the prog rock legend's own specifications, the 1.5mm John Petrucci Jazz III is made from Ultex and features a raised JP logo grip and slick polished tip.",
    img: "/assets/jp003.jpg",
  },
  {
    id: 4,
    title: "ERIC JOHNSON JAZZ III",
    price: 9800,
    categoria: "d",
    detail:
      "To create the Eric Johnson Jazz III Pick, we laser-scanned a vintage Jazz III from Eric's collection and recreated it with the most advanced molding techniques available. The result is a Jazz III with a more refined and smooth tip, more flexibility, and a matte finish with raised logos for an incredible gripping surface.",
    img: "/assets/jp004.jpg",
  },
];

export default function getItems() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}
export function getItem(idItem) {

  return new Promise((resolve, reject) => {
    let itemFind = data.find((item)=> {
      return item.id === Number(idItem)
    });

    if (itemFind) resolve(itemFind);
    else reject(new Error("item no encontrado"));
  });
}

export function getItemByCategory(cat){
  return new Promise((resolve, reject) => {

    let itemFind = data.filter((item)=> {
    
      return item.categoria === cat;
    
    });

    if (itemFind) resolve(itemFind);
    else reject(new Error("item no encontrado"));
  });
}
