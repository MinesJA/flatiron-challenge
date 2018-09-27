import React, { Component } from 'react';
import Adapter from './Adapter';
import 'semantic-ui-css/semantic.min.css';
import { Card, Dropdown } from 'semantic-ui-react'
import GithubCard from './githubCard'
import './App.css';


class App extends Component {
  state={
    repoTotal: 0,
    options: [],
    currentValues: [],
    currentUsers: [],
    users: {}
  }

  handleAddition = (e, {value}) => {
    let username = value.toLowerCase()

    Adapter.fetchGithubUser(username)
      .then(response => {
        this.addUser(username, response)
      })
      .catch(response => alert(response.message))
  }

  handleChange = (e, { value }) => {
    this.setState({currentValues: value}, this.renderUsers)
  }


  addUser = (username, response) => {
    let { public_repos } = response
    let { repoTotal, users, options } = this.state

    let usersObj = {...users}
    usersObj[username] = response

    // Calculates the max level of the progress bar
    let newTotal = repoTotal > public_repos ? repoTotal : ( public_repos * 0.25 ) + public_repos

    this.setState({
      options: [...options, {key: username, text: username, value: username}],
      users: Object.assign({}, users, usersObj),
      repoTotal: newTotal
    }, this.renderUsers)

  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Github User Viewer</h1>
          <p>Add multiple usernames to view info on different Github users</p>

          <Dropdown
           options={this.state.options}
           placeholder='Search by Username'
           search
           selection
           multiple
           allowAdditions
           value={this.state.currentValues}
           onAddItem={this.handleAddition}
           onChange={this.handleChange}
           />

        </header>

      </div>
    );
  }
}

export default App;
