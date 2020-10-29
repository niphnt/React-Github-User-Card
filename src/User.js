import React from 'react';
import axios from 'axios';

class User extends React.Component {

  state = {
    followers: []
  }
  
  componentDidMount() {
    console.log(this.props)
    axios.get(this.props.userInfo.followers_url)
      .then(res => {
        this.setState({
          followers: res.data
        })
      })
  }

  render() {
    return(
      <div>
        <h2>{this.props.userInfo.name}</h2>
        <img src={this.props.userInfo.avatar_url} />
        <p>Username: {this.props.userInfo.login}</p>
        <h3>Followers:</h3>
        {this.state.followers.map(follower => {
          return (
            <div> 
              <a href={follower.html_url}>{follower.login}</a>
            </div>
          )
        })}
      </div>
    )
  }
}

export default User;