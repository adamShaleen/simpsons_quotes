import React, { Component } from "react";
import './App.css';
import Header from "./Containers/Header/Header";
import Card from "./Containers/Card/Card"
import Footer from "./Containers/Footer/Footer";


class App extends Component {
  render() {
    return (
      <section className="App">
        <Header/>
        <Card/>
        <Footer/>
      </section>
    );
  }
}

export default App;
