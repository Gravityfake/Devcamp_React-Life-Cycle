import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = { name: 'Unknown User' }
  }
  componentDidMount() {
    const name = prompt("Type ur name !")
    this.setState({ name: name })
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.name && nextState.name !== " ") {
      if(nextState.name === this.state.name) {
        alert("คุณกรอกชื่อซ้ำ");
      }
      else{
        let result = document.getElementById("result")
        result.innerHTML += `<li style={{padding : "20px 20px"}} > prevName : ${this.state.name} <br/> newName : ${nextState.name} <br/> date : ${Date()} </li>`

        return true
      }
    }
    else {
      this.setState({ name: "Unknown User" })
      return false
    }
    // return nextState.name !== " " && nextState.name !== "" ? true : false
  }

  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
        <h1>{this.state.name}</h1>
        <input type={"text"}  style={{ width : "25%"}} id={"inp"}/>
        <button onClick={()=>{
          const value = document.getElementById("inp").value
          this.setState({ name: value })
        }} style={{ width : "25%"}} >Change Your Name</button>
        <ul id='result'>
        
        </ul>
      </div>

    )
  }
}
