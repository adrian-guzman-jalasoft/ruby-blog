import React, { useState, useEffect } from 'react';
import { useFetchPosts } from '../hooks/useFetchPosts';
import PostCard from './PostCard';


const PostPage = ({ posts_path, name }) => {

    const { posts, loading } = useFetchPosts(posts_path);

    return (
        <>
            <h1 className="m-2">Posts by {name} </h1>

            {loading &&
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            }

            <div className="row">
                {
                    posts.map(post => (
                        <PostCard
                            key={post.id}
                            title={post.title}
                            content={post.content}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default PostPage;