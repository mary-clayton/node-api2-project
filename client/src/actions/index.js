import axios from 'axios';

 export const FETCH_POST_START = 'FETCH_POST_START';
 export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
 export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

 export const fetchPost = (id) => dispatch => {
     dispatch({ type: FETCH_POST_START })
     axios
     .get(`http://localhost:8000/api/posts/${id}`)
     .then(res => {
         console.log('get', res);
        dispatch({ type: FETCH_POST_SUCCESS, payload: res.data })
     })
     .catch(err => {
         console.log('err', err.response);
         dispatch({ type: FETCH_POST_ERROR})
     })
 }

 export const FETCHALL_POSTS_START = 'FETCHALL_POSTS_START';
 export const FETCHALL_POSTS_SUCCESS = 'FETCHALL_POSTS_SUCCESS';
 export const FETCHALL_POSTS_ERROR = 'FETCHALL_POSTS_ERROR';

 export const fetchPostAll = () => dispatch => {
    dispatch({ type: FETCHALL_POSTS_START })
    axios
    .get('http://localhost:8000/api/posts')
    .then(res => {
        console.log('get posts', res);
       dispatch({ type: FETCHALL_POSTS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log('err', err.response);
        dispatch({ type: FETCHALL_POSTS_ERROR})
    })
}

export const FETCHALL_COMMENTS_START = 'FETCHALL_COMMENTS_START';
 export const FETCHALL_COMMENTS_SUCCESS = 'FETCHALL_COMMENTS_SUCCESS';
 export const FETCHALL_COMMENTS_ERROR = 'FETCHALL_COMMENTS_ERROR';

 export const fetchCommentAll = (id) => dispatch => {
    dispatch({ type: FETCHALL_COMMENTS_START })
    axios
    .get(`http://localhost:8000/api/posts/${id}/comments`)
    .then(res => {
        console.log('get comments', res);
       dispatch({ type: FETCHALL_COMMENTS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log('err', err.response);
        dispatch({ type: FETCHALL_COMMENTS_ERROR})
    })
}