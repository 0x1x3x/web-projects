import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

const arr = [
  {
    title: "Women's Dunk High 'Burgundy Crush'",
    price: 130,
    imageUrl: "/img/nike-jordan-mid-1/1.webp",
  },
  {
    title: "Dunk HI Retro University 'Safety Orange'",
    price: 130,
    imageUrl: "/img/nike-jordan-mid-1/2.webp",
  },
  {
    title: "Dunk HI Retro University 'Chenille ...'",
    price: 120,
    imageUrl: "/img/nike-jordan-mid-1/3.webp",
  },
  {
    title: "Women's Dunk High LXX 'Cinnabar'",
    price: 130,
    imageUrl: "/img/nike-jordan-mid-1/4.webp",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Cart />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Nike Air Jordan Mid 1</h1>
          <div className="search">
            <img width={18} height={18} src="img/search.png" alt="" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
