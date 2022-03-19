import { useState, useContext } from 'react';

import CommentList from './CommentsList';
import NewComment from './NewComment';
import NotificationContext from "../../store/notification-context"
import classes from './Comments.module.css';

const errorMessage = "something went wrong please try again later"

const Comments = (props) => {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const NotificationCtx = useContext(NotificationContext)

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  }

  const addCommentHandler = async (commentData) => {
    try {
      NotificationCtx.showNotification({
        title: "Posting",
        message: "Creating comment in progress",
        status: "pending"
      })
      //! Fetch only detect network error 400:500 should catch in rejected!
      const res = await fetch(`/api/comments/${eventId}`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(commentData)
      })

      const payload = await res.json();
      if (!res.ok) throw (payload)

      NotificationCtx.showNotification({
        title: "Success!",
        message: "Comment is created successfully",
        status: "success"
      })
    } catch (error) {
      NotificationCtx.showNotification({
        title: "Failed!",
        message: error.message || errorMessage,
        status: "error"
      })
    }
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