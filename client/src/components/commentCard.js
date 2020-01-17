import React from 'react';

const CommentCard = (props) => {
    console.log(props.comments[1])

    return (
        <div>
            <h4>{props.comments.text}</h4>
            <p>{props.comments.post}</p>
        </div>
    )
}

export default CommentCard;