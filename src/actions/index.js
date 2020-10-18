import jsonPlaceholder from '../apis/jsonPlaceholder';
import { FETCH_POSTS, FETCH_USER, NEW_POST } from './types';
import _ from 'lodash';
import axios from 'axios';

export const fetchPosts = () => {
    return async function(dispatch) {
        const response = await jsonPlaceholder.get('/posts');
        return dispatch({
            type: FETCH_POSTS, 
            payload: response.data 
        })
    }
}


export const createPost = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    ).catch(err=>console.log(err));
};


export function fetchUsers(id){
    return function(dispatch){
        return _fetchUser(id, dispatch);
    }
}

const _fetchUser = _.memoize( async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    return dispatch({
        type: FETCH_USER, 
        payload: response.data,
    })
})
