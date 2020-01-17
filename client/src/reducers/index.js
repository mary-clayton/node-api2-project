import {
FETCHALL_POSTS_START,
FETCHALL_POSTS_SUCCESS,
FETCHALL_POSTS_ERROR,
FETCHALL_COMMENTS_START,
FETCHALL_COMMENTS_SUCCESS,
FETCHALL_COMMENTS_ERROR,
FETCH_POST_START,
FETCH_POST_SUCCESS,
FETCH_POST_ERROR
} from '../actions/index'

export const initialState = {
    isFetching: false,
    isEditing: false,
    error: '',
    post: [],
    postId: [],
    allPosts: [],
    allComments: [],
    id: []
};

export const postsReducer = (state = initialState, action) => {
switch (action.type) {
    case FETCH_POST_START: 
    return {
        ...state,
        isFetching: true
    }
    case FETCH_POST_SUCCESS: 
    return {
        ...state,
        isFetching: false,
        post: action.payload
    }
    case FETCH_POST_ERROR: 
    return {
        ...state,
        isFetching: false,
        error: ''
    }
    //

    case FETCHALL_POSTS_START: 
    return {
        ...state,
        isFetching: true
    }
    case FETCHALL_POSTS_SUCCESS: 
    return {
        ...state,
        isFetching: false,
        allPosts: action.payload
    }
    case FETCHALL_POSTS_ERROR: 
    return {
        ...state,
        isFetching: false,
        error: ''
    }
//

    case FETCHALL_COMMENTS_START: 
    return {
        ...state,
        isFetching: true
    }
    case FETCHALL_COMMENTS_SUCCESS: 
    return {
        ...state,
        isFetching: false,
        allComments: action.payload
    }
    case FETCHALL_COMMENTS_ERROR: 
    return {
        ...state,
        isFetching: false,
        error: ''
    }
    default:
      return state;
}
}