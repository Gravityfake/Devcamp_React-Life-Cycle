import React, { Component, useState } from 'react'

export default class App extends Component {
  render() {
    return (
      <Data name="THIS IS TEST" />
    );
  }
}

class Data extends React.Component {
  constructor() {
    super();
    console.log('constructor');
    this.state = { value: 1 }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return props
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log(this.props);
    return <h1>{this.props.name}</h1>
  }
}

