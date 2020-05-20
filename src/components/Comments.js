import React from 'react'

export const Comments = (props) => {
    return (
        <div id='comments'>
            {
                props.comments.length > 0 ?
                    <div>
                        {props.comments.map(post => {
                            return (
                                <div key={post.id}>
                                    <p>Name: {post.name}</p>
                                    <p>Email: {post.email}</p>
                                    <p>Comment: {post.body}</p>
                                </div>
                            )
                        })}
                    </div> : <h2>Not loades</h2>
            }
        </div>
    )
}