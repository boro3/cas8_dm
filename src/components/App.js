import React from 'react';
import axios from 'axios'
import { Switch, Route } from 'react-router-dom'
import { Navigation } from './Navigation'
import { Comments } from './Comments'
import { CommentsList } from './CommentsList'




export class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    axios({
      url: 'https://jsonplaceholder.typicode.com/comments',
      method: 'GET'
    })
      .then(res => {
        this.setState({
          comments: res.data.slice(0, 50)
        })
      })
      .catch(err => {
        alert(err)
      })
  }

  render() {
    return (
      <div id='app'>
        <Navigation />
        <Switch>
          <Route path='/comments' render={() => {
            return <Comments comments={this.state.comments} />
          }} />
          <Route path='/comments-list' component={CommentsList} />
        </Switch>
      </div>
    )
  }
}

