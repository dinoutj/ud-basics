import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor', props);
    this.state = {
      persons: [
        { id: '1', name: 'Dino', age: 26 },
        { id: '2', name: 'Boki', age: 30 },
        { id: '3', name: 'Lucija', age: 23 }
      ],
      otherState: 'Some random'
    }
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }
  // Defaultno ponašanje PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons || 
  //   nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] inside componentDidUpdate');
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
    console.log('[App.js] inside render');

    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
      <button onClick={()=>{this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
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
