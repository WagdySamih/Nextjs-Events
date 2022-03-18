import { useState } from 'react';

import CommentList from './CommentsList';
import NewComment from './NewComment';
import classes from './Comments.module.css';

const Comments = (props) => {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  }

  const addCommentHandler = async (commentData) => {
    // send data to API
    const res = await fetch(`/api/comments/${eventId}`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(commentData)
    })
    const payload = await res.json();
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList eventId={eventId} />}
    </section>
  );
}

export default Comments;