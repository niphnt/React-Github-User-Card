import React from 'react'
import './App.css';
import User from './User';
import axios from 'axios';

class App extends React.Component {
  state = {
    userInfo: {}
  }

  componentDidMount() {
    // console.log("WE MOUNTED")
    axios.get(`https://api.github.com/users/ladrillo`)
      .then(res => {
        this.setState({
          userInfo: res.data
        })
        console.log(this.state.userInfo)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1>Git User Card</h1>
        <User userInfo={this.state.userInfo}/>
      </div>
    );
  }
}

export default App;

// API GET URL: https://api.github.com/users/ladrillo