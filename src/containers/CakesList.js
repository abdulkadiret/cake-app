import React from "react";
import Cake from '../components/Cake.js'
import Search from '../components/Search.js';
import AddCakes from '../components/AddCakes.js'

class CakesList extends React.Component {
  constructor() {
    super();
    this.state = {
      cakes: []
    };
    fetch(
      "https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json"
    )
      .then(data => {
        return data.json();
      })
      .then(serverCakes => {
        this.allCakes = serverCakes;
        this.setState({
          cakes: serverCakes
        });
      });
  }

  searchCake = event => {
    const filterdCake = this.allCakes.filter(cake => {
      const inputValue = event.target.value;
      if (cake.title.toLowerCase().includes(inputValue)) {
        return cake.title;
      }
      // console.log(cake.title.toLowerCase());
    });
    this.setState({ cakes: filterdCake });
    // console.log(filterdCake);
  };

  addingNewCake = event => {
    const newCake = { title: event.target.value };
    if (event.key === "Enter") {
      this.allCakes.push(newCake);
      event.target.value = "";
    }
    // console.log(this.allCakes);
    this.setState({ cakes: this.allCakes });
  };

  render() {
    return <div>
        <Search onChange={this.searchCake} />
        {/* <input type="text" onChange={this.searchCake} /> */}
        <AddCakes onKeyPress={this.addingNewCake} />
        {/* <input type="text" placeholder="Add new cake" onKeyPress={this.addingNewCake} /> */}

        {/* {this.state.cakes.map(cake => {
          // return <Cake title={cake.title} desc={cake.desc} image = {cake.image}/> ......first commented
          return <Cake {...cake} />;
        })} */}

        {this.state.cakes.map((cake, index) => {
          return <Cake key={index} {...cake} />;
        })}
      </div>;
  }
}

export default CakesList;
