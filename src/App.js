import React, { Component } from "react";
import './App.css';
import Error from "./Components/Error/Error";
import Header from "./Containers/Header/Header";
import Card from "./Containers/Card/Card"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      character: "",
      imageUrl: "",
      error: false,
      errorText: ""
    }

    this.fetchData = this.fetchData.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  async fetchData() {
    const response = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");

    if (response.ok) {
        return await response.json();
    } 

    this.setState({
      error: true,
      errorText: response.statusText
    })
    
    throw new Error(`There was an error with the request: ${this.errorText}`);
  }
  
  async updateData() {
    const data = await this.fetchData();
    
    this.setState({
      quote: data[0].quote,
      character: data[0].character,
      image: data[0].image,
      error: false,
      errorText: ""
    })
  }
  
  async componentWillMount() {
    console.log("Component will mount")
    this.updateData();
  }

  componentDidMount() {
    console.log("Component mounted")
  }

  render() {
    return (
      <section className="App">
        <Header/>
        {this.state.error ? 
          <Error errorText={this.state.errorText}/> 
          : 
          <Card onClick={this.updateData} data={this.state}/>
        }
      </section>
    );
  }
}

export default App;
