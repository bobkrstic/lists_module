import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "werwer", name: "Jack", age: 28 },
      { id: "adaddfe", name: "Bob", age: 25 },
      { id: "sdfadf", name: "Vika", age: 24 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personAtIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const updatedPerson = { ...this.state.persons[personAtIndex] };

    updatedPerson.name = event.target.value;

    // making a copy of the state
    const personsCopy = [...this.state.persons];
    personsCopy[personAtIndex] = updatedPerson;

    this.setState({
      persons: personsCopy
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    // making a copy of the state array
    const personsNewCopy = [...this.state.persons];
    personsNewCopy.splice(personIndex, 1);
    this.setState({ persons: personsNewCopy });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    // by default 'persons' is null. If the statement is true, persons will hold the code below
    let persons = null;

    // index is given by react
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes will be ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hello</h1>
          <p className={classes.join(" ")}>
            This will change color as the number of components change.
          </p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
