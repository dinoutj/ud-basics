import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Dino', age: 26 },
      { id: '2', name: 'Boki', age: 30 },
      { id: '3', name: 'Lucija', age: 23 }
    ],
    otherState: 'Some random'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // this.state.persons = [
    //   {name:'Pero', age:23},
    //   {name:'Pero', age:23},
    //   {name:'Pero', age:23}
    // ]
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Boki', age: 30 },
        { name: 'Lucija', age: 22 }
      ],
      otherState: 'some random value',
      showPersons: false
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assing({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = 
          <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
        appTitle={props.title}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonHandler} />
        {persons}
      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'My man'));
  }
}

export default App;
