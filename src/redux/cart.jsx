
import { useReducer } from "react";
import "./cart.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 1499,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Classic Watch",
    category: "Accessories",
    price: 1999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Everyday Sneakers",
    category: "Footwear",
    price: 1799,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Travel Backpack",
    category: "Bags",
    price: 999,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
  }
];

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = cart.find(
        (item) => item.id === action.product.id
      );

      if (existing) {
        return cart.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...cart, { ...action.product, quantity: 1 }];
    }

    case "INCREMENT":
      return cart.map((item) =>
        item.id === action.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREMENT":
      return cart
        .map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

    case "REMOVE_ITEM":
      return cart.filter((item) => item.id !== action.id);

    case "CLEAR_CART":
      return [];

    default:
      return cart;
  }
}

function Cart() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const formatPrice = (price) =>
    "₹" + price.toLocaleString("en-IN");

  return (
    <div className="shop">
      <header className="navbar">
        <a href="#home" className="logo">ShopEas<span>.</span></a>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#cart">My Cart ({totalItems})</a>
        </nav>
      </header>

      <div className="offer">
        A little something for your everyday.
        <span> Free delivery on orders above ₹2,999</span>
      </div>

      <section className="hero" id="home">
        <div className="hero-text">
          <p className="tagline">YOUR EVERYDAY SHOPPING SPOT</p>
          <h1>Good products.<br />Good prices.</h1>
          <p>
            From daily essentials to things you've been
            wanting for a while, find your next favourite here.
          </p>
          <a href="#products" className="shop-btn">
            Explore products →
          </a>
        </div>

        <img
          src="https://tse2.mm.bing.net/th/id/OIP.pZfRMEMtf5RSnP7XzoqjXgHaE8?r=0&pid=Api&h=220&P=0"
          
        />
      </section>

      <main id="products">
        <div className="section-heading">
          <div>
            <h2>Popular right now</h2>
            <p>A few picks you might like.</p>
          </div>
          <span>4 PRODUCTS</span>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <p className="category">{product.category}</p>
              <h3>{product.name}</h3>
              <p className="price">{formatPrice(product.price)}</p>

              <button
                className="add-btn"
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", product })
                }
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </main>

      <section className="cart-section" id="cart">
        <div className="section-heading">
          <div>
            <h2>My shopping cart</h2>
            <p>
              {totalItems === 0
                ? "Your cart is empty right now."
                : `You have ${totalItems} item(s) in your cart.`}
            </p>
          </div>

          {cart.length > 0 && (
            <button
              className="clear-btn"
              onClick={() => dispatch({ type: "CLEAR_CART" })}
            >
              Clear cart
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Nothing here yet. Have a look at our products!</p>
            <a href="#products">Browse products →</a>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>{formatPrice(item.price)} each</p>
                </div>

                <div className="quantity">
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREMENT", id: item.id })
                    }
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch({ type: "INCREMENT", id: item.id })
                    }
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <strong className="item-total">
                  {formatPrice(item.price * item.quantity)}
                </strong>

                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", id: item.id })
                  }
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="cart-total">
              <span>Total amount</span>
              <strong>{formatPrice(totalPrice)}</strong>
            </div>
          </>
        )}
      </section>

      <footer>
        <a href="#home" className="logo">ShopEas<span>.</span></a>
        <p>Made for everyday shopping.</p>
        <p>© 2026 ShopEas</p>
      </footer>
    </div>
  );
}

export default Cart;
