import React, { Component } from 'react';

    class App extends Component {

      state = {
        contacts: []
      }
      componentDidMount() {
        fetch('http://localhost:8000/apis/v1?format=json')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }      
}
export default App;