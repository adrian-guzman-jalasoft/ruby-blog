import React, { useState } from 'react';

const Post = (props) => {

    const [post] = useState(props.post);

    return (
        <div className="col-sm-6">
            <div className="card my-3">
                <div className="card-header">
                    <strong> {post.title} </strong>
                </div>
                <div className="card-body">
                    {post.content}
                </div>
            </div>
        </div>
    )
}

export default Post;