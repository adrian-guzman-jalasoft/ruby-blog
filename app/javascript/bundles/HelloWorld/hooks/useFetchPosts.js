import { useState, useEffect } from 'react';
import { getPosts } from '../../helpers/getPosts';

export const useFetchPosts = (posts_path) => {
    const [state, setState] = useState({ posts: [], loading: true })

    useEffect(() => {
        getPosts(posts_path)
            .then((data) => {
                setState({
                    posts: data,
                    loading: false,
                })
            })
    }, [posts_path])

    return state;
}