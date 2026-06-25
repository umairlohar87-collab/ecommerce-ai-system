import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App(){

return(

<BrowserRouter>

<Routes>

<Route 
path="/" 
element={<Home/>}
/>


<Route 
path="/login" 
element={<Login/>}
/>


<Route 
path="/register" 
element={<Register/>}
/>


</Routes>

</BrowserRouter>

)

}


export default App;

function App() {
return (
<> <nav className="navbar"> <div className="logo">CommerceAI</div>

```
    <ul className="nav-links">
      <li>Home</li>
      <li>Products</li>
      <li>Features</li>
      <li>Pricing</li>
      <li>Contact</li>
    </ul>

    <button className="btn-primary">Get Started</button>
  </nav>

  <section className="hero">
    <div className="hero-content">
      <span className="badge">AI Powered Ecommerce Platform</span>

      <h1>
        Build The Future Of
        <span> Online Shopping</span>
      </h1>

      <p>
        Increase sales, automate customer support, predict trends,
        and grow your ecommerce business with powerful AI tools.
      </p>

      <div className="hero-buttons">
        <button className="btn-primary">Start Free Trial</button>
        <button className="btn-secondary">Watch Demo</button>
      </div>

      <div className="stats">
        <div>
          <h2>500+</h2>
          <p>Stores</p>
        </div>

        <div>
          <h2>98%</h2>
          <p>Accuracy</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>Automation</p>
        </div>
      </div>
    </div>

    <div className="dashboard-card">
      <h3>AI Analytics Dashboard</h3>

      <div className="chart">
        <div className="bar h1"></div>
        <div className="bar h2"></div>
        <div className="bar h3"></div>
        <div className="bar h4"></div>
        <div className="bar h5"></div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h4>$128K</h4>
          <p>Revenue</p>
        </div>

        <div className="card">
          <h4>8420</h4>
          <p>Orders</p>
        </div>
      </div>
    </div>
  </section>

  <section className="features">
    <h2>AI Features</h2>

    <div className="feature-grid">
      <div className="feature-card">
        <h3>AI Recommendations</h3>
        <p>Smart product suggestions increase conversions.</p>
      </div>

      <div className="feature-card">
        <h3>AI Chatbot</h3>
        <p>24/7 customer support automation.</p>
      </div>

      <div className="feature-card">
        <h3>Predictive Analytics</h3>
        <p>Know future trends before competitors.</p>
      </div>

      <div className="feature-card">
        <h3>Marketing Automation</h3>
        <p>Automated campaigns driven by AI.</p>
      </div>
    </div>
  </section>

  <section className="products">
    <h2>Featured Products</h2>

    <div className="product-grid">
      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
          alt=""
        />
        <h3>Smart Sneakers</h3>
        <p>$199</p>
      </div>

      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
          alt=""
        />
        <h3>Premium Watch</h3>
        <p>$299</p>
      </div>

      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
          alt=""
        />
        <h3>AI Smartphone</h3>
        <p>$999</p>
      </div>
    </div>
  </section>

  <footer className="footer">
    <h2>CommerceAI</h2>
    <p>Next Generation Ecommerce Platform</p>
  </footer>
</>
```

)
}

export default App
