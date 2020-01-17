import React, {useEffect} from 'react';
import PostCard from './postCard';
import CommentCard from './commentCard';
import {connect} from 'react-redux';
import {fetchPostAll, fetchCommentAll} from '../actions/index'; 

const PostList = (props) => {

    useEffect(()=> {
        props.fetchPostAll()
        props.fetchCommentAll(1)
    }, [fetchPostAll])
    return (
        <div className="posts">
            {props.allPosts.map(posts => {
                return <PostCard posts={posts} />
            })}
            {props.allComments.map(comments => {
                return <CommentCard comments={comments} />
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        allPosts: state.allPosts,
        allComments: state.allComments
    }
}

export default connect(mapStateToProps, {fetchPostAll, fetchCommentAll})(PostList);