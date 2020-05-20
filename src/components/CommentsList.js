import React from 'react'
import axios from 'axios'

export class CommentsList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
    }

    getComments = () => {
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
            <div id='commentsList'>
                <h2>Comment List</h2>
                <button type={'button'} onClick={() => this.getComments()}>
                    Get Comments
                </button>
                {
                    this.state.comments.length > 0 ?
                        <div>
                            {this.state.comments.map(post => {
                                return (
                                    <div key={post.id}>
                                        <p>Name: {post.name}</p>
                                        <p>Email: {post.email}</p>
                                        <p>Comment: {post.body}</p>
                                    </div>
                                )
                            })}
                        </div> : <h2>Press the Button to load comments</h2>
                }
            </div>
        )
    }
}