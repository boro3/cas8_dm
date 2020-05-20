import React from 'react'
import { Link } from 'react-router-dom'

export class Navigation extends React.Component {

    render() {
        return (
            <div id='navigation'>
                <ul>
                    <li><Link to={'/comments'} >Comments</Link ></li>
                    <li><Link to={'/comments-list'} >CommentsList</Link ></li>
                </ul>
            </div>
        )
    }
}