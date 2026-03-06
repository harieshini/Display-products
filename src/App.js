import React from 'react';
import './App.css';

function App() {
    const products=[
      {id:1,name:"Headphones",price:"₹599",image:"https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D"},
      {id:2,name:"Speakers",price:"₹999",image:"https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D"},
      {id:3,name:"Smart watch",price:"₹1999",image:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"},
      {id:4,name:"Smartphone",price:"₹9999",image:"https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"},
      {id:5,name:"Laptop",price:"₹29999",image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=300&q=60"},
      {id:6,name:"Tablet",price: "₹14999",image: "https://images.unsplash.com/photo-1527698266440-12104e498b76?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGFibGV0fGVufDB8fDB8fHww"},
      {id:7,name:"Gaming Mouse",price: "₹1299",image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=300&q=60"},
      {id:8,name:"Wireless Keyboard",price: "₹1799",image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&q=60"}
    ];


  return (
    <div className='container'>
      <h1>Products</h1>

      <div className='card-container'>
        {products.map((product)=>(
          <div className='card' key={product.id}>
            <img src={product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className='button'>Buy Now</button>
          </div>

        ))}
      </div>
    </div>
  );
}

export default App;
