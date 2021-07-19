import React, { useState, useEffect } from 'react';


const PostCard = ({id, title, content}) => {
    
    return (
        <div className="col-sm-6">
            <div className="card my-3">
                <div className="card-header">
                    <strong> { title } </strong>
                </div>
                <div className="card-body">
                    { content }
                </div>
            </div>
        </div>
    )
}

export default PostCard;