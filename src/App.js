import React from "react";
import "./App.css";

function App() {

  const products=[
    {id:1,name:"Headphones",price:"₹599",image:"https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?w=1000&auto=format&fit=crop&q=60"},
    {id:2,name:"Speakers",price:"₹999",image:"https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=1000&auto=format&fit=crop&q=60"},
    {id:3,name:"Smart watch",price:"₹1999",image:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=1000&auto=format&fit=crop&q=60"},
    {id:4,name:"Smartphone",price:"₹9999",image:"https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=1000&auto=format&fit=crop&q=60"},
    {id:5,name:"Laptop",price:"₹29999",image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=300&q=60"},
    {id:6,name:"Tablet",price:"₹14999",image:"https://images.unsplash.com/photo-1527698266440-12104e498b76?w=1000&auto=format&fit=crop&q=60"},
    {id:7,name:"Gaming Mouse",price:"₹1299",image:"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=300&q=60"},
    {id:8,name:"Wireless Keyboard",price:"₹1799",image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&q=60"}
  ];

  return (
    <div className="container">
          <h1>Products</h1>
      <div className="product-list">

        {products.map((product)=>(
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}

      </div>

    </div>
  );
}

function ProductCard(props){

  return(

    <div className="card">
      <div className="card-top">
        <img src={props.image} alt={props.name} className="product-img"/>
            <div className="product-info">
                  <h3>{props.name}</h3>
                  <p className="policy-id">Description</p>
            </div>

      </div>

      <div className="card-bottom">
        <span className="price">{props.price}</span>
        <button className="buy-btn">Buy Now</button>
      </div>

    </div>

  )
}

export default App;