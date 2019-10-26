import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Jack", age: 28 },
      { name: "Bob", age: 25 },
      { name: "Vika", age: 24 }
    ]
  };

  switchNameHandler = newName => {
    // console.log("Clicked");
    // Dont do this: this.state.persons[0].name = "Jacko";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Bob", age: 25 },
        { name: "Vika", age: 25 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Jack", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Vika", age: 26 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hello</h1>
        <p>This is a paragraph</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Jackie Kennedy")}
        >
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Jack!")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
