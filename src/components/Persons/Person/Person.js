import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] inside constructor', props);
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount');
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  componentWillMount() {
    console.log('[Person.js] inside componentWillMount');
  }

  render() {
    console.log('[Person.js] inside Render');
    return (
      <Aux classes={classes.Person}>
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => { this.inputElement = inp }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Aux>
    );
    // return [
    //   <p key="1" onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old</p>,
    //   <p key="2">{this.props.children}</p>,
    //   <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />,
    // ];
  }
}

Person.propTypes = {
  click: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  changed: PropTypes.func.isRequired
}

export default withClass(Person, classes.Person);