import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Todo from './components/Todo'

export class App extends Component {
  state = {
    todos : []
  }

  componentDidMount() {
    fetch('http://localhost:8000/apis/v1?format=json')
    .then(res => res.json())
    .then((data) => {
      this.setState({todos:data})
    })
    .catch(console.log)
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Todo todos={this.state.todos} />
      </div>
    )
  }
}

export default App
