import React, { useEffect, useState } from "react";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Books from "./pages/books";
import { books } from "./data";
import BookInfo from "./pages/bookinfo";
import Cart from "./pages/cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    const existingBook = cart.find(item => item.id === book.id);

    setCart(existingBook
      ? cart.map(item => 
          item.id === book.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      : [...cart, { ...book, quantity: 1 }]
    );
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item =>
      item.id === book.id
        ? { ...item, quantity: +quantity }
        : item
    ));
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems() {
    let counter =0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems ={numberOfItems()}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
