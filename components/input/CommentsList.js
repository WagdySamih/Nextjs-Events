import { useEffect, useState } from 'react';

import classes from './CommentsList.module.css';

const CommentList = ({ eventId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    const jsonRes = await fetch(`/api/comments/${eventId}`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const payload = await jsonRes.json();
    setComments(payload.comments)
  }
  return (
    <ul className={classes.comments}>
      {
        comments.map((comment) => (
          <li key={comment._id}>
            <p>{comment.text}</p>
            <div>
              By <address>{comment.name}</address>
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default CommentList;