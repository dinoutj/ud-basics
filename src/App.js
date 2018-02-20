import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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
    let btnClass = '';
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm ReactApp</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'My man'));
  }
}

export default App;
