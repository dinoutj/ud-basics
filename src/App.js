import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name:'Dino', age:26},
      {name:'Boki', age:30},
      {name:'Lucija', age: 23}
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
        {name:newName, age:26},
        {name:'Boki', age:30},
        {name:'Lucija', age: 22}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name:event.target.value, age:26},
        {name:'AVC', age:30},
        {name:'Lucija', age: 22}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
       <div className="App">
         <h1>Hi, I'm ReactApp</h1>
         <p>This is really working!</p>
         <button
          style={style}
          onClick={() => this.switchNameHandler('Šime')}>Switch Name</button>
         <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          changed={this.nameChangedHandler} />
         <Person
         name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this, 'Ivo')}>My Hobbies: Racing</Person>
         <Person
         name={this.state.persons[2].name}
         age={this.state.persons[2].age} />
       </div>
     );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'My man'));
  }
}

export default App;
