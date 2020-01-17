import React from 'react';

const PostCard = (props) => {
    return (
        <div>
            <h4>{props.posts.title}</h4>
            <p>{props.posts.contents}</p>
        </div>
    )
}

export default PostCard;